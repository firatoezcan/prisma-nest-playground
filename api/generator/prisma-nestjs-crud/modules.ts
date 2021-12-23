import { TemplateInput } from ".";

export const prismaModuleTypesTemplate = (modules: TemplateInput[]) => /* Typescript */ `
import { PrismaClientOptions } from "@prisma/client/runtime";
import { PrismaService } from "@/api/services/Prisma.service";
import { Prisma, ${modules.map((module) => module.model).join(", ")} } from "@prisma/client";
${modules.map(({ model, pascalCased }) => `import { Connect${model}Dto, Create${model}Dto, Update${model}Dto } from "@/api/generated/nestjs-dto/${pascalCased}/dto";`).join("\n")}

${modules
  .map(
    ({ model, pluralLower }) => /* Typescript */ `
  export type ${model}Module = {
    name: "${pluralLower}";
    entity: ${model};
    delegate: Prisma.${model}Delegate<PrismaClientOptions["rejectOnNotFound"]>;
    connectDto: typeof Connect${model}Dto;
    createDto: typeof Create${model}Dto;
    updateDto: typeof Update${model}Dto;
    findManyType: { skip?: number; take?: number; cursor?: Prisma.${model}WhereUniqueInput; where?: Prisma.${model}WhereInput; orderBy?: Prisma.${model}OrderByWithRelationInput };
  };`
  )
  .join("\n\n")}

  export type PrismaModulesType = {
    ${modules.map(({ model }) => `${model}: ${model}Module;`).join("\n")}
  };

  export type CommonDelegateType = 
    ${modules.map(({ model }) => `${model}Module["delegate"]`).join(" &\n")}
  ;
  

  const prismaService = new PrismaService();

  export const PrismaCrudClasses: PrismaModulesType = {
    ${modules
      .map(
        ({ model, pluralLower, pascalCased }) => `
      ${model}: {
        delegate: prismaService.${pascalCased},
        connectDto: Connect${model}Dto,
        createDto: Create${model}Dto,
        updateDto: Update${model}Dto,
        name: "${pluralLower}",
      } as ${model}Module
    `
      )
      .join(",\n")}
  };
`;
