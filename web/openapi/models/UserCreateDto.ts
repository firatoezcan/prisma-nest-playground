/* tslint:disable */
/* eslint-disable */
/**
 * JSON Resume
 * Standarized resumes
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CreateUserAwardsRelationInputDto,
    CreateUserAwardsRelationInputDtoFromJSON,
    CreateUserAwardsRelationInputDtoFromJSONTyped,
    CreateUserAwardsRelationInputDtoToJSON,
} from './CreateUserAwardsRelationInputDto';
import {
    CreateUserEducationRelationInputDto,
    CreateUserEducationRelationInputDtoFromJSON,
    CreateUserEducationRelationInputDtoFromJSONTyped,
    CreateUserEducationRelationInputDtoToJSON,
} from './CreateUserEducationRelationInputDto';
import {
    CreateUserInterestsRelationInputDto,
    CreateUserInterestsRelationInputDtoFromJSON,
    CreateUserInterestsRelationInputDtoFromJSONTyped,
    CreateUserInterestsRelationInputDtoToJSON,
} from './CreateUserInterestsRelationInputDto';
import {
    CreateUserLanguagesRelationInputDto,
    CreateUserLanguagesRelationInputDtoFromJSON,
    CreateUserLanguagesRelationInputDtoFromJSONTyped,
    CreateUserLanguagesRelationInputDtoToJSON,
} from './CreateUserLanguagesRelationInputDto';
import {
    CreateUserProfilesRelationInputDto,
    CreateUserProfilesRelationInputDtoFromJSON,
    CreateUserProfilesRelationInputDtoFromJSONTyped,
    CreateUserProfilesRelationInputDtoToJSON,
} from './CreateUserProfilesRelationInputDto';
import {
    CreateUserProjectsRelationInputDto,
    CreateUserProjectsRelationInputDtoFromJSON,
    CreateUserProjectsRelationInputDtoFromJSONTyped,
    CreateUserProjectsRelationInputDtoToJSON,
} from './CreateUserProjectsRelationInputDto';
import {
    CreateUserPublicationsRelationInputDto,
    CreateUserPublicationsRelationInputDtoFromJSON,
    CreateUserPublicationsRelationInputDtoFromJSONTyped,
    CreateUserPublicationsRelationInputDtoToJSON,
} from './CreateUserPublicationsRelationInputDto';
import {
    CreateUserReferencesRelationInputDto,
    CreateUserReferencesRelationInputDtoFromJSON,
    CreateUserReferencesRelationInputDtoFromJSONTyped,
    CreateUserReferencesRelationInputDtoToJSON,
} from './CreateUserReferencesRelationInputDto';
import {
    CreateUserSkillsRelationInputDto,
    CreateUserSkillsRelationInputDtoFromJSON,
    CreateUserSkillsRelationInputDtoFromJSONTyped,
    CreateUserSkillsRelationInputDtoToJSON,
} from './CreateUserSkillsRelationInputDto';
import {
    CreateUserVolunteerRelationInputDto,
    CreateUserVolunteerRelationInputDtoFromJSON,
    CreateUserVolunteerRelationInputDtoFromJSONTyped,
    CreateUserVolunteerRelationInputDtoToJSON,
} from './CreateUserVolunteerRelationInputDto';
import {
    CreateUserWorkRelationInputDto,
    CreateUserWorkRelationInputDtoFromJSON,
    CreateUserWorkRelationInputDtoFromJSONTyped,
    CreateUserWorkRelationInputDtoToJSON,
} from './CreateUserWorkRelationInputDto';

/**
 * 
 * @export
 * @interface UserCreateDto
 */
export interface UserCreateDto {
    /**
     * 
     * @type {CreateUserProfilesRelationInputDto}
     * @memberof UserCreateDto
     */
    profiles?: CreateUserProfilesRelationInputDto;
    /**
     * 
     * @type {CreateUserWorkRelationInputDto}
     * @memberof UserCreateDto
     */
    work?: CreateUserWorkRelationInputDto;
    /**
     * 
     * @type {CreateUserVolunteerRelationInputDto}
     * @memberof UserCreateDto
     */
    volunteer?: CreateUserVolunteerRelationInputDto;
    /**
     * 
     * @type {CreateUserEducationRelationInputDto}
     * @memberof UserCreateDto
     */
    education?: CreateUserEducationRelationInputDto;
    /**
     * 
     * @type {CreateUserAwardsRelationInputDto}
     * @memberof UserCreateDto
     */
    awards?: CreateUserAwardsRelationInputDto;
    /**
     * 
     * @type {CreateUserPublicationsRelationInputDto}
     * @memberof UserCreateDto
     */
    publications?: CreateUserPublicationsRelationInputDto;
    /**
     * 
     * @type {CreateUserSkillsRelationInputDto}
     * @memberof UserCreateDto
     */
    skills?: CreateUserSkillsRelationInputDto;
    /**
     * 
     * @type {CreateUserLanguagesRelationInputDto}
     * @memberof UserCreateDto
     */
    languages?: CreateUserLanguagesRelationInputDto;
    /**
     * 
     * @type {CreateUserInterestsRelationInputDto}
     * @memberof UserCreateDto
     */
    interests?: CreateUserInterestsRelationInputDto;
    /**
     * 
     * @type {CreateUserReferencesRelationInputDto}
     * @memberof UserCreateDto
     */
    references?: CreateUserReferencesRelationInputDto;
    /**
     * 
     * @type {CreateUserProjectsRelationInputDto}
     * @memberof UserCreateDto
     */
    projects?: CreateUserProjectsRelationInputDto;
}

export function UserCreateDtoFromJSON(json: any): UserCreateDto {
    return UserCreateDtoFromJSONTyped(json, false);
}

export function UserCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCreateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profiles': !exists(json, 'profiles') ? undefined : CreateUserProfilesRelationInputDtoFromJSON(json['profiles']),
        'work': !exists(json, 'work') ? undefined : CreateUserWorkRelationInputDtoFromJSON(json['work']),
        'volunteer': !exists(json, 'volunteer') ? undefined : CreateUserVolunteerRelationInputDtoFromJSON(json['volunteer']),
        'education': !exists(json, 'education') ? undefined : CreateUserEducationRelationInputDtoFromJSON(json['education']),
        'awards': !exists(json, 'awards') ? undefined : CreateUserAwardsRelationInputDtoFromJSON(json['awards']),
        'publications': !exists(json, 'publications') ? undefined : CreateUserPublicationsRelationInputDtoFromJSON(json['publications']),
        'skills': !exists(json, 'skills') ? undefined : CreateUserSkillsRelationInputDtoFromJSON(json['skills']),
        'languages': !exists(json, 'languages') ? undefined : CreateUserLanguagesRelationInputDtoFromJSON(json['languages']),
        'interests': !exists(json, 'interests') ? undefined : CreateUserInterestsRelationInputDtoFromJSON(json['interests']),
        'references': !exists(json, 'references') ? undefined : CreateUserReferencesRelationInputDtoFromJSON(json['references']),
        'projects': !exists(json, 'projects') ? undefined : CreateUserProjectsRelationInputDtoFromJSON(json['projects']),
    };
}

export function UserCreateDtoToJSON(value?: UserCreateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profiles': CreateUserProfilesRelationInputDtoToJSON(value.profiles),
        'work': CreateUserWorkRelationInputDtoToJSON(value.work),
        'volunteer': CreateUserVolunteerRelationInputDtoToJSON(value.volunteer),
        'education': CreateUserEducationRelationInputDtoToJSON(value.education),
        'awards': CreateUserAwardsRelationInputDtoToJSON(value.awards),
        'publications': CreateUserPublicationsRelationInputDtoToJSON(value.publications),
        'skills': CreateUserSkillsRelationInputDtoToJSON(value.skills),
        'languages': CreateUserLanguagesRelationInputDtoToJSON(value.languages),
        'interests': CreateUserInterestsRelationInputDtoToJSON(value.interests),
        'references': CreateUserReferencesRelationInputDtoToJSON(value.references),
        'projects': CreateUserProjectsRelationInputDtoToJSON(value.projects),
    };
}

