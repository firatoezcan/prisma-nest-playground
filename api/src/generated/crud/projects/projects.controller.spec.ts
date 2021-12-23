import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";

describe("ProjectsController", () => {
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [PrismaService, ProjectsService],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
