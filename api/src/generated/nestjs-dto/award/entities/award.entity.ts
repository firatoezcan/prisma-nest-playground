import { User } from "../../user/entities/user.entity";

export class Award {
  id: number;
  title: string;
  date: Date;
  awarder: string;
  summary: string;
  userId: number | null;
  user?: User | null;
}
