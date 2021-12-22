import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateLocationUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateLocationUserRelationInputDto)
export class CreateLocationDto {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
  user?: CreateLocationUserRelationInputDto;
}
