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
    ConnectUserDto,
    ConnectUserDtoFromJSON,
    ConnectUserDtoFromJSONTyped,
    ConnectUserDtoToJSON,
} from './ConnectUserDto';

/**
 * 
 * @export
 * @interface CreateLanguageUserRelationInputDto
 */
export interface CreateLanguageUserRelationInputDto {
    /**
     * 
     * @type {ConnectUserDto}
     * @memberof CreateLanguageUserRelationInputDto
     */
    connect: ConnectUserDto;
}

export function CreateLanguageUserRelationInputDtoFromJSON(json: any): CreateLanguageUserRelationInputDto {
    return CreateLanguageUserRelationInputDtoFromJSONTyped(json, false);
}

export function CreateLanguageUserRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLanguageUserRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connect': ConnectUserDtoFromJSON(json['connect']),
    };
}

export function CreateLanguageUserRelationInputDtoToJSON(value?: CreateLanguageUserRelationInputDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connect': ConnectUserDtoToJSON(value.connect),
    };
}
