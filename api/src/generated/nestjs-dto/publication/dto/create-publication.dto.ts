import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreatePublicationUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreatePublicationUserRelationInputDto)
export class CreatePublicationDto {
  name: string;
  publisher: string;
  url: string;
  releaseDate: Date;
  summary: string;
  user?: CreatePublicationUserRelationInputDto;
}
