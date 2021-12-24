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
 * @interface AwardsCreateDto
 */
export interface AwardsCreateDto {
    /**
     * 
     * @type {string}
     * @memberof AwardsCreateDto
     */
    title: string;
    /**
     * 
     * @type {Date}
     * @memberof AwardsCreateDto
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof AwardsCreateDto
     */
    awarder: string;
    /**
     * 
     * @type {string}
     * @memberof AwardsCreateDto
     */
    summary: string;
    /**
     * 
     * @type {CreateAwardUserRelationInputDto}
     * @memberof AwardsCreateDto
     */
    user?: CreateAwardUserRelationInputDto;
}

export function AwardsCreateDtoFromJSON(json: any): AwardsCreateDto {
    return AwardsCreateDtoFromJSONTyped(json, false);
}

export function AwardsCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardsCreateDto {
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

export function AwardsCreateDtoToJSON(value?: AwardsCreateDto | null): any {
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

