import { Basic } from "../../basic/entities/basic.entity";
import { Location } from "../../location/entities/location.entity";
import { Profile } from "../../profile/entities/profile.entity";
import { Work } from "../../work/entities/work.entity";
import { Volunteer } from "../../volunteer/entities/volunteer.entity";
import { Education } from "../../education/entities/education.entity";
import { Award } from "../../award/entities/award.entity";
import { Publication } from "../../publication/entities/publication.entity";
import { Skill } from "../../skill/entities/skill.entity";
import { Language } from "../../language/entities/language.entity";
import { Interest } from "../../interest/entities/interest.entity";
import { Reference } from "../../reference/entities/reference.entity";
import { Project } from "../../project/entities/project.entity";

export class User {
  id: number;
  basics?: Basic | null;
  location?: Location | null;
  profiles?: Profile[];
  work?: Work[];
  volunteer?: Volunteer[];
  education?: Education[];
  awards?: Award[];
  publications?: Publication[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: Project[];
}
