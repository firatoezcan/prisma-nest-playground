import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "@/api/generated/nestjs-dto/user/dto";
import { FindManyType, UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
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
  update(@Param("id") id: string, @Body() data: UpdateUserDto) {
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
