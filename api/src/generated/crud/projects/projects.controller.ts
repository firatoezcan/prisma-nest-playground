import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateProjectDto, UpdateProjectDto } from "@/api/generated/nestjs-dto/project/dto";
import { FindManyType, ProjectsService } from "./projects.service";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.service.create(createProjectDto);
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
  update(@Param("id") id: string, @Body() data: UpdateProjectDto) {
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
