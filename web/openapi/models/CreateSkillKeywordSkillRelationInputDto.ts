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
    CreateSkillDto,
    CreateSkillDtoFromJSON,
    CreateSkillDtoFromJSONTyped,
    CreateSkillDtoToJSON,
} from './CreateSkillDto';

/**
 * 
 * @export
 * @interface CreateSkillKeywordSkillRelationInputDto
 */
export interface CreateSkillKeywordSkillRelationInputDto {
    /**
     * 
     * @type {CreateSkillDto}
     * @memberof CreateSkillKeywordSkillRelationInputDto
     */
    create: CreateSkillDto;
}

export function CreateSkillKeywordSkillRelationInputDtoFromJSON(json: any): CreateSkillKeywordSkillRelationInputDto {
    return CreateSkillKeywordSkillRelationInputDtoFromJSONTyped(json, false);
}

export function CreateSkillKeywordSkillRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSkillKeywordSkillRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'create': CreateSkillDtoFromJSON(json['create']),
    };
}

export function CreateSkillKeywordSkillRelationInputDtoToJSON(value?: CreateSkillKeywordSkillRelationInputDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'create': CreateSkillDtoToJSON(value.create),
    };
}

