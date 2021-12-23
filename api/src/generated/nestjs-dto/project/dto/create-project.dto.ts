import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateProjectUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateProjectUserRelationInputDto)
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
