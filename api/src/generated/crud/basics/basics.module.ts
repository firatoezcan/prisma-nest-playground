import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { BasicsController } from "./basics.controller";
import { BasicsService } from "./basics.service";

@Module({
  controllers: [BasicsController],
  providers: [PrismaService, BasicsService],
})
export class BasicsModule {}
