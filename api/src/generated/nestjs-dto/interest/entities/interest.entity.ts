import { User } from "../../user/entities/user.entity";

export class Interest {
  id: number;
  name: string;
  keywords: string[];
  userId: number | null;
  user?: User | null;
}
