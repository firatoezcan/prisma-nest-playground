import { User } from "../../user/entities/user.entity";

export class Reference {
  id: number;
  name: string;
  reference: string;
  userId: number | null;
  user?: User | null;
}
