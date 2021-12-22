import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateProjectUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateProjectUserRelationInputDto)
export class CreateProjectDto {
  name: string;
  description: string;
  highlights: string[];
  keywords: string[];
  startDate: Date;
  endDate: Date;
  url: string;
  roles: string[];
  entity: string;
  type: string;
  user?: CreateProjectUserRelationInputDto;
}
