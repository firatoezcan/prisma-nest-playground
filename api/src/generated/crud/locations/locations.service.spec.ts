import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { LocationsService } from "./locations.service";

describe("LocationsService", () => {
  let service: LocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, LocationsService],
    }).compile();

    service = module.get<LocationsService>(LocationsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
