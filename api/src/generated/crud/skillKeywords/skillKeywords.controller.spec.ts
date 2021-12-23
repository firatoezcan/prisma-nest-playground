import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { SkillKeywordsController } from "./skillKeywords.controller";
import { SkillKeywordsService } from "./skillKeywords.service";

describe("SkillKeywordsController", () => {
  let controller: SkillKeywordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillKeywordsController],
      providers: [PrismaService, SkillKeywordsService],
    }).compile();

    controller = module.get<SkillKeywordsController>(SkillKeywordsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
