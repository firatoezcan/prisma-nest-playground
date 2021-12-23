import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateVolunteerDto, UpdateVolunteerDto } from "@/api/generated/nestjs-dto/volunteer/dto";
import { FindManyType, VolunteersService } from "./volunteers.service";

@Controller("volunteers")
export class VolunteersController {
  constructor(private readonly service: VolunteersService) {}

  @Post()
  create(@Body() createVolunteerDto: CreateVolunteerDto) {
    return this.service.create(createVolunteerDto);
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
  update(@Param("id") id: string, @Body() data: UpdateVolunteerDto) {
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
