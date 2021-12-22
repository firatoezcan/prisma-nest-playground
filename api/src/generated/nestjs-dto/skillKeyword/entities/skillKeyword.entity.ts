import { Skill } from "../../skill/entities/skill.entity";

export class SkillKeyword {
  id: number;
  skillId: number | null;
  skill?: Skill | null;
}
