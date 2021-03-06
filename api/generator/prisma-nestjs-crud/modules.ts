import { TemplateInput } from ".";

export const prismaModuleTypesTemplate = (modules: TemplateInput[]) => /* Typescript */ `
import { PrismaClientOptions } from "@prisma/client/runtime";
import { PrismaService } from "@/api/services/Prisma.service";
import { Prisma } from "@prisma/client";
${modules.map(({ model, pascalCased }) => `import { Connect${model}Dto, Create${model}Dto, Update${model}Dto } from "@/api/generated/nestjs-dto/${pascalCased}/dto";`).join("\n")}
${modules.map(({ model, pascalCased }) => `import { ${model} } from "@/api/generated/nestjs-dto/${pascalCased}/entities";`).join("\n")}

${modules
  .map(
    ({ model }) => /* Typescript */ `
  export type ${model}Module = {
    name: "${model}";
    entity: typeof ${model};
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
        ({ model, pascalCased }) => `
      ${model}: {
        delegate: prismaService.${pascalCased},
        entity: ${model},
        connectDto: Connect${model}Dto,
        createDto: Create${model}Dto,
        updateDto: Update${model}Dto,
        name: "${model}",
      } as ${model}Module
    `
      )
      .join(",\n")}
  };
`;
