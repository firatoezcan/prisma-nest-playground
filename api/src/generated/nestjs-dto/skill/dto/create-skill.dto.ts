import { ApiExtraModels } from "@nestjs/swagger";
import { CreateSkillKeywordDto } from "../../skillKeyword/dto/create-skillKeyword.dto";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateSkillKeywordsRelationInputDto {
  create: CreateSkillKeywordDto[];
}
export class CreateSkillUserRelationInputDto {
  create: CreateUserDto;
}

@ApiExtraModels(CreateSkillKeywordDto, CreateSkillKeywordsRelationInputDto, CreateUserDto, CreateSkillUserRelationInputDto)
export class CreateSkillDto {
  name: string;
  level: string;
  keywords?: CreateSkillKeywordsRelationInputDto;
  user?: CreateSkillUserRelationInputDto;
}
