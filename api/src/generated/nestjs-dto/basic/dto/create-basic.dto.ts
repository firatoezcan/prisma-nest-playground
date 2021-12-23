import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateBasicUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateBasicUserRelationInputDto)
export class CreateBasicDto {
  firstName: string;
  lastName: string;
  email: string;
  label: string;
  image: string;
  phone: string;
  summary: string;
  user?: CreateBasicUserRelationInputDto;
}
