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
 * @interface BasicEntity
 */
export interface BasicEntity {
    /**
     * 
     * @type {number}
     * @memberof BasicEntity
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof BasicEntity
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof BasicEntity
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof BasicEntity
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof BasicEntity
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof BasicEntity
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof BasicEntity
     */
    phone: string;
    /**
     * 
     * @type {string}
     * @memberof BasicEntity
     */
    summary: string;
    /**
     * 
     * @type {number}
     * @memberof BasicEntity
     */
    userId: number | null;
    /**
     * 
     * @type {User}
     * @memberof BasicEntity
     */
    user?: User | null;
}

export function BasicEntityFromJSON(json: any): BasicEntity {
    return BasicEntityFromJSONTyped(json, false);
}

export function BasicEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'email': json['email'],
        'label': json['label'],
        'image': json['image'],
        'phone': json['phone'],
        'summary': json['summary'],
        'userId': json['userId'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function BasicEntityToJSON(value?: BasicEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'label': value.label,
        'image': value.image,
        'phone': value.phone,
        'summary': value.summary,
        'userId': value.userId,
        'user': UserToJSON(value.user),
    };
}

