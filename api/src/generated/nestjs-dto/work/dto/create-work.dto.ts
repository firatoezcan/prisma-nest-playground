import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateWorkUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateWorkUserRelationInputDto)
export class CreateWorkDto {
  name: string;
  position: string;
  summary: string;
  url: string;
  startDate: Date;
  endDate: Date;
  highlights: string[];
  user?: CreateWorkUserRelationInputDto;
}
