import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateAwardUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateAwardUserRelationInputDto)
export class CreateAwardDto {
  title: string;
  date: Date;
  awarder: string;
  summary: string;
  user?: CreateAwardUserRelationInputDto;
}
