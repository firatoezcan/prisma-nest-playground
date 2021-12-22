import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateVolunteerUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateVolunteerUserRelationInputDto)
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
