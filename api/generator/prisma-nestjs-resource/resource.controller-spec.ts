import { TemplateInput } from ".";

export const controllerSpecTemplate = ({ plural, pascalCased }: TemplateInput) => /*Typescript */ `
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { ${plural}Controller } from "./${pascalCased}s.controller";
import { ${plural}Service } from "./${pascalCased}s.service";

describe("${plural}Controller", () => {
  let controller: ${plural}Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${plural}Controller],
      providers: [PrismaService, ${plural}Service],
    }).compile();

    controller = module.get<${plural}Controller>(${plural}Controller);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
`;
