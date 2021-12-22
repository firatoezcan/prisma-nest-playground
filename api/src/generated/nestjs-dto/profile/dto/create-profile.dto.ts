import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateProfileUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateProfileUserRelationInputDto)
export class CreateProfileDto {
  network: string;
  username: string;
  url: string;
  user?: CreateProfileUserRelationInputDto;
}
