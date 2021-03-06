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
    Award,
    AwardFromJSON,
    AwardFromJSONTyped,
    AwardToJSON,
} from './Award';
import {
    Basic,
    BasicFromJSON,
    BasicFromJSONTyped,
    BasicToJSON,
} from './Basic';
import {
    Education,
    EducationFromJSON,
    EducationFromJSONTyped,
    EducationToJSON,
} from './Education';
import {
    Interest,
    InterestFromJSON,
    InterestFromJSONTyped,
    InterestToJSON,
} from './Interest';
import {
    Language,
    LanguageFromJSON,
    LanguageFromJSONTyped,
    LanguageToJSON,
} from './Language';
import {
    Location,
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
} from './Location';
import {
    Profile,
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';
import {
    Project,
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
} from './Project';
import {
    Publication,
    PublicationFromJSON,
    PublicationFromJSONTyped,
    PublicationToJSON,
} from './Publication';
import {
    Reference,
    ReferenceFromJSON,
    ReferenceFromJSONTyped,
    ReferenceToJSON,
} from './Reference';
import {
    Skill,
    SkillFromJSON,
    SkillFromJSONTyped,
    SkillToJSON,
} from './Skill';
import {
    Volunteer,
    VolunteerFromJSON,
    VolunteerFromJSONTyped,
    VolunteerToJSON,
} from './Volunteer';
import {
    Work,
    WorkFromJSON,
    WorkFromJSONTyped,
    WorkToJSON,
} from './Work';

/**
 * 
 * @export
 * @interface UserEntity
 */
export interface UserEntity {
    /**
     * 
     * @type {number}
     * @memberof UserEntity
     */
    id: number;
    /**
     * 
     * @type {Basic}
     * @memberof UserEntity
     */
    basics?: Basic | null;
    /**
     * 
     * @type {Location}
     * @memberof UserEntity
     */
    location?: Location | null;
    /**
     * 
     * @type {Array<Profile>}
     * @memberof UserEntity
     */
    profiles?: Array<Profile>;
    /**
     * 
     * @type {Array<Work>}
     * @memberof UserEntity
     */
    work?: Array<Work>;
    /**
     * 
     * @type {Array<Volunteer>}
     * @memberof UserEntity
     */
    volunteer?: Array<Volunteer>;
    /**
     * 
     * @type {Array<Education>}
     * @memberof UserEntity
     */
    education?: Array<Education>;
    /**
     * 
     * @type {Array<Award>}
     * @memberof UserEntity
     */
    awards?: Array<Award>;
    /**
     * 
     * @type {Array<Publication>}
     * @memberof UserEntity
     */
    publications?: Array<Publication>;
    /**
     * 
     * @type {Array<Skill>}
     * @memberof UserEntity
     */
    skills?: Array<Skill>;
    /**
     * 
     * @type {Array<Language>}
     * @memberof UserEntity
     */
    languages?: Array<Language>;
    /**
     * 
     * @type {Array<Interest>}
     * @memberof UserEntity
     */
    interests?: Array<Interest>;
    /**
     * 
     * @type {Array<Reference>}
     * @memberof UserEntity
     */
    references?: Array<Reference>;
    /**
     * 
     * @type {Array<Project>}
     * @memberof UserEntity
     */
    projects?: Array<Project>;
}

export function UserEntityFromJSON(json: any): UserEntity {
    return UserEntityFromJSONTyped(json, false);
}

export function UserEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'basics': !exists(json, 'basics') ? undefined : BasicFromJSON(json['basics']),
        'location': !exists(json, 'location') ? undefined : LocationFromJSON(json['location']),
        'profiles': !exists(json, 'profiles') ? undefined : ((json['profiles'] as Array<any>).map(ProfileFromJSON)),
        'work': !exists(json, 'work') ? undefined : ((json['work'] as Array<any>).map(WorkFromJSON)),
        'volunteer': !exists(json, 'volunteer') ? undefined : ((json['volunteer'] as Array<any>).map(VolunteerFromJSON)),
        'education': !exists(json, 'education') ? undefined : ((json['education'] as Array<any>).map(EducationFromJSON)),
        'awards': !exists(json, 'awards') ? undefined : ((json['awards'] as Array<any>).map(AwardFromJSON)),
        'publications': !exists(json, 'publications') ? undefined : ((json['publications'] as Array<any>).map(PublicationFromJSON)),
        'skills': !exists(json, 'skills') ? undefined : ((json['skills'] as Array<any>).map(SkillFromJSON)),
        'languages': !exists(json, 'languages') ? undefined : ((json['languages'] as Array<any>).map(LanguageFromJSON)),
        'interests': !exists(json, 'interests') ? undefined : ((json['interests'] as Array<any>).map(InterestFromJSON)),
        'references': !exists(json, 'references') ? undefined : ((json['references'] as Array<any>).map(ReferenceFromJSON)),
        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(ProjectFromJSON)),
    };
}

export function UserEntityToJSON(value?: UserEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'basics': BasicToJSON(value.basics),
        'location': LocationToJSON(value.location),
        'profiles': value.profiles === undefined ? undefined : ((value.profiles as Array<any>).map(ProfileToJSON)),
        'work': value.work === undefined ? undefined : ((value.work as Array<any>).map(WorkToJSON)),
        'volunteer': value.volunteer === undefined ? undefined : ((value.volunteer as Array<any>).map(VolunteerToJSON)),
        'education': value.education === undefined ? undefined : ((value.education as Array<any>).map(EducationToJSON)),
        'awards': value.awards === undefined ? undefined : ((value.awards as Array<any>).map(AwardToJSON)),
        'publications': value.publications === undefined ? undefined : ((value.publications as Array<any>).map(PublicationToJSON)),
        'skills': value.skills === undefined ? undefined : ((value.skills as Array<any>).map(SkillToJSON)),
        'languages': value.languages === undefined ? undefined : ((value.languages as Array<any>).map(LanguageToJSON)),
        'interests': value.interests === undefined ? undefined : ((value.interests as Array<any>).map(InterestToJSON)),
        'references': value.references === undefined ? undefined : ((value.references as Array<any>).map(ReferenceToJSON)),
        'projects': value.projects === undefined ? undefined : ((value.projects as Array<any>).map(ProjectToJSON)),
    };
}

