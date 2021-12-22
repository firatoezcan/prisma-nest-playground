export class CreateProjectDto {
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
}
