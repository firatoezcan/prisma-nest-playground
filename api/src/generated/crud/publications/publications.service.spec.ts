import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { PublicationsService } from "./publications.service";

describe("PublicationsService", () => {
  let service: PublicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, PublicationsService],
    }).compile();

    service = module.get<PublicationsService>(PublicationsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
