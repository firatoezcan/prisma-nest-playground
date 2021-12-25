import { Controller, Get } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { DMMFDto } from "./prisma/dmmf.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  health(): string {
    return this.appService.health();
  }

  @Get("/dmmf")
  @ApiResponse({ status: 200, type: DMMFDto, description: "The Prisma DMMF (Data Model Meta Format)" })
  dmmf(): DMMFDto {
    return this.appService.dmmf();
  }
}
