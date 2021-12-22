import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateReferenceUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateReferenceUserRelationInputDto)
export class CreateReferenceDto {
  name: string;
  reference: string;
  user?: CreateReferenceUserRelationInputDto;
}
