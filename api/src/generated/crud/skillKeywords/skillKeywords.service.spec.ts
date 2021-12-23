import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { SkillKeywordsService } from "./skillKeywords.service";

describe("SkillKeywordsService", () => {
  let service: SkillKeywordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, SkillKeywordsService],
    }).compile();

    service = module.get<SkillKeywordsService>(SkillKeywordsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
