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
 * @interface CreateInterestUserRelationInputDto
 */
export interface CreateInterestUserRelationInputDto {
    /**
     * 
     * @type {ConnectUserDto}
     * @memberof CreateInterestUserRelationInputDto
     */
    connect: ConnectUserDto;
}

export function CreateInterestUserRelationInputDtoFromJSON(json: any): CreateInterestUserRelationInputDto {
    return CreateInterestUserRelationInputDtoFromJSONTyped(json, false);
}

export function CreateInterestUserRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInterestUserRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connect': ConnectUserDtoFromJSON(json['connect']),
    };
}

export function CreateInterestUserRelationInputDtoToJSON(value?: CreateInterestUserRelationInputDto | null): any {
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
