import { PrismaService } from "@/api/services/Prisma.service";
import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { BasicsModule } from "./basics/basics.module";
import { LocationsModule } from "./locations/locations.module";
import { ProfilesModule } from "./profiles/profiles.module";
import { WorksModule } from "./works/works.module";
import { VolunteersModule } from "./volunteers/volunteers.module";
import { EducationsModule } from "./educations/educations.module";
import { AwardsModule } from "./awards/awards.module";
import { PublicationsModule } from "./publications/publications.module";
import { SkillsModule } from "./skills/skills.module";
import { SkillKeywordsModule } from "./skillKeywords/skillKeywords.module";
import { LanguagesModule } from "./languages/languages.module";
import { InterestsModule } from "./interests/interests.module";
import { ReferencesModule } from "./references/references.module";
import { ProjectsModule } from "./projects/projects.module";

@Module({
  imports: [
    UsersModule,
    BasicsModule,
    LocationsModule,
    ProfilesModule,
    WorksModule,
    VolunteersModule,
    EducationsModule,
    AwardsModule,
    PublicationsModule,
    SkillsModule,
    SkillKeywordsModule,
    LanguagesModule,
    InterestsModule,
    ReferencesModule,
    ProjectsModule,
  ],
  providers: [PrismaService],
})
export class PrismaCrudModule {}
