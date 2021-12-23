import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "@/api/services/Prisma.service";
import { VolunteersController } from "./volunteers.controller";
import { VolunteersService } from "./volunteers.service";

describe("VolunteersController", () => {
  let controller: VolunteersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteersController],
      providers: [PrismaService, VolunteersService],
    }).compile();

    controller = module.get<VolunteersController>(VolunteersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
