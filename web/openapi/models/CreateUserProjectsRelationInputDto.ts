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
    CreateProjectDto,
    CreateProjectDtoFromJSON,
    CreateProjectDtoFromJSONTyped,
    CreateProjectDtoToJSON,
} from './CreateProjectDto';

/**
 * 
 * @export
 * @interface CreateUserProjectsRelationInputDto
 */
export interface CreateUserProjectsRelationInputDto {
    /**
     * 
     * @type {Array<CreateProjectDto>}
     * @memberof CreateUserProjectsRelationInputDto
     */
    create: Array<CreateProjectDto>;
}

export function CreateUserProjectsRelationInputDtoFromJSON(json: any): CreateUserProjectsRelationInputDto {
    return CreateUserProjectsRelationInputDtoFromJSONTyped(json, false);
}

export function CreateUserProjectsRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserProjectsRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'create': ((json['create'] as Array<any>).map(CreateProjectDtoFromJSON)),
    };
}

export function CreateUserProjectsRelationInputDtoToJSON(value?: CreateUserProjectsRelationInputDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'create': ((value.create as Array<any>).map(CreateProjectDtoToJSON)),
    };
}

