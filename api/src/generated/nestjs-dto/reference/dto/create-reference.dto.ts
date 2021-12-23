import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateReferenceUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateReferenceUserRelationInputDto)
export class CreateReferenceDto {
  name: string;
  reference: string;
  user?: CreateReferenceUserRelationInputDto;
}
