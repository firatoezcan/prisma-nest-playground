import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { WorksController } from "./works.controller";
import { WorksService } from "./works.service";

@Module({
  controllers: [WorksController],
  providers: [PrismaService, WorksService],
})
export class WorksModule {}
