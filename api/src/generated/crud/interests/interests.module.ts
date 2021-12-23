import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { InterestsController } from "./interests.controller";
import { InterestsService } from "./interests.service";

@Module({
  controllers: [InterestsController],
  providers: [PrismaService, InterestsService],
})
export class InterestsModule {}
