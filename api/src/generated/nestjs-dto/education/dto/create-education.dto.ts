import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateEducationUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateEducationUserRelationInputDto)
export class CreateEducationDto {
  institution: string;
  area: string;
  studyType: string;
  url: string;
  startDate: Date;
  endDate: Date;
  score: string;
  courses: string[];
  user?: CreateEducationUserRelationInputDto;
}
