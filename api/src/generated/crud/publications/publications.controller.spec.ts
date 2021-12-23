import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { PublicationsController } from "./publications.controller";
import { PublicationsService } from "./publications.service";

describe("PublicationsController", () => {
  let controller: PublicationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicationsController],
      providers: [PrismaService, PublicationsService],
    }).compile();

    controller = module.get<PublicationsController>(PublicationsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
