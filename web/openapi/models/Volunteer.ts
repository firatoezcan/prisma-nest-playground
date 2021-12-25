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
 * @interface Volunteer
 */
export interface Volunteer {
    /**
     * 
     * @type {number}
     * @memberof Volunteer
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Volunteer
     */
    organization: string;
    /**
     * 
     * @type {string}
     * @memberof Volunteer
     */
    position: string;
    /**
     * 
     * @type {string}
     * @memberof Volunteer
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof Volunteer
     */
    url: string;
    /**
     * 
     * @type {Date}
     * @memberof Volunteer
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof Volunteer
     */
    endDate: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof Volunteer
     */
    highlights: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Volunteer
     */
    userId: number | null;
    /**
     * 
     * @type {User}
     * @memberof Volunteer
     */
    user?: User | null;
}

export function VolunteerFromJSON(json: any): Volunteer {
    return VolunteerFromJSONTyped(json, false);
}

export function VolunteerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Volunteer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'organization': json['organization'],
        'position': json['position'],
        'summary': json['summary'],
        'url': json['url'],
        'startDate': (new Date(json['startDate'])),
        'endDate': (new Date(json['endDate'])),
        'highlights': json['highlights'],
        'userId': json['userId'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function VolunteerToJSON(value?: Volunteer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'organization': value.organization,
        'position': value.position,
        'summary': value.summary,
        'url': value.url,
        'startDate': (value.startDate.toISOString()),
        'endDate': (value.endDate.toISOString()),
        'highlights': value.highlights,
        'userId': value.userId,
        'user': UserToJSON(value.user),
    };
}

