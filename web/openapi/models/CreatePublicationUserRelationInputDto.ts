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
 * @interface CreatePublicationUserRelationInputDto
 */
export interface CreatePublicationUserRelationInputDto {
    /**
     * 
     * @type {ConnectUserDto}
     * @memberof CreatePublicationUserRelationInputDto
     */
    connect: ConnectUserDto;
}

export function CreatePublicationUserRelationInputDtoFromJSON(json: any): CreatePublicationUserRelationInputDto {
    return CreatePublicationUserRelationInputDtoFromJSONTyped(json, false);
}

export function CreatePublicationUserRelationInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePublicationUserRelationInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connect': ConnectUserDtoFromJSON(json['connect']),
    };
}

export function CreatePublicationUserRelationInputDtoToJSON(value?: CreatePublicationUserRelationInputDto | null): any {
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

