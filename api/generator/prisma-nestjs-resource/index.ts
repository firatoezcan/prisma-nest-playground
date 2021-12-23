import { Prisma } from ".prisma/client";
import { mkdirSync, writeFileSync } from "fs";
import { containerModuleTemplate } from "./container.module";
import { controllerTemplate } from "./resource.controller";
import { controllerSpecTemplate } from "./resource.controller.spec";
import { moduleTemplate } from "./resource.module";
import { serviceTemplate } from "./resource.service";
import { serviceSpecTemplate } from "./resource.service.spec";

// Path is undefined when running with ts-node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const baseFolder = `src/generated/crud`;

export type TemplateInput = {
  model: Prisma.ModelName;
  plural: string;
  pluralLower: string;
  pascalCased: string;
  pascalCasedPlural: string;
};

const generateResources = (input: TemplateInput) => {
  const { pascalCasedPlural } = input;
  const config = [
    {
      content: controllerTemplate(input),
      filename: `${pascalCasedPlural}.controller.ts`,
    },
    {
      content: controllerSpecTemplate(input),
      filename: `${pascalCasedPlural}.controller.spec.ts`,
    },
    {
      content: moduleTemplate(input),
      filename: `${pascalCasedPlural}.module.ts`,
    },
    {
      content: serviceTemplate(input),
      filename: `${pascalCasedPlural}.service.ts`,
    },
    {
      content: serviceSpecTemplate(input),
      filename: `${pascalCasedPlural}.service.spec.ts`,
    },
  ];

  const modelPath = path.join(baseFolder, pascalCasedPlural);
  config.forEach((generatedFile) => {
    mkdirSync(modelPath, { recursive: true });
    writeFileSync(path.join(modelPath, generatedFile.filename), generatedFile.content);
  });
};

const generateContainerModule = (inputs: TemplateInput[]) => {
  const filePath = path.join(baseFolder, "PrismaCrud.module.ts");
  const content = containerModuleTemplate(inputs);
  writeFileSync(filePath, content);
};

const createInputParams = (model: Prisma.ModelName) => {
  const plural = model + "s";
  const pluralLower = plural.toLowerCase();
  const pascalCased = model.charAt(0).toLowerCase() + model.slice(1);
  const pascalCasedPlural = pascalCased + "s";
  const input = { model, plural, pluralLower, pascalCased, pascalCasedPlural };
  return input;
};

const inputParams = Object.values(Prisma.ModelName).map(createInputParams);
inputParams.forEach(generateResources);
generateContainerModule(inputParams);
