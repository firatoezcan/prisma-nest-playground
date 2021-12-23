import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { ProfilesController } from "./profiles.controller";
import { ProfilesService } from "./profiles.service";

@Module({
  controllers: [ProfilesController],
  providers: [PrismaService, ProfilesService],
})
export class ProfilesModule {}
