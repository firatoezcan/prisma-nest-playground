import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateLanguageUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateLanguageUserRelationInputDto)
export class CreateLanguageDto {
  name: string;
  fluency: string;
  user?: CreateLanguageUserRelationInputDto;
}
