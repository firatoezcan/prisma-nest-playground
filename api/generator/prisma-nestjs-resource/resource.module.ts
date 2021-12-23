import { TemplateInput } from ".";

export const moduleTemplate = ({ model, plural, pluralLower, pascalCased }: TemplateInput) => /*Typescript */ `
import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { ${plural}Controller } from "./${pascalCased}s.controller";
import { ${plural}Service } from "./${pascalCased}s.service";

@Module({
  controllers: [${plural}Controller],
  providers: [PrismaService, ${plural}Service],
})
export class ${plural}Module {}
`;
