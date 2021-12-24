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
    CreateProfileDto,
    CreateProfileDtoFromJSON,
    CreateProfileDtoFromJSONTyped,
    CreateProfileDtoToJSON,
} from './CreateProfileDto';

/**
 * 
 * @export
 * @interface CreateUserProfilesRelationInputDto
 */
export interface CreateUserProfilesRelationInputDto {
    /**
     * 
     * @type {Array<CreateProfileDto>}
     * @memberof CreateUserProfilesRelationInputDto
     */
    create: Array<CreateProfileDto>;
}

export function CreateUserProfilesRelationInputDtoFromJSON(json: any): CreateUserProfilesRelationInputDto {
    return CreateUserProfilesRelationInputDtoFromJSONTyped(json, false);
}

export function CreateUserProfilesRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserProfilesRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'create': ((json['create'] as Array<any>).map(CreateProfileDtoFromJSON)),
    };
}

export function CreateUserProfilesRelationInputDtoToJSON(value?: CreateUserProfilesRelationInputDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'create': ((value.create as Array<any>).map(CreateProfileDtoToJSON)),
    };
}
