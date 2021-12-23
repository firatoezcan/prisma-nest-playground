import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateSkillKeywordDto, UpdateSkillKeywordDto } from "@/api/generated/nestjs-dto/skillKeyword/dto";
import { FindManyType, SkillKeywordsService } from "./skillKeywords.service";

@ApiTags("skillkeywords")
@Controller("skillkeywords")
export class SkillKeywordsController {
  constructor(private readonly service: SkillKeywordsService) {}

  @Post()
  create(@Body() createSkillKeywordDto: CreateSkillKeywordDto) {
    return this.service.create(createSkillKeywordDto);
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
  update(@Param("id") id: string, @Body() data: UpdateSkillKeywordDto) {
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
