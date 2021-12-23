import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { ReferencesService } from "./references.service";

describe("ReferencesService", () => {
  let service: ReferencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, ReferencesService],
    }).compile();

    service = module.get<ReferencesService>(ReferencesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
