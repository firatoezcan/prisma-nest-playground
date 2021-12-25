import { PrismaClientOptions } from "@prisma/client/runtime";
import { PrismaService } from "@/api/services/Prisma.service";
import { Prisma } from "@prisma/client";
import { ConnectUserDto, CreateUserDto, UpdateUserDto } from "@/api/generated/nestjs-dto/user/dto";
import { ConnectBasicDto, CreateBasicDto, UpdateBasicDto } from "@/api/generated/nestjs-dto/basic/dto";
import { ConnectLocationDto, CreateLocationDto, UpdateLocationDto } from "@/api/generated/nestjs-dto/location/dto";
import { ConnectProfileDto, CreateProfileDto, UpdateProfileDto } from "@/api/generated/nestjs-dto/profile/dto";
import { ConnectWorkDto, CreateWorkDto, UpdateWorkDto } from "@/api/generated/nestjs-dto/work/dto";
import { ConnectVolunteerDto, CreateVolunteerDto, UpdateVolunteerDto } from "@/api/generated/nestjs-dto/volunteer/dto";
import { ConnectEducationDto, CreateEducationDto, UpdateEducationDto } from "@/api/generated/nestjs-dto/education/dto";
import { ConnectAwardDto, CreateAwardDto, UpdateAwardDto } from "@/api/generated/nestjs-dto/award/dto";
import { ConnectPublicationDto, CreatePublicationDto, UpdatePublicationDto } from "@/api/generated/nestjs-dto/publication/dto";
import { ConnectSkillDto, CreateSkillDto, UpdateSkillDto } from "@/api/generated/nestjs-dto/skill/dto";
import { ConnectSkillKeywordDto, CreateSkillKeywordDto, UpdateSkillKeywordDto } from "@/api/generated/nestjs-dto/skillKeyword/dto";
import { ConnectLanguageDto, CreateLanguageDto, UpdateLanguageDto } from "@/api/generated/nestjs-dto/language/dto";
import { ConnectInterestDto, CreateInterestDto, UpdateInterestDto } from "@/api/generated/nestjs-dto/interest/dto";
import { ConnectReferenceDto, CreateReferenceDto, UpdateReferenceDto } from "@/api/generated/nestjs-dto/reference/dto";
import { ConnectProjectDto, CreateProjectDto, UpdateProjectDto } from "@/api/generated/nestjs-dto/project/dto";
import { User } from "@/api/generated/nestjs-dto/user/entities";
import { Basic } from "@/api/generated/nestjs-dto/basic/entities";
import { Location } from "@/api/generated/nestjs-dto/location/entities";
import { Profile } from "@/api/generated/nestjs-dto/profile/entities";
import { Work } from "@/api/generated/nestjs-dto/work/entities";
import { Volunteer } from "@/api/generated/nestjs-dto/volunteer/entities";
import { Education } from "@/api/generated/nestjs-dto/education/entities";
import { Award } from "@/api/generated/nestjs-dto/award/entities";
import { Publication } from "@/api/generated/nestjs-dto/publication/entities";
import { Skill } from "@/api/generated/nestjs-dto/skill/entities";
import { SkillKeyword } from "@/api/generated/nestjs-dto/skillKeyword/entities";
import { Language } from "@/api/generated/nestjs-dto/language/entities";
import { Interest } from "@/api/generated/nestjs-dto/interest/entities";
import { Reference } from "@/api/generated/nestjs-dto/reference/entities";
import { Project } from "@/api/generated/nestjs-dto/project/entities";

export type UserModule = {
  name: "User";
  entity: typeof User;
  delegate: Prisma.UserDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectUserDto;
  createDto: typeof CreateUserDto;
  updateDto: typeof UpdateUserDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.UserWhereUniqueInput; where?: Prisma.UserWhereInput; orderBy?: Prisma.UserOrderByWithRelationInput };
};

export type BasicModule = {
  name: "Basic";
  entity: typeof Basic;
  delegate: Prisma.BasicDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectBasicDto;
  createDto: typeof CreateBasicDto;
  updateDto: typeof UpdateBasicDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.BasicWhereUniqueInput; where?: Prisma.BasicWhereInput; orderBy?: Prisma.BasicOrderByWithRelationInput };
};

export type LocationModule = {
  name: "Location";
  entity: typeof Location;
  delegate: Prisma.LocationDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectLocationDto;
  createDto: typeof CreateLocationDto;
  updateDto: typeof UpdateLocationDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.LocationWhereUniqueInput; where?: Prisma.LocationWhereInput; orderBy?: Prisma.LocationOrderByWithRelationInput };
};

export type ProfileModule = {
  name: "Profile";
  entity: typeof Profile;
  delegate: Prisma.ProfileDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectProfileDto;
  createDto: typeof CreateProfileDto;
  updateDto: typeof UpdateProfileDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.ProfileWhereUniqueInput; where?: Prisma.ProfileWhereInput; orderBy?: Prisma.ProfileOrderByWithRelationInput };
};

export type WorkModule = {
  name: "Work";
  entity: typeof Work;
  delegate: Prisma.WorkDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectWorkDto;
  createDto: typeof CreateWorkDto;
  updateDto: typeof UpdateWorkDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.WorkWhereUniqueInput; where?: Prisma.WorkWhereInput; orderBy?: Prisma.WorkOrderByWithRelationInput };
};

export type VolunteerModule = {
  name: "Volunteer";
  entity: typeof Volunteer;
  delegate: Prisma.VolunteerDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectVolunteerDto;
  createDto: typeof CreateVolunteerDto;
  updateDto: typeof UpdateVolunteerDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.VolunteerWhereUniqueInput; where?: Prisma.VolunteerWhereInput; orderBy?: Prisma.VolunteerOrderByWithRelationInput };
};

export type EducationModule = {
  name: "Education";
  entity: typeof Education;
  delegate: Prisma.EducationDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectEducationDto;
  createDto: typeof CreateEducationDto;
  updateDto: typeof UpdateEducationDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.EducationWhereUniqueInput; where?: Prisma.EducationWhereInput; orderBy?: Prisma.EducationOrderByWithRelationInput };
};

export type AwardModule = {
  name: "Award";
  entity: typeof Award;
  delegate: Prisma.AwardDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectAwardDto;
  createDto: typeof CreateAwardDto;
  updateDto: typeof UpdateAwardDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.AwardWhereUniqueInput; where?: Prisma.AwardWhereInput; orderBy?: Prisma.AwardOrderByWithRelationInput };
};

export type PublicationModule = {
  name: "Publication";
  entity: typeof Publication;
  delegate: Prisma.PublicationDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectPublicationDto;
  createDto: typeof CreatePublicationDto;
  updateDto: typeof UpdatePublicationDto;
  findManyType: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PublicationWhereUniqueInput;
    where?: Prisma.PublicationWhereInput;
    orderBy?: Prisma.PublicationOrderByWithRelationInput;
  };
};

export type SkillModule = {
  name: "Skill";
  entity: typeof Skill;
  delegate: Prisma.SkillDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectSkillDto;
  createDto: typeof CreateSkillDto;
  updateDto: typeof UpdateSkillDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.SkillWhereUniqueInput; where?: Prisma.SkillWhereInput; orderBy?: Prisma.SkillOrderByWithRelationInput };
};

export type SkillKeywordModule = {
  name: "SkillKeyword";
  entity: typeof SkillKeyword;
  delegate: Prisma.SkillKeywordDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectSkillKeywordDto;
  createDto: typeof CreateSkillKeywordDto;
  updateDto: typeof UpdateSkillKeywordDto;
  findManyType: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SkillKeywordWhereUniqueInput;
    where?: Prisma.SkillKeywordWhereInput;
    orderBy?: Prisma.SkillKeywordOrderByWithRelationInput;
  };
};

export type LanguageModule = {
  name: "Language";
  entity: typeof Language;
  delegate: Prisma.LanguageDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectLanguageDto;
  createDto: typeof CreateLanguageDto;
  updateDto: typeof UpdateLanguageDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.LanguageWhereUniqueInput; where?: Prisma.LanguageWhereInput; orderBy?: Prisma.LanguageOrderByWithRelationInput };
};

export type InterestModule = {
  name: "Interest";
  entity: typeof Interest;
  delegate: Prisma.InterestDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectInterestDto;
  createDto: typeof CreateInterestDto;
  updateDto: typeof UpdateInterestDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.InterestWhereUniqueInput; where?: Prisma.InterestWhereInput; orderBy?: Prisma.InterestOrderByWithRelationInput };
};

export type ReferenceModule = {
  name: "Reference";
  entity: typeof Reference;
  delegate: Prisma.ReferenceDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectReferenceDto;
  createDto: typeof CreateReferenceDto;
  updateDto: typeof UpdateReferenceDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.ReferenceWhereUniqueInput; where?: Prisma.ReferenceWhereInput; orderBy?: Prisma.ReferenceOrderByWithRelationInput };
};

export type ProjectModule = {
  name: "Project";
  entity: typeof Project;
  delegate: Prisma.ProjectDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectProjectDto;
  createDto: typeof CreateProjectDto;
  updateDto: typeof UpdateProjectDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.ProjectWhereUniqueInput; where?: Prisma.ProjectWhereInput; orderBy?: Prisma.ProjectOrderByWithRelationInput };
};

export type PrismaModulesType = {
  User: UserModule;
  Basic: BasicModule;
  Location: LocationModule;
  Profile: ProfileModule;
  Work: WorkModule;
  Volunteer: VolunteerModule;
  Education: EducationModule;
  Award: AwardModule;
  Publication: PublicationModule;
  Skill: SkillModule;
  SkillKeyword: SkillKeywordModule;
  Language: LanguageModule;
  Interest: InterestModule;
  Reference: ReferenceModule;
  Project: ProjectModule;
};

export type CommonDelegateType = UserModule["delegate"] &
  BasicModule["delegate"] &
  LocationModule["delegate"] &
  ProfileModule["delegate"] &
  WorkModule["delegate"] &
  VolunteerModule["delegate"] &
  EducationModule["delegate"] &
  AwardModule["delegate"] &
  PublicationModule["delegate"] &
  SkillModule["delegate"] &
  SkillKeywordModule["delegate"] &
  LanguageModule["delegate"] &
  InterestModule["delegate"] &
  ReferenceModule["delegate"] &
  ProjectModule["delegate"];

const prismaService = new PrismaService();

export const PrismaCrudClasses: PrismaModulesType = {
  User: {
    delegate: prismaService.user,
    entity: User,
    connectDto: ConnectUserDto,
    createDto: CreateUserDto,
    updateDto: UpdateUserDto,
    name: "User",
  } as UserModule,
  Basic: {
    delegate: prismaService.basic,
    entity: Basic,
    connectDto: ConnectBasicDto,
    createDto: CreateBasicDto,
    updateDto: UpdateBasicDto,
    name: "Basic",
  } as BasicModule,
  Location: {
    delegate: prismaService.location,
    entity: Location,
    connectDto: ConnectLocationDto,
    createDto: CreateLocationDto,
    updateDto: UpdateLocationDto,
    name: "Location",
  } as LocationModule,
  Profile: {
    delegate: prismaService.profile,
    entity: Profile,
    connectDto: ConnectProfileDto,
    createDto: CreateProfileDto,
    updateDto: UpdateProfileDto,
    name: "Profile",
  } as ProfileModule,
  Work: {
    delegate: prismaService.work,
    entity: Work,
    connectDto: ConnectWorkDto,
    createDto: CreateWorkDto,
    updateDto: UpdateWorkDto,
    name: "Work",
  } as WorkModule,
  Volunteer: {
    delegate: prismaService.volunteer,
    entity: Volunteer,
    connectDto: ConnectVolunteerDto,
    createDto: CreateVolunteerDto,
    updateDto: UpdateVolunteerDto,
    name: "Volunteer",
  } as VolunteerModule,
  Education: {
    delegate: prismaService.education,
    entity: Education,
    connectDto: ConnectEducationDto,
    createDto: CreateEducationDto,
    updateDto: UpdateEducationDto,
    name: "Education",
  } as EducationModule,
  Award: {
    delegate: prismaService.award,
    entity: Award,
    connectDto: ConnectAwardDto,
    createDto: CreateAwardDto,
    updateDto: UpdateAwardDto,
    name: "Award",
  } as AwardModule,
  Publication: {
    delegate: prismaService.publication,
    entity: Publication,
    connectDto: ConnectPublicationDto,
    createDto: CreatePublicationDto,
    updateDto: UpdatePublicationDto,
    name: "Publication",
  } as PublicationModule,
  Skill: {
    delegate: prismaService.skill,
    entity: Skill,
    connectDto: ConnectSkillDto,
    createDto: CreateSkillDto,
    updateDto: UpdateSkillDto,
    name: "Skill",
  } as SkillModule,
  SkillKeyword: {
    delegate: prismaService.skillKeyword,
    entity: SkillKeyword,
    connectDto: ConnectSkillKeywordDto,
    createDto: CreateSkillKeywordDto,
    updateDto: UpdateSkillKeywordDto,
    name: "SkillKeyword",
  } as SkillKeywordModule,
  Language: {
    delegate: prismaService.language,
    entity: Language,
    connectDto: ConnectLanguageDto,
    createDto: CreateLanguageDto,
    updateDto: UpdateLanguageDto,
    name: "Language",
  } as LanguageModule,
  Interest: {
    delegate: prismaService.interest,
    entity: Interest,
    connectDto: ConnectInterestDto,
    createDto: CreateInterestDto,
    updateDto: UpdateInterestDto,
    name: "Interest",
  } as InterestModule,
  Reference: {
    delegate: prismaService.reference,
    entity: Reference,
    connectDto: ConnectReferenceDto,
    createDto: CreateReferenceDto,
    updateDto: UpdateReferenceDto,
    name: "Reference",
  } as ReferenceModule,
  Project: {
    delegate: prismaService.project,
    entity: Project,
    connectDto: ConnectProjectDto,
    createDto: CreateProjectDto,
    updateDto: UpdateProjectDto,
    name: "Project",
  } as ProjectModule,
};
