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
 * @interface SchemaEnum
 */
export interface SchemaEnum {
    /**
     * 
     * @type {string}
     * @memberof SchemaEnum
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SchemaEnum
     */
    values: Array<string>;
}

export function SchemaEnumFromJSON(json: any): SchemaEnum {
    return SchemaEnumFromJSONTyped(json, false);
}

export function SchemaEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaEnum {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'values': json['values'],
    };
}

export function SchemaEnumToJSON(value?: SchemaEnum | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'values': value.values,
    };
}

