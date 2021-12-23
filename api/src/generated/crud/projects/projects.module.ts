import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";

@Module({
  controllers: [ProjectsController],
  providers: [PrismaService, ProjectsService],
})
export class ProjectsModule {}
