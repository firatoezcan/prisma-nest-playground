import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateEducationUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateEducationUserRelationInputDto)
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
