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
 * @interface EnumValue
 */
export interface EnumValue {
    /**
     * 
     * @type {string}
     * @memberof EnumValue
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EnumValue
     */
    dbName: string | null;
}

export function EnumValueFromJSON(json: any): EnumValue {
    return EnumValueFromJSONTyped(json, false);
}

export function EnumValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'dbName': json['dbName'],
    };
}

export function EnumValueToJSON(value?: EnumValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'dbName': value.dbName,
    };
}

