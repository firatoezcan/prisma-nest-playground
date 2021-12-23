import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateVolunteerUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateVolunteerUserRelationInputDto)
export class CreateVolunteerDto {
  organization: string;
  position: string;
  summary: string;
  url: string;
  startDate: Date;
  endDate: Date;
  highlights: string[];
  user?: CreateVolunteerUserRelationInputDto;
}
