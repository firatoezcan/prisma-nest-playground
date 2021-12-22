import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreatePublicationUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreatePublicationUserRelationInputDto)
export class CreatePublicationDto {
  name: string;
  publisher: string;
  url: string;
  releaseDate: Date;
  summary: string;
  user?: CreatePublicationUserRelationInputDto;
}
