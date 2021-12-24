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
    CreateVolunteerDto,
    CreateVolunteerDtoFromJSON,
    CreateVolunteerDtoFromJSONTyped,
    CreateVolunteerDtoToJSON,
} from './CreateVolunteerDto';

/**
 * 
 * @export
 * @interface CreateUserVolunteerRelationInputDto
 */
export interface CreateUserVolunteerRelationInputDto {
    /**
     * 
     * @type {Array<CreateVolunteerDto>}
     * @memberof CreateUserVolunteerRelationInputDto
     */
    create: Array<CreateVolunteerDto>;
}

export function CreateUserVolunteerRelationInputDtoFromJSON(json: any): CreateUserVolunteerRelationInputDto {
    return CreateUserVolunteerRelationInputDtoFromJSONTyped(json, false);
}

export function CreateUserVolunteerRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserVolunteerRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'create': ((json['create'] as Array<any>).map(CreateVolunteerDtoFromJSON)),
    };
}

export function CreateUserVolunteerRelationInputDtoToJSON(value?: CreateUserVolunteerRelationInputDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'create': ((value.create as Array<any>).map(CreateVolunteerDtoToJSON)),
    };
}

