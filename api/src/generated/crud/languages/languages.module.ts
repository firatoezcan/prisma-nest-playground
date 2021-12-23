import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { LanguagesController } from "./languages.controller";
import { LanguagesService } from "./languages.service";

@Module({
  controllers: [LanguagesController],
  providers: [PrismaService, LanguagesService],
})
export class LanguagesModule {}
