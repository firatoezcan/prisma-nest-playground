import { Module } from "@nestjs/common";
import { PrismaService } from "@/api/services/Prisma.service";
import { VolunteersController } from "./volunteers.controller";
import { VolunteersService } from "./volunteers.service";

@Module({
  controllers: [VolunteersController],
  providers: [PrismaService, VolunteersService],
})
export class VolunteersModule {}
