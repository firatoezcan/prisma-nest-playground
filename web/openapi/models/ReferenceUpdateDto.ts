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
 * @interface ReferenceUpdateDto
 */
export interface ReferenceUpdateDto {
    /**
     * 
     * @type {string}
     * @memberof ReferenceUpdateDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReferenceUpdateDto
     */
    reference?: string;
}

export function ReferenceUpdateDtoFromJSON(json: any): ReferenceUpdateDto {
    return ReferenceUpdateDtoFromJSONTyped(json, false);
}

export function ReferenceUpdateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceUpdateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
    };
}

export function ReferenceUpdateDtoToJSON(value?: ReferenceUpdateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'reference': value.reference,
    };
}

