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
 * @interface Work
 */
export interface Work {
    /**
     * 
     * @type {number}
     * @memberof Work
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Work
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Work
     */
    position: string;
    /**
     * 
     * @type {string}
     * @memberof Work
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof Work
     */
    url: string;
    /**
     * 
     * @type {Date}
     * @memberof Work
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof Work
     */
    endDate: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof Work
     */
    highlights: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Work
     */
    userId: number | null;
    /**
     * 
     * @type {User}
     * @memberof Work
     */
    user?: User | null;
}

export function WorkFromJSON(json: any): Work {
    return WorkFromJSONTyped(json, false);
}

export function WorkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Work {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
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

export function WorkToJSON(value?: Work | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
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
