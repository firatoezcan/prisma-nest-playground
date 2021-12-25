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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Education
 */
export interface Education {
    /**
     * 
     * @type {number}
     * @memberof Education
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Education
     */
    institution: string;
    /**
     * 
     * @type {string}
     * @memberof Education
     */
    area: string;
    /**
     * 
     * @type {string}
     * @memberof Education
     */
    studyType: string;
    /**
     * 
     * @type {string}
     * @memberof Education
     */
    url: string;
    /**
     * 
     * @type {Date}
     * @memberof Education
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof Education
     */
    endDate: Date;
    /**
     * 
     * @type {string}
     * @memberof Education
     */
    score: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Education
     */
    courses: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Education
     */
    userId: number | null;
    /**
     * 
     * @type {User}
     * @memberof Education
     */
    user?: User | null;
}

export function EducationFromJSON(json: any): Education {
    return EducationFromJSONTyped(json, false);
}

export function EducationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Education {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'institution': json['institution'],
        'area': json['area'],
        'studyType': json['studyType'],
        'url': json['url'],
        'startDate': (new Date(json['startDate'])),
        'endDate': (new Date(json['endDate'])),
        'score': json['score'],
        'courses': json['courses'],
        'userId': json['userId'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function EducationToJSON(value?: Education | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'institution': value.institution,
        'area': value.area,
        'studyType': value.studyType,
        'url': value.url,
        'startDate': (value.startDate.toISOString()),
        'endDate': (value.endDate.toISOString()),
        'score': value.score,
        'courses': value.courses,
        'userId': value.userId,
        'user': UserToJSON(value.user),
    };
}

