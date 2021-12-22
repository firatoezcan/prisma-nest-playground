import { User } from "../../user/entities/user.entity";

export class Work {
  id: number;
  name: string;
  position: string;
  summary: string;
  url: string;
  startDate: Date;
  endDate: Date;
  highlights: string[];
  userId: number | null;
  user?: User | null;
}
