export class CreateVolunteerDto {
  organization: string;
  position: string;
  summary: string;
  url: string;
  startDate: Date;
  endDate: Date;
  highlights: string[];
}
