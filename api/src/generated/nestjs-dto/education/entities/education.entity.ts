import { User } from "../../user/entities/user.entity";

export class Education {
  id: number;
  institution: string;
  area: string;
  studyType: string;
  url: string;
  startDate: Date;
  endDate: Date;
  score: string;
  courses: string[];
  userId: number | null;
  user?: User | null;
}
