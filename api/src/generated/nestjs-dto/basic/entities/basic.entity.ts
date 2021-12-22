import { User } from "../../user/entities/user.entity";

export class Basic {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  label: string;
  image: string;
  phone: string;
  summary: string;
  userId: number | null;
  user?: User | null;
}
