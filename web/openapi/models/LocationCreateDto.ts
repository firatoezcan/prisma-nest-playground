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
    CreateLocationUserRelationInputDto,
    CreateLocationUserRelationInputDtoFromJSON,
    CreateLocationUserRelationInputDtoFromJSONTyped,
    CreateLocationUserRelationInputDtoToJSON,
} from './CreateLocationUserRelationInputDto';

/**
 * 
 * @export
 * @interface LocationCreateDto
 */
export interface LocationCreateDto {
    /**
     * 
     * @type {string}
     * @memberof LocationCreateDto
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCreateDto
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCreateDto
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCreateDto
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCreateDto
     */
    region: string;
    /**
     * 
     * @type {CreateLocationUserRelationInputDto}
     * @memberof LocationCreateDto
     */
    user?: CreateLocationUserRelationInputDto;
}

export function LocationCreateDtoFromJSON(json: any): LocationCreateDto {
    return LocationCreateDtoFromJSONTyped(json, false);
}

export function LocationCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationCreateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'postalCode': json['postalCode'],
        'city': json['city'],
        'countryCode': json['countryCode'],
        'region': json['region'],
        'user': !exists(json, 'user') ? undefined : CreateLocationUserRelationInputDtoFromJSON(json['user']),
    };
}

export function LocationCreateDtoToJSON(value?: LocationCreateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'postalCode': value.postalCode,
        'city': value.city,
        'countryCode': value.countryCode,
        'region': value.region,
        'user': CreateLocationUserRelationInputDtoToJSON(value.user),
    };
}

