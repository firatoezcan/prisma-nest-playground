import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateAwardDto, UpdateAwardDto } from "@/api/generated/nestjs-dto/award/dto";
import { FindManyType, AwardsService } from "./awards.service";

@Controller("awards")
export class AwardsController {
  constructor(private readonly service: AwardsService) {}

  @Post()
  create(@Body() createAwardDto: CreateAwardDto) {
    return this.service.create(createAwardDto);
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
  update(@Param("id") id: string, @Body() data: UpdateAwardDto) {
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
