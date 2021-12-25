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
 * @interface MappingsOtherOperations
 */
export interface MappingsOtherOperations {
    /**
     * 
     * @type {Array<string>}
     * @memberof MappingsOtherOperations
     */
    read?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MappingsOtherOperations
     */
    write?: Array<string>;
}

export function MappingsOtherOperationsFromJSON(json: any): MappingsOtherOperations {
    return MappingsOtherOperationsFromJSONTyped(json, false);
}

export function MappingsOtherOperationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappingsOtherOperations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'read': !exists(json, 'read') ? undefined : json['read'],
        'write': !exists(json, 'write') ? undefined : json['write'],
    };
}

export function MappingsOtherOperationsToJSON(value?: MappingsOtherOperations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'read': value.read,
        'write': value.write,
    };
}

