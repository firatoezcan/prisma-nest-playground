import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { AwardsService } from "./awards.service";

describe("AwardsService", () => {
  let service: AwardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, AwardsService],
    }).compile();

    service = module.get<AwardsService>(AwardsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
