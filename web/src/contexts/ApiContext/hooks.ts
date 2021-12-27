import { createApiHooks } from "./create-api-hook";

// Todo: Generate this file

export const AppHooks = createApiHooks("App");
export const useAppQuery = AppHooks.query;
export const useAppMutation = AppHooks.mutate;

export const AwardHooks = createApiHooks("Award");
export const useAwardQuery = AwardHooks.query;
export const useAwardMutation = AwardHooks.mutate;

export const BasicHooks = createApiHooks("Basic");
export const useBasicQuery = BasicHooks.query;
export const useBasicMutation = BasicHooks.mutate;

export const EducationHooks = createApiHooks("Education");
export const useEducationQuery = EducationHooks.query;
export const useEducationMutation = EducationHooks.mutate;

export const InterestHooks = createApiHooks("Interest");
export const useInterestQuery = InterestHooks.query;
export const useInterestMutation = InterestHooks.mutate;

export const LanguageHooks = createApiHooks("Language");
export const useLanguageQuery = LanguageHooks.query;
export const useLanguageMutation = LanguageHooks.mutate;

export const LocationHooks = createApiHooks("Location");
export const useLocationQuery = LocationHooks.query;
export const useLocationMutation = LocationHooks.mutate;

export const ProfileHooks = createApiHooks("Profile");
export const useProfileQuery = ProfileHooks.query;
export const useProfileMutation = ProfileHooks.mutate;

export const ProjectHooks = createApiHooks("Project");
export const useProjectQuery = ProjectHooks.query;
export const useProjectMutation = ProjectHooks.mutate;

export const PublicationHooks = createApiHooks("Publication");
export const usePublicationQuery = PublicationHooks.query;
export const usePublicationMutation = PublicationHooks.mutate;

export const ReferenceHooks = createApiHooks("Reference");
export const useReferenceQuery = ReferenceHooks.query;
export const useReferenceMutation = ReferenceHooks.mutate;

export const SkillHooks = createApiHooks("Skill");
export const useSkillQuery = SkillHooks.query;
export const useSkillMutation = SkillHooks.mutate;

export const SkillKeywordHooks = createApiHooks("SkillKeyword");
export const useSkillKeywordQuery = SkillKeywordHooks.query;
export const useSkillKeywordMutation = SkillKeywordHooks.mutate;

export const UserHooks = createApiHooks("User");
export const useUserQuery = UserHooks.query;
export const useUserMutation = UserHooks.mutate;

export const VolunteerHooks = createApiHooks("Volunteer");
export const useVolunteerQuery = VolunteerHooks.query;
export const useVolunteerMutation = VolunteerHooks.mutate;

export const WorkHooks = createApiHooks("Work");
export const useWorkQuery = WorkHooks.query;
export const useWorkMutation = WorkHooks.mutate;
