import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { LanguagesService } from "./languages.service";

describe("LanguagesService", () => {
  let service: LanguagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, LanguagesService],
    }).compile();

    service = module.get<LanguagesService>(LanguagesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
