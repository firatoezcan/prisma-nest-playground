import { User } from "../../user/entities/user.entity";

export class Location {
  id: number;
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
  userId: number | null;
  user?: User | null;
}
