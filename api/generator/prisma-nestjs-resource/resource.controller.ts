import { TemplateInput } from ".";

export const controllerTemplate = ({ model, plural, pluralLower, pascalCased }: TemplateInput) => /*Typescript */ `
import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { Create${model}Dto, Update${model}Dto } from "@/api/generated/nestjs-dto/${pascalCased}/dto";
import { FindManyType, ${plural}Service } from "./${pascalCased}s.service";

@ApiTags("${pluralLower}")
@Controller("${pluralLower}")
export class ${plural}Controller {
  constructor(private readonly service: ${plural}Service) {}

  @Post()
  create(@Body() create${model}Dto: Create${model}Dto) {
    return this.service.create(create${model}Dto);
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
  update(@Param("id") id: string, @Body() data: Update${model}Dto) {
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
`;
