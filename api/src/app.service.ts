import { Prisma } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { DMMFDto } from "./prisma/dmmf.dto";

@Injectable()
export class AppService {
  health(): string {
    return "Healthy!";
  }
  dmmf(): DMMFDto {
    return Prisma.dmmf;
  }
}
