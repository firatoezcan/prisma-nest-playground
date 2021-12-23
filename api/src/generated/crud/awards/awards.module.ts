import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { AwardsController } from "./awards.controller";
import { AwardsService } from "./awards.service";

@Module({
  controllers: [AwardsController],
  providers: [PrismaService, AwardsService],
})
export class AwardsModule {}
