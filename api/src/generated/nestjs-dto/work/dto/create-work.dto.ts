import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateWorkUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateWorkUserRelationInputDto)
export class CreateWorkDto {
  name: string;
  position: string;
  summary: string;
  url: string;
  startDate: Date;
  endDate: Date;
  highlights: string[];
  user?: CreateWorkUserRelationInputDto;
}
