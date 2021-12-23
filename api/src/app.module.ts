import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaCrudModule } from "./prisma/crud";

@Module({
  imports: [PrismaCrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
