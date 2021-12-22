import { User } from "../../user/entities/user.entity";

export class Publication {
  id: number;
  name: string;
  publisher: string;
  url: string;
  releaseDate: Date;
  summary: string;
  userId: number | null;
  user?: User | null;
}
