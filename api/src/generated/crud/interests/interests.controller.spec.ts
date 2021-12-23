import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { InterestsController } from "./interests.controller";
import { InterestsService } from "./interests.service";

describe("InterestsController", () => {
  let controller: InterestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterestsController],
      providers: [PrismaService, InterestsService],
    }).compile();

    controller = module.get<InterestsController>(InterestsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
