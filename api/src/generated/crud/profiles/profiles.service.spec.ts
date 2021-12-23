import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { ProfilesService } from "./profiles.service";

describe("ProfilesService", () => {
  let service: ProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, ProfilesService],
    }).compile();

    service = module.get<ProfilesService>(ProfilesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
