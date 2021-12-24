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
    CreateWorkUserRelationInputDto,
    CreateWorkUserRelationInputDtoFromJSON,
    CreateWorkUserRelationInputDtoFromJSONTyped,
    CreateWorkUserRelationInputDtoToJSON,
} from './CreateWorkUserRelationInputDto';

/**
 * 
 * @export
 * @interface CreateWorkDto
 */
export interface CreateWorkDto {
    /**
     * 
     * @type {string}
     * @memberof CreateWorkDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkDto
     */
    position: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkDto
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorkDto
     */
    url: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateWorkDto
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateWorkDto
     */
    endDate: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateWorkDto
     */
    highlights: Array<string>;
    /**
     * 
     * @type {CreateWorkUserRelationInputDto}
     * @memberof CreateWorkDto
     */
    user?: CreateWorkUserRelationInputDto;
}

export function CreateWorkDtoFromJSON(json: any): CreateWorkDto {
    return CreateWorkDtoFromJSONTyped(json, false);
}

export function CreateWorkDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWorkDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'position': json['position'],
        'summary': json['summary'],
        'url': json['url'],
        'startDate': (new Date(json['startDate'])),
        'endDate': (new Date(json['endDate'])),
        'highlights': json['highlights'],
        'user': !exists(json, 'user') ? undefined : CreateWorkUserRelationInputDtoFromJSON(json['user']),
    };
}

export function CreateWorkDtoToJSON(value?: CreateWorkDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'position': value.position,
        'summary': value.summary,
        'url': value.url,
        'startDate': (value.startDate.toISOString()),
        'endDate': (value.endDate.toISOString()),
        'highlights': value.highlights,
        'user': CreateWorkUserRelationInputDtoToJSON(value.user),
    };
}

