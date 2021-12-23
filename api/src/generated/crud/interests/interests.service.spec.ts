import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { InterestsService } from "./interests.service";

describe("InterestsService", () => {
  let service: InterestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, InterestsService],
    }).compile();

    service = module.get<InterestsService>(InterestsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
