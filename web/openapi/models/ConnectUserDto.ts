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
/**
 * 
 * @export
 * @interface ConnectUserDto
 */
export interface ConnectUserDto {
    /**
     * 
     * @type {number}
     * @memberof ConnectUserDto
     */
    id: number;
}

export function ConnectUserDtoFromJSON(json: any): ConnectUserDto {
    return ConnectUserDtoFromJSONTyped(json, false);
}

export function ConnectUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectUserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function ConnectUserDtoToJSON(value?: ConnectUserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}
