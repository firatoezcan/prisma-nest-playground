import { Prisma } from ".prisma/client";
import { PrismaService } from "@/api/services/Prisma.service";
import { BadRequestException, Body, Controller, Delete, Get, Injectable, Module, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CommonDelegateType, PrismaModulesType } from "../generated/crud/prismaModuleTypes";

const createModule = <ModuleName extends keyof PrismaModulesType>(name: ModuleName, delegate: PrismaModulesType[ModuleName]["delegate"]) => {
  type Module = PrismaModulesType[ModuleName];
  type Entity = Module["entity"];
  type ConnectDto = Module["connectDto"];
  type CreateDto = Module["createDto"];
  type UpdateDto = Module["updateDto"];
  type FindManyType = Module["findManyType"];

  @Injectable()
  class EntityService {
    private delegate: CommonDelegateType;

    constructor() {
      this.delegate = delegate as CommonDelegateType;
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

  @ApiTags(name.toLowerCase() + "s")
  @Controller(name.toLowerCase() + "s")
  class EntityController {
    constructor(private readonly service: EntityService) {}

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

const prismaService = new PrismaService();

@Module({
  imports: Object.values(Prisma.ModelName).map((name) => {
    const pascalCased = name.charAt(0).toLowerCase() + name.slice(1);
    return createModule(name, prismaService[pascalCased]);
  }),
  providers: [PrismaService],
})
export class PrismaCrudModule {}
