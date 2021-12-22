import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateInterestUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateInterestUserRelationInputDto)
export class CreateInterestDto {
  name: string;
  keywords: string[];
  user?: CreateInterestUserRelationInputDto;
}
