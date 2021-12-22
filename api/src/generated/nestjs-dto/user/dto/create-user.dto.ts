import { ApiExtraModels } from "@nestjs/swagger";
import { CreateProfileDto } from "../../profile/dto/create-profile.dto";
import { CreateWorkDto } from "../../work/dto/create-work.dto";
import { CreateVolunteerDto } from "../../volunteer/dto/create-volunteer.dto";
import { CreateEducationDto } from "../../education/dto/create-education.dto";
import { CreateAwardDto } from "../../award/dto/create-award.dto";
import { CreatePublicationDto } from "../../publication/dto/create-publication.dto";
import { CreateSkillDto } from "../../skill/dto/create-skill.dto";
import { CreateLanguageDto } from "../../language/dto/create-language.dto";
import { CreateInterestDto } from "../../interest/dto/create-interest.dto";
import { CreateReferenceDto } from "../../reference/dto/create-reference.dto";
import { CreateProjectDto } from "../../project/dto/create-project.dto";

export class CreateUserProfilesRelationInputDto {
  create: CreateProfileDto[];
}
export class CreateUserWorkRelationInputDto {
  create: CreateWorkDto[];
}
export class CreateUserVolunteerRelationInputDto {
  create: CreateVolunteerDto[];
}
export class CreateUserEducationRelationInputDto {
  create: CreateEducationDto[];
}
export class CreateUserAwardsRelationInputDto {
  create: CreateAwardDto[];
}
export class CreateUserPublicationsRelationInputDto {
  create: CreatePublicationDto[];
}
export class CreateUserSkillsRelationInputDto {
  create: CreateSkillDto[];
}
export class CreateUserLanguagesRelationInputDto {
  create: CreateLanguageDto[];
}
export class CreateUserInterestsRelationInputDto {
  create: CreateInterestDto[];
}
export class CreateUserReferencesRelationInputDto {
  create: CreateReferenceDto[];
}
export class CreateUserProjectsRelationInputDto {
  create: CreateProjectDto[];
}

@ApiExtraModels(
  CreateProfileDto,
  CreateUserProfilesRelationInputDto,
  CreateWorkDto,
  CreateUserWorkRelationInputDto,
  CreateVolunteerDto,
  CreateUserVolunteerRelationInputDto,
  CreateEducationDto,
  CreateUserEducationRelationInputDto,
  CreateAwardDto,
  CreateUserAwardsRelationInputDto,
  CreatePublicationDto,
  CreateUserPublicationsRelationInputDto,
  CreateSkillDto,
  CreateUserSkillsRelationInputDto,
  CreateLanguageDto,
  CreateUserLanguagesRelationInputDto,
  CreateInterestDto,
  CreateUserInterestsRelationInputDto,
  CreateReferenceDto,
  CreateUserReferencesRelationInputDto,
  CreateProjectDto,
  CreateUserProjectsRelationInputDto
)
export class CreateUserDto {
  profiles?: CreateUserProfilesRelationInputDto;
  work?: CreateUserWorkRelationInputDto;
  volunteer?: CreateUserVolunteerRelationInputDto;
  education?: CreateUserEducationRelationInputDto;
  awards?: CreateUserAwardsRelationInputDto;
  publications?: CreateUserPublicationsRelationInputDto;
  skills?: CreateUserSkillsRelationInputDto;
  languages?: CreateUserLanguagesRelationInputDto;
  interests?: CreateUserInterestsRelationInputDto;
  references?: CreateUserReferencesRelationInputDto;
  projects?: CreateUserProjectsRelationInputDto;
}
