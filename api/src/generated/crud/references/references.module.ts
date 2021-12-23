import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { ReferencesController } from "./references.controller";
import { ReferencesService } from "./references.service";

@Module({
  controllers: [ReferencesController],
  providers: [PrismaService, ReferencesService],
})
export class ReferencesModule {}
