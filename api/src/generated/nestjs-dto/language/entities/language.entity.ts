import { User } from "../../user/entities/user.entity";

export class Language {
  id: number;
  name: string;
  fluency: string;
  userId: number | null;
  user?: User | null;
}
