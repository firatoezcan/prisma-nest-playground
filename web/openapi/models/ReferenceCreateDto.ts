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
    CreateReferenceUserRelationInputDto,
    CreateReferenceUserRelationInputDtoFromJSON,
    CreateReferenceUserRelationInputDtoFromJSONTyped,
    CreateReferenceUserRelationInputDtoToJSON,
} from './CreateReferenceUserRelationInputDto';

/**
 * 
 * @export
 * @interface ReferenceCreateDto
 */
export interface ReferenceCreateDto {
    /**
     * 
     * @type {string}
     * @memberof ReferenceCreateDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ReferenceCreateDto
     */
    reference: string;
    /**
     * 
     * @type {CreateReferenceUserRelationInputDto}
     * @memberof ReferenceCreateDto
     */
    user?: CreateReferenceUserRelationInputDto;
}

export function ReferenceCreateDtoFromJSON(json: any): ReferenceCreateDto {
    return ReferenceCreateDtoFromJSONTyped(json, false);
}

export function ReferenceCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceCreateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'reference': json['reference'],
        'user': !exists(json, 'user') ? undefined : CreateReferenceUserRelationInputDtoFromJSON(json['user']),
    };
}

export function ReferenceCreateDtoToJSON(value?: ReferenceCreateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'reference': value.reference,
        'user': CreateReferenceUserRelationInputDtoToJSON(value.user),
    };
}

