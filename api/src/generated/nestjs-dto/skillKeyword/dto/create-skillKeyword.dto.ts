import { ApiExtraModels } from "@nestjs/swagger";
import { CreateSkillDto } from "../../skill/dto/create-skill.dto";

export class CreateSkillKeywordSkillRelationInputDto {
  create: CreateSkillDto;
}

@ApiExtraModels(CreateSkillDto, CreateSkillKeywordSkillRelationInputDto)
export class CreateSkillKeywordDto {
  skill?: CreateSkillKeywordSkillRelationInputDto;
}
