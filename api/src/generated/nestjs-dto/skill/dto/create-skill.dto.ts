import { ApiExtraModels } from "@nestjs/swagger";
import { CreateSkillKeywordDto } from "../../skillKeyword/dto/create-skillKeyword.dto";

export class CreateSkillKeywordsRelationInputDto {
  create: CreateSkillKeywordDto[];
}

@ApiExtraModels(CreateSkillKeywordDto, CreateSkillKeywordsRelationInputDto)
export class CreateSkillDto {
  name: string;
  level: string;
  keywords?: CreateSkillKeywordsRelationInputDto;
}
