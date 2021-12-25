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
 * @interface Award
 */
export interface Award {
    /**
     * 
     * @type {number}
     * @memberof Award
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Award
     */
    title: string;
    /**
     * 
     * @type {Date}
     * @memberof Award
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof Award
     */
    awarder: string;
    /**
     * 
     * @type {string}
     * @memberof Award
     */
    summary: string;
    /**
     * 
     * @type {number}
     * @memberof Award
     */
    userId: number | null;
    /**
     * 
     * @type {User}
     * @memberof Award
     */
    user?: User | null;
}

export function AwardFromJSON(json: any): Award {
    return AwardFromJSONTyped(json, false);
}

export function AwardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Award {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'date': (new Date(json['date'])),
        'awarder': json['awarder'],
        'summary': json['summary'],
        'userId': json['userId'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function AwardToJSON(value?: Award | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'date': (value.date.toISOString()),
        'awarder': value.awarder,
        'summary': value.summary,
        'userId': value.userId,
        'user': UserToJSON(value.user),
    };
}
