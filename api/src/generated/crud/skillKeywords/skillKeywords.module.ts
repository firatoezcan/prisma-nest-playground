import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { SkillKeywordsController } from "./skillKeywords.controller";
import { SkillKeywordsService } from "./skillKeywords.service";

@Module({
  controllers: [SkillKeywordsController],
  providers: [PrismaService, SkillKeywordsService],
})
export class SkillKeywordsModule {}
