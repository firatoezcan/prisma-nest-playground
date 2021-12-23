import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { EducationsService } from "./educations.service";

describe("EducationsService", () => {
  let service: EducationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, EducationsService],
    }).compile();

    service = module.get<EducationsService>(EducationsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
