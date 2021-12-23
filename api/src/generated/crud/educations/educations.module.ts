import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { EducationsController } from "./educations.controller";
import { EducationsService } from "./educations.service";

@Module({
  controllers: [EducationsController],
  providers: [PrismaService, EducationsService],
})
export class EducationsModule {}
