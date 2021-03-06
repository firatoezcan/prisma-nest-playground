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
    SkillKeyword,
    SkillKeywordFromJSON,
    SkillKeywordFromJSONTyped,
    SkillKeywordToJSON,
} from './SkillKeyword';
import {
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface SkillEntity
 */
export interface SkillEntity {
    /**
     * 
     * @type {number}
     * @memberof SkillEntity
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SkillEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SkillEntity
     */
    level: string;
    /**
     * 
     * @type {Array<SkillKeyword>}
     * @memberof SkillEntity
     */
    keywords?: Array<SkillKeyword>;
    /**
     * 
     * @type {number}
     * @memberof SkillEntity
     */
    userId: number | null;
    /**
     * 
     * @type {User}
     * @memberof SkillEntity
     */
    user?: User | null;
}

export function SkillEntityFromJSON(json: any): SkillEntity {
    return SkillEntityFromJSONTyped(json, false);
}

export function SkillEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkillEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'level': json['level'],
        'keywords': !exists(json, 'keywords') ? undefined : ((json['keywords'] as Array<any>).map(SkillKeywordFromJSON)),
        'userId': json['userId'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function SkillEntityToJSON(value?: SkillEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'level': value.level,
        'keywords': value.keywords === undefined ? undefined : ((value.keywords as Array<any>).map(SkillKeywordToJSON)),
        'userId': value.userId,
        'user': UserToJSON(value.user),
    };
}

