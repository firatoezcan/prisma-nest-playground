import { Prisma } from ".prisma/client";
import { writeFileSync } from "fs";
import { prismaModuleTypesTemplate } from "./modules";

// Path is undefined when running with ts-node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const baseFolder = `src/generated/crud`;

export type TemplateInput = {
  model: Prisma.ModelName;
  plural: string;
  pluralLower: string;
  pascalCased: string;
};

const generatePrismaModuleTypes = (inputs: TemplateInput[]) => {
  const filePath = path.join(baseFolder, "prismaModuleTypes.ts");
  const content = prismaModuleTypesTemplate(inputs);
  writeFileSync(filePath, content);
};

const createInputParams = (model: Prisma.ModelName) => {
  const plural = model + "s";
  const pluralLower = plural.toLowerCase();
  const pascalCased = model.charAt(0).toLowerCase() + model.slice(1);
  const input = { model, plural, pluralLower, pascalCased };
  return input;
};

const inputParams = Object.values(Prisma.ModelName).map(createInputParams);
generatePrismaModuleTypes(inputParams);
