import { ApiExtraModels } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateBasicUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateUserDto, CreateBasicUserRelationInputDto)
export class CreateBasicDto {
  firstName: string;
  lastName: string;
  email: string;
  label: string;
  image: string;
  phone: string;
  summary: string;
  user?: CreateBasicUserRelationInputDto;
}
