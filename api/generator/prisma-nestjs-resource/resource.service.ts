import { TemplateInput } from ".";

export const serviceTemplate = ({ model, plural, pluralLower, pascalCased }: TemplateInput) => /*Typescript */ `
import { Injectable } from "@nestjs/common";
import { Prisma, ${model} } from "@prisma/client";
import { Connect${model}Dto, Create${model}Dto, Update${model}Dto } from "@/api/generated/nestjs-dto/${pascalCased}/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = { skip?: number; take?: number; cursor?: Prisma.${model}WhereUniqueInput; where?: Prisma.${model}WhereInput; orderBy?: Prisma.${model}OrderByWithRelationInput };

@Injectable()
export class ${plural}Service {
  constructor(private prisma: PrismaService) {}

  async findOne(${pascalCased}WhereUniqueInput: Connect${model}Dto): Promise<${model} | null> {
    return this.prisma.${pascalCased}.findUnique({
      where: ${pascalCased}WhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<${model}[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.${pascalCased}.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Create${model}Dto): Promise<${model}> {
    return this.prisma.${pascalCased}.create({
      data,
    });
  }

  async update(params: { where: Connect${model}Dto; data: Update${model}Dto }): Promise<${model}> {
    const { where, data } = params;
    return this.prisma.${pascalCased}.update({
      data,
      where,
    });
  }

  async delete(where: Connect${model}Dto): Promise<${model}> {
    return this.prisma.${pascalCased}.delete({
      where,
    });
  }
}
`;
