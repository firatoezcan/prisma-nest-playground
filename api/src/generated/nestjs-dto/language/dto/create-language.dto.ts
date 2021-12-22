import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateLanguageUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateLanguageUserRelationInputDto)
export class CreateLanguageDto {
  name: string;
  fluency: string;
  user?: CreateLanguageUserRelationInputDto;
}
