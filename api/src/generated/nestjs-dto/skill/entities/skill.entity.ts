import { SkillKeyword } from "../../skillKeyword/entities/skillKeyword.entity";
import { User } from "../../user/entities/user.entity";

export class Skill {
  id: number;
  name: string;
  level: string;
  keywords?: SkillKeyword[];
  userId: number | null;
  user?: User | null;
}
