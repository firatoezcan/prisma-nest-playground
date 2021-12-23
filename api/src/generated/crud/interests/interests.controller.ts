import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateInterestDto, UpdateInterestDto } from "@/api/generated/nestjs-dto/interest/dto";
import { FindManyType, InterestsService } from "./interests.service";

@Controller("interests")
export class InterestsController {
  constructor(private readonly service: InterestsService) {}

  @Post()
  create(@Body() createInterestDto: CreateInterestDto) {
    return this.service.create(createInterestDto);
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
  update(@Param("id") id: string, @Body() data: UpdateInterestDto) {
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
