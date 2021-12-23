import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateLocationUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateLocationUserRelationInputDto)
export class CreateLocationDto {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
  user?: CreateLocationUserRelationInputDto;
}
