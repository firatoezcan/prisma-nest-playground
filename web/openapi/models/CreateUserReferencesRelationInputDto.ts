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
    CreateReferenceDto,
    CreateReferenceDtoFromJSON,
    CreateReferenceDtoFromJSONTyped,
    CreateReferenceDtoToJSON,
} from './CreateReferenceDto';

/**
 * 
 * @export
 * @interface CreateUserReferencesRelationInputDto
 */
export interface CreateUserReferencesRelationInputDto {
    /**
     * 
     * @type {Array<CreateReferenceDto>}
     * @memberof CreateUserReferencesRelationInputDto
     */
    create: Array<CreateReferenceDto>;
}

export function CreateUserReferencesRelationInputDtoFromJSON(json: any): CreateUserReferencesRelationInputDto {
    return CreateUserReferencesRelationInputDtoFromJSONTyped(json, false);
}

export function CreateUserReferencesRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserReferencesRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'create': ((json['create'] as Array<any>).map(CreateReferenceDtoFromJSON)),
    };
}

export function CreateUserReferencesRelationInputDtoToJSON(value?: CreateUserReferencesRelationInputDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'create': ((value.create as Array<any>).map(CreateReferenceDtoToJSON)),
    };
}
