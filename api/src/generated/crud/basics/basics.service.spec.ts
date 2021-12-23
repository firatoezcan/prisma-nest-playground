import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { BasicsService } from "./basics.service";

describe("BasicsService", () => {
  let service: BasicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, BasicsService],
    }).compile();

    service = module.get<BasicsService>(BasicsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
