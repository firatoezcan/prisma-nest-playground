import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { SkillsController } from "./skills.controller";
import { SkillsService } from "./skills.service";

@Module({
  controllers: [SkillsController],
  providers: [PrismaService, SkillsService],
})
export class SkillsModule {}
