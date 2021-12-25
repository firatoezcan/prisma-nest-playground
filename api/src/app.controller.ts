import { Controller, Get } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { AppService, DMMF } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  health(): string {
    return this.appService.health();
  }

  @Get("/dmmf")
  @ApiResponse({ status: 200, type: DMMF, description: "The Prisma DMMF that I cannot get Swagger response working for because im bad" })
  dmmf() {
    return this.appService.dmmf();
  }
}
