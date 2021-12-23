import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { WorksController } from "./works.controller";
import { WorksService } from "./works.service";

describe("WorksController", () => {
  let controller: WorksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorksController],
      providers: [PrismaService, WorksService],
    }).compile();

    controller = module.get<WorksController>(WorksController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
