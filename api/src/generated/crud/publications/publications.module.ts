import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { PublicationsController } from "./publications.controller";
import { PublicationsService } from "./publications.service";

@Module({
  controllers: [PublicationsController],
  providers: [PrismaService, PublicationsService],
})
export class PublicationsModule {}
