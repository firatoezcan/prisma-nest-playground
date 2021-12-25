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
 * @interface Language
 */
export interface Language {
    /**
     * 
     * @type {number}
     * @memberof Language
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    fluency: string;
    /**
     * 
     * @type {number}
     * @memberof Language
     */
    userId: number | null;
    /**
     * 
     * @type {User}
     * @memberof Language
     */
    user?: User | null;
}

export function LanguageFromJSON(json: any): Language {
    return LanguageFromJSONTyped(json, false);
}

export function LanguageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Language {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'fluency': json['fluency'],
        'userId': json['userId'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function LanguageToJSON(value?: Language | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'fluency': value.fluency,
        'userId': value.userId,
        'user': UserToJSON(value.user),
    };
}

