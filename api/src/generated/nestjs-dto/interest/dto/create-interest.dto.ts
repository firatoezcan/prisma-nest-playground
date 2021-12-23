import { ApiExtraModels } from "@nestjs/swagger";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateInterestUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(ConnectUserDto, CreateInterestUserRelationInputDto)
export class CreateInterestDto {
  name: string;
  keywords: string[];
  user?: CreateInterestUserRelationInputDto;
}
