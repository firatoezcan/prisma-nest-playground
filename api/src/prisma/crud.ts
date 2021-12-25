import { Prisma } from ".prisma/client";
import { PrismaService } from "@/api/services/Prisma.service";
import { BadRequestException, Body, Controller, Delete, Get, Injectable, Module, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CommonDelegateType, PrismaCrudClasses, PrismaModulesType } from "../generated/crud/prismaModuleTypes";

const createModule = <ModuleName extends keyof PrismaModulesType>(module: PrismaModulesType[ModuleName]) => {
  const { name } = module;

  type Module = PrismaModulesType[ModuleName];
  type FindManyType = Module["findManyType"];

  class Entity extends module.entity {}
  Object.defineProperty(Entity, "name", { value: `${name}Entity` });
  class ConnectDto extends module.connectDto {}
  Object.defineProperty(ConnectDto, "name", { value: `${name}ConnectDto` });
  class CreateDto extends module.createDto {}
  Object.defineProperty(CreateDto, "name", { value: `${name}CreateDto` });
  class UpdateDto extends module.updateDto {}
  Object.defineProperty(UpdateDto, "name", { value: `${name}UpdateDto` });

  class EntityService {
    private delegate: CommonDelegateType;

    constructor() {
      this.delegate = module.delegate as CommonDelegateType;
    }

    async findOne(where: ConnectDto): Promise<Entity | null> {
      return this.delegate.findUnique({
        where,
      });
    }

    async findMany(params: FindManyType): Promise<Entity[]> {
      const { skip, take = 20, cursor, where, orderBy } = params ?? {};
      return this.delegate.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }

    async create(data: CreateDto): Promise<Entity> {
      return this.delegate.create({
        data,
      });
    }

    async update(params: { where: ConnectDto; data: UpdateDto }): Promise<Entity> {
      return this.delegate.update(params);
    }

    async delete(where: ConnectDto): Promise<Entity> {
      return this.delegate.delete({
        where,
      });
    }
  }
  Object.defineProperty(EntityService, "name", { value: `${name}EntityService` });

  const endpoint = name.charAt(0).toLowerCase() + name.slice(1) + "s";
  @ApiTags(module.name, "Prisma")
  @Controller(endpoint)
  class EntityController {
    constructor(private readonly service: EntityService) {
      this.service = new EntityService();
    }

    @Post()
    @ApiResponse({ status: 200, type: Entity, description: `create(${name})` })
    create(@Body() createEntityDto: CreateDto) {
      return this.service.create(createEntityDto);
    }

    @Get()
    @ApiResponse({ status: 200, type: Entity, isArray: true, description: `findMany(${name})` })
    findMany(@Query() params?: FindManyType) {
      return this.service.findMany(params);
    }

    @Get(":id")
    @ApiResponse({ status: 200, type: Entity, description: `findOne(${name})` })
    findOne(@Param("id") id: string) {
      const idNum = Number.parseInt(id);
      if (isNaN(idNum)) {
        return new BadRequestException("Id needs to be an integer");
      }
      return this.service.findOne({ id: idNum });
    }

    @Patch(":id")
    @ApiResponse({ status: 200, type: Entity, description: `update(${name})` })
    update(@Param("id") id: string, @Body() data: UpdateDto) {
      const idNum = Number.parseInt(id);
      if (isNaN(idNum)) {
        return new BadRequestException("Id needs to be an integer");
      }
      return this.service.update({ where: { id: idNum }, data });
    }

    @Delete(":id")
    @ApiResponse({ status: 200, type: Entity, description: `delete(${name})` })
    delete(@Param("id") id: string) {
      const idNum = Number.parseInt(id);
      if (isNaN(idNum)) {
        return new BadRequestException("Id needs to be an integer");
      }
      return this.service.delete({ id: idNum });
    }
  }

  Object.defineProperty(EntityController, "name", { value: `${name}EntityController` });
  @Module({
    controllers: [EntityController],
    providers: [EntityService],
  })
  class EntityModule {}
  Object.defineProperty(EntityModule, "name", { value: `${name}EntityModule` });

  return EntityModule;
};

const allModules = Object.values(Prisma.ModelName).map((name) => {
  return createModule(PrismaCrudClasses[name]);
});

@Module({
  imports: allModules,
  providers: [PrismaService],
})
export class PrismaCrudModule {}
