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
    CreateLanguageUserRelationInputDto,
    CreateLanguageUserRelationInputDtoFromJSON,
    CreateLanguageUserRelationInputDtoFromJSONTyped,
    CreateLanguageUserRelationInputDtoToJSON,
} from './CreateLanguageUserRelationInputDto';

/**
 * 
 * @export
 * @interface LanguageCreateDto
 */
export interface LanguageCreateDto {
    /**
     * 
     * @type {string}
     * @memberof LanguageCreateDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageCreateDto
     */
    fluency: string;
    /**
     * 
     * @type {CreateLanguageUserRelationInputDto}
     * @memberof LanguageCreateDto
     */
    user?: CreateLanguageUserRelationInputDto;
}

export function LanguageCreateDtoFromJSON(json: any): LanguageCreateDto {
    return LanguageCreateDtoFromJSONTyped(json, false);
}

export function LanguageCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageCreateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'fluency': json['fluency'],
        'user': !exists(json, 'user') ? undefined : CreateLanguageUserRelationInputDtoFromJSON(json['user']),
    };
}

export function LanguageCreateDtoToJSON(value?: LanguageCreateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'fluency': value.fluency,
        'user': CreateLanguageUserRelationInputDtoToJSON(value.user),
    };
}
