import { Prisma } from ".prisma/client";
import { PrismaService } from "@/api/services/Prisma.service";
import { BadRequestException, Body, Controller, Delete, Get, Injectable, Module, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CommonDelegateType, PrismaCrudClasses, PrismaModulesType } from "../generated/crud/prismaModuleTypes";

const createModule = <ModuleName extends keyof PrismaModulesType>(module: PrismaModulesType[ModuleName]) => {
  type Module = PrismaModulesType[ModuleName];
  type Entity = Module["entity"];
  class ConnectDto extends module.connectDto {}
  class CreateDto extends module.createDto {}
  class UpdateDto extends module.updateDto {}
  type FindManyType = Module["findManyType"];

  @Injectable()
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

  @ApiTags(module.name)
  @Controller(module.name)
  class EntityController {
    constructor(private readonly service: EntityService) {
      this.service = new EntityService();
    }

    @Post()
    create(@Body() createEntityDto: CreateDto) {
      return this.service.create(createEntityDto);
    }

    @Get()
    findMany(@Query() params?: FindManyType) {
      return this.service.findMany(params);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
      const idNum = Number.parseInt(id);
      if (isNaN(idNum)) {
        return new BadRequestException("Id needs to be an integer");
      }
      return this.service.findOne({ id: idNum });
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() data: UpdateDto) {
      const idNum = Number.parseInt(id);
      if (isNaN(idNum)) {
        return new BadRequestException("Id needs to be an integer");
      }
      return this.service.update({ where: { id: idNum }, data });
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
      const idNum = Number.parseInt(id);
      if (isNaN(idNum)) {
        return new BadRequestException("Id needs to be an integer");
      }
      return this.service.delete({ id: idNum });
    }
  }
  @Module({
    controllers: [EntityController],
    providers: [EntityService],
  })
  class EntityModule {}
  return EntityModule;
};

const allModules = Object.values(Prisma.ModelName)
  .filter(() => Math.random() > 0.5)
  .map((name) => {
    return createModule(PrismaCrudClasses[name]);
  });

@Module({
  imports: allModules,
  providers: [PrismaService],
})
export class PrismaCrudModule {}
