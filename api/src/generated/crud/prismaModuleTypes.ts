import { PrismaClientOptions } from "@prisma/client/runtime";
import {
  Prisma,
  User,
  Basic,
  Location,
  Profile,
  Work,
  Volunteer,
  Education,
  Award,
  Publication,
  Skill,
  SkillKeyword,
  Language,
  Interest,
  Reference,
  Project,
} from "@prisma/client";
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
import { PrismaService } from "@/api/services/Prisma.service";

export type UserModule = {
  name: "users";
  entity: User;
  delegate: Prisma.UserDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectUserDto;
  createDto: typeof CreateUserDto;
  updateDto: typeof UpdateUserDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.UserWhereUniqueInput; where?: Prisma.UserWhereInput; orderBy?: Prisma.UserOrderByWithRelationInput };
};

export type BasicModule = {
  name: "basics";
  entity: Basic;
  delegate: Prisma.BasicDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectBasicDto;
  createDto: typeof CreateBasicDto;
  updateDto: typeof UpdateBasicDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.BasicWhereUniqueInput; where?: Prisma.BasicWhereInput; orderBy?: Prisma.BasicOrderByWithRelationInput };
};

export type LocationModule = {
  name: "locations";
  entity: Location;
  delegate: Prisma.LocationDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectLocationDto;
  createDto: typeof CreateLocationDto;
  updateDto: typeof UpdateLocationDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.LocationWhereUniqueInput; where?: Prisma.LocationWhereInput; orderBy?: Prisma.LocationOrderByWithRelationInput };
};

export type ProfileModule = {
  name: "profiles";
  entity: Profile;
  delegate: Prisma.ProfileDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectProfileDto;
  createDto: typeof CreateProfileDto;
  updateDto: typeof UpdateProfileDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.ProfileWhereUniqueInput; where?: Prisma.ProfileWhereInput; orderBy?: Prisma.ProfileOrderByWithRelationInput };
};

export type WorkModule = {
  name: "works";
  entity: Work;
  delegate: Prisma.WorkDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectWorkDto;
  createDto: typeof CreateWorkDto;
  updateDto: typeof UpdateWorkDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.WorkWhereUniqueInput; where?: Prisma.WorkWhereInput; orderBy?: Prisma.WorkOrderByWithRelationInput };
};

export type VolunteerModule = {
  name: "volunteers";
  entity: Volunteer;
  delegate: Prisma.VolunteerDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectVolunteerDto;
  createDto: typeof CreateVolunteerDto;
  updateDto: typeof UpdateVolunteerDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.VolunteerWhereUniqueInput; where?: Prisma.VolunteerWhereInput; orderBy?: Prisma.VolunteerOrderByWithRelationInput };
};

export type EducationModule = {
  name: "educations";
  entity: Education;
  delegate: Prisma.EducationDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectEducationDto;
  createDto: typeof CreateEducationDto;
  updateDto: typeof UpdateEducationDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.EducationWhereUniqueInput; where?: Prisma.EducationWhereInput; orderBy?: Prisma.EducationOrderByWithRelationInput };
};

export type AwardModule = {
  name: "awards";
  entity: Award;
  delegate: Prisma.AwardDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectAwardDto;
  createDto: typeof CreateAwardDto;
  updateDto: typeof UpdateAwardDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.AwardWhereUniqueInput; where?: Prisma.AwardWhereInput; orderBy?: Prisma.AwardOrderByWithRelationInput };
};

export type PublicationModule = {
  name: "publications";
  entity: Publication;
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
  name: "skills";
  entity: Skill;
  delegate: Prisma.SkillDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectSkillDto;
  createDto: typeof CreateSkillDto;
  updateDto: typeof UpdateSkillDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.SkillWhereUniqueInput; where?: Prisma.SkillWhereInput; orderBy?: Prisma.SkillOrderByWithRelationInput };
};

export type SkillKeywordModule = {
  name: "skillkeywords";
  entity: SkillKeyword;
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
  name: "languages";
  entity: Language;
  delegate: Prisma.LanguageDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectLanguageDto;
  createDto: typeof CreateLanguageDto;
  updateDto: typeof UpdateLanguageDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.LanguageWhereUniqueInput; where?: Prisma.LanguageWhereInput; orderBy?: Prisma.LanguageOrderByWithRelationInput };
};

export type InterestModule = {
  name: "interests";
  entity: Interest;
  delegate: Prisma.InterestDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectInterestDto;
  createDto: typeof CreateInterestDto;
  updateDto: typeof UpdateInterestDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.InterestWhereUniqueInput; where?: Prisma.InterestWhereInput; orderBy?: Prisma.InterestOrderByWithRelationInput };
};

export type ReferenceModule = {
  name: "references";
  entity: Reference;
  delegate: Prisma.ReferenceDelegate<PrismaClientOptions["rejectOnNotFound"]>;
  connectDto: typeof ConnectReferenceDto;
  createDto: typeof CreateReferenceDto;
  updateDto: typeof UpdateReferenceDto;
  findManyType: { skip?: number; take?: number; cursor?: Prisma.ReferenceWhereUniqueInput; where?: Prisma.ReferenceWhereInput; orderBy?: Prisma.ReferenceOrderByWithRelationInput };
};

export type ProjectModule = {
  name: "projects";
  entity: Project;
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
    connectDto: ConnectUserDto,
    createDto: CreateUserDto,
    updateDto: UpdateUserDto,
    name: "users",
  } as UserModule,
  Basic: {
    delegate: prismaService.basic,
    connectDto: ConnectBasicDto,
    createDto: CreateBasicDto,
    updateDto: UpdateBasicDto,
    name: "basics",
  } as BasicModule,
  Location: {
    delegate: prismaService.location,
    connectDto: ConnectLocationDto,
    createDto: CreateLocationDto,
    updateDto: UpdateLocationDto,
    name: "locations",
  } as LocationModule,
  Profile: {
    delegate: prismaService.profile,
    connectDto: ConnectProfileDto,
    createDto: CreateProfileDto,
    updateDto: UpdateProfileDto,
    name: "profiles",
  } as ProfileModule,
  Work: {
    delegate: prismaService.work,
    connectDto: ConnectWorkDto,
    createDto: CreateWorkDto,
    updateDto: UpdateWorkDto,
    name: "works",
  } as WorkModule,
  Volunteer: {
    delegate: prismaService.volunteer,
    connectDto: ConnectVolunteerDto,
    createDto: CreateVolunteerDto,
    updateDto: UpdateVolunteerDto,
    name: "volunteers",
  } as VolunteerModule,
  Education: {
    delegate: prismaService.education,
    connectDto: ConnectEducationDto,
    createDto: CreateEducationDto,
    updateDto: UpdateEducationDto,
    name: "educations",
  } as EducationModule,
  Award: {
    delegate: prismaService.award,
    connectDto: ConnectAwardDto,
    createDto: CreateAwardDto,
    updateDto: UpdateAwardDto,
    name: "awards",
  } as AwardModule,
  Publication: {
    delegate: prismaService.publication,
    connectDto: ConnectPublicationDto,
    createDto: CreatePublicationDto,
    updateDto: UpdatePublicationDto,
    name: "publications",
  } as PublicationModule,
  Skill: {
    delegate: prismaService.skill,
    connectDto: ConnectSkillDto,
    createDto: CreateSkillDto,
    updateDto: UpdateSkillDto,
    name: "skills",
  } as SkillModule,
  SkillKeyword: {
    delegate: prismaService.skillKeyword,
    connectDto: ConnectSkillKeywordDto,
    createDto: CreateSkillKeywordDto,
    updateDto: UpdateSkillKeywordDto,
    name: "skillkeywords",
  } as SkillKeywordModule,
  Language: {
    delegate: prismaService.language,
    connectDto: ConnectLanguageDto,
    createDto: CreateLanguageDto,
    updateDto: UpdateLanguageDto,
    name: "languages",
  } as LanguageModule,
  Interest: {
    delegate: prismaService.interest,
    connectDto: ConnectInterestDto,
    createDto: CreateInterestDto,
    updateDto: UpdateInterestDto,
    name: "interests",
  } as InterestModule,
  Reference: {
    delegate: prismaService.reference,
    connectDto: ConnectReferenceDto,
    createDto: CreateReferenceDto,
    updateDto: UpdateReferenceDto,
    name: "references",
  } as ReferenceModule,
  Project: {
    delegate: prismaService.project,
    connectDto: ConnectProjectDto,
    createDto: CreateProjectDto,
    updateDto: UpdateProjectDto,
    name: "projects",
  } as ProjectModule,
};
