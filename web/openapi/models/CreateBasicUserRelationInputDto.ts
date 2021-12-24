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
 * @interface CreateBasicUserRelationInputDto
 */
export interface CreateBasicUserRelationInputDto {
    /**
     * 
     * @type {ConnectUserDto}
     * @memberof CreateBasicUserRelationInputDto
     */
    connect: ConnectUserDto;
}

export function CreateBasicUserRelationInputDtoFromJSON(json: any): CreateBasicUserRelationInputDto {
    return CreateBasicUserRelationInputDtoFromJSONTyped(json, false);
}

export function CreateBasicUserRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBasicUserRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connect': ConnectUserDtoFromJSON(json['connect']),
    };
}

export function CreateBasicUserRelationInputDtoToJSON(value?: CreateBasicUserRelationInputDto | null): any {
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
