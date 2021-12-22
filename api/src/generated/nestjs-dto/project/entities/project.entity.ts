import { User } from "../../user/entities/user.entity";

export class Project {
  id: number;
  name: string;
  description: string;
  highlights: string[];
  keywords: string[];
  startDate: Date;
  endDate: Date;
  url: string;
  roles: string[];
  entity: string;
  type: string;
  userId: number | null;
  user?: User | null;
}
