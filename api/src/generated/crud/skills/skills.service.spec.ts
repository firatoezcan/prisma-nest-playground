import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { SkillsService } from "./skills.service";

describe("SkillsService", () => {
  let service: SkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, SkillsService],
    }).compile();

    service = module.get<SkillsService>(SkillsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
