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
    CreateSkillKeywordDto,
    CreateSkillKeywordDtoFromJSON,
    CreateSkillKeywordDtoFromJSONTyped,
    CreateSkillKeywordDtoToJSON,
} from './CreateSkillKeywordDto';

/**
 * 
 * @export
 * @interface CreateSkillKeywordsRelationInputDto
 */
export interface CreateSkillKeywordsRelationInputDto {
    /**
     * 
     * @type {Array<CreateSkillKeywordDto>}
     * @memberof CreateSkillKeywordsRelationInputDto
     */
    create: Array<CreateSkillKeywordDto>;
}

export function CreateSkillKeywordsRelationInputDtoFromJSON(json: any): CreateSkillKeywordsRelationInputDto {
    return CreateSkillKeywordsRelationInputDtoFromJSONTyped(json, false);
}

export function CreateSkillKeywordsRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSkillKeywordsRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'create': ((json['create'] as Array<any>).map(CreateSkillKeywordDtoFromJSON)),
    };
}

export function CreateSkillKeywordsRelationInputDtoToJSON(value?: CreateSkillKeywordsRelationInputDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'create': ((value.create as Array<any>).map(CreateSkillKeywordDtoToJSON)),
    };
}

