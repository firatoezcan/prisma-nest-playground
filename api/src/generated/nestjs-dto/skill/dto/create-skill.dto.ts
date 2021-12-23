import { ApiExtraModels } from "@nestjs/swagger";
import { CreateSkillKeywordDto } from "../../skillKeyword/dto/create-skillKeyword.dto";
import { ConnectUserDto } from "../../user/dto/connect-user.dto";

export class CreateSkillKeywordsRelationInputDto {
  create: CreateSkillKeywordDto[];
}
export class CreateSkillUserRelationInputDto {
  connect: ConnectUserDto;
}

@ApiExtraModels(CreateSkillKeywordDto, CreateSkillKeywordsRelationInputDto, ConnectUserDto, CreateSkillUserRelationInputDto)
export class CreateSkillDto {
  name: string;
  level: string;
  keywords?: CreateSkillKeywordsRelationInputDto;
  user?: CreateSkillUserRelationInputDto;
}
