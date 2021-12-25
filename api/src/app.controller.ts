import { Controller, Get } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { AppService, DMMF, World } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  health(): string {
    return this.appService.health();
  }

  @Get("/dmmf")
  @ApiResponse({ status: 200, type: DMMF, description: "Unfinished response type" })
  dmmf(): DMMF {
    return this.appService.dmmf();
  }

  @Get("/world")
  @ApiResponse({ status: 200, type: World, description: "Hello world" })
  world() {
    return this.appService.world();
  }
}
