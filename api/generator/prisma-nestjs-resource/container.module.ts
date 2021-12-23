import { TemplateInput } from ".";

export const containerModuleTemplate = (modules: TemplateInput[]) => /* Typescript */ `
import { PrismaService } from "@/api/services/Prisma.service";
import { Module } from "@nestjs/common";
${modules.map((module) => `import { ${module.plural}Module } from "./${module.pascalCasedPlural}/${module.pascalCasedPlural}.module";`).join("\n")}

@Module({
  imports: [${modules.map((module) => `${module.plural}Module`).join(", ")}],
  providers: [PrismaService],
})
export class PrismaCrudModule {}
`;
