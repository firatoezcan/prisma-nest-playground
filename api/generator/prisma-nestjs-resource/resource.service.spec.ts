import { TemplateInput } from ".";

export const serviceSpecTemplate = ({ model, plural, pluralLower, pascalCased }: TemplateInput) => /*Typescript */ `
import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { ${plural}Service } from "./${pascalCased}s.service";

describe("${plural}Service", () => {
  let service: ${plural}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, ${plural}Service],
    }).compile();

    service = module.get<${plural}Service>(${plural}Service);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
`;
