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
 * @interface ProjectEntity
 */
export interface ProjectEntity {
    /**
     * 
     * @type {number}
     * @memberof ProjectEntity
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectEntity
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectEntity
     */
    highlights: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectEntity
     */
    keywords: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof ProjectEntity
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProjectEntity
     */
    endDate: Date;
    /**
     * 
     * @type {string}
     * @memberof ProjectEntity
     */
    url: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectEntity
     */
    roles: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProjectEntity
     */
    entity: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectEntity
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectEntity
     */
    userId: number | null;
    /**
     * 
     * @type {User}
     * @memberof ProjectEntity
     */
    user?: User | null;
}

export function ProjectEntityFromJSON(json: any): ProjectEntity {
    return ProjectEntityFromJSONTyped(json, false);
}

export function ProjectEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'highlights': json['highlights'],
        'keywords': json['keywords'],
        'startDate': (new Date(json['startDate'])),
        'endDate': (new Date(json['endDate'])),
        'url': json['url'],
        'roles': json['roles'],
        'entity': json['entity'],
        'type': json['type'],
        'userId': json['userId'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function ProjectEntityToJSON(value?: ProjectEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'highlights': value.highlights,
        'keywords': value.keywords,
        'startDate': (value.startDate.toISOString()),
        'endDate': (value.endDate.toISOString()),
        'url': value.url,
        'roles': value.roles,
        'entity': value.entity,
        'type': value.type,
        'userId': value.userId,
        'user': UserToJSON(value.user),
    };
}

