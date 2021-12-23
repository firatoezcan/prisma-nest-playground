import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { SkillsController } from "./skills.controller";
import { SkillsService } from "./skills.service";

describe("SkillsController", () => {
  let controller: SkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillsController],
      providers: [PrismaService, SkillsService],
    }).compile();

    controller = module.get<SkillsController>(SkillsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
