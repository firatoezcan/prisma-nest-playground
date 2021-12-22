import { User } from "../../user/entities/user.entity";

export class Profile {
  id: number;
  network: string;
  username: string;
  url: string;
  userId: number | null;
  user?: User | null;
}
