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
 * @interface CreateAwardUserRelationInputDto
 */
export interface CreateAwardUserRelationInputDto {
    /**
     * 
     * @type {ConnectUserDto}
     * @memberof CreateAwardUserRelationInputDto
     */
    connect: ConnectUserDto;
}

export function CreateAwardUserRelationInputDtoFromJSON(json: any): CreateAwardUserRelationInputDto {
    return CreateAwardUserRelationInputDtoFromJSONTyped(json, false);
}

export function CreateAwardUserRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAwardUserRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connect': ConnectUserDtoFromJSON(json['connect']),
    };
}

export function CreateAwardUserRelationInputDtoToJSON(value?: CreateAwardUserRelationInputDto | null): any {
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

