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
    CreateAwardUserRelationInputDto,
    CreateAwardUserRelationInputDtoFromJSON,
    CreateAwardUserRelationInputDtoFromJSONTyped,
    CreateAwardUserRelationInputDtoToJSON,
} from './CreateAwardUserRelationInputDto';

/**
 * 
 * @export
 * @interface CreateAwardDto
 */
export interface CreateAwardDto {
    /**
     * 
     * @type {string}
     * @memberof CreateAwardDto
     */
    title: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateAwardDto
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateAwardDto
     */
    awarder: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAwardDto
     */
    summary: string;
    /**
     * 
     * @type {CreateAwardUserRelationInputDto}
     * @memberof CreateAwardDto
     */
    user?: CreateAwardUserRelationInputDto;
}

export function CreateAwardDtoFromJSON(json: any): CreateAwardDto {
    return CreateAwardDtoFromJSONTyped(json, false);
}

export function CreateAwardDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAwardDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'date': (new Date(json['date'])),
        'awarder': json['awarder'],
        'summary': json['summary'],
        'user': !exists(json, 'user') ? undefined : CreateAwardUserRelationInputDtoFromJSON(json['user']),
    };
}

export function CreateAwardDtoToJSON(value?: CreateAwardDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'date': (value.date.toISOString()),
        'awarder': value.awarder,
        'summary': value.summary,
        'user': CreateAwardUserRelationInputDtoToJSON(value.user),
    };
}

