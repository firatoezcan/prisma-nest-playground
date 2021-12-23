import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateAwardUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateAwardUserRelationInputDto)
export class CreateAwardDto {
  title: string;
  date: Date;
  awarder: string;
  summary: string;
  user?: CreateAwardUserRelationInputDto;
}
