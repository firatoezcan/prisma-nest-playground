import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaCrudModule } from "./generated/crud/PrismaCrud.module";

@Module({
  imports: [PrismaCrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
