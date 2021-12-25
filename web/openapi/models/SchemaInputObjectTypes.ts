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
    InputType,
    InputTypeFromJSON,
    InputTypeFromJSONTyped,
    InputTypeToJSON,
} from './InputType';

/**
 * 
 * @export
 * @interface SchemaInputObjectTypes
 */
export interface SchemaInputObjectTypes {
    /**
     * 
     * @type {Array<InputType>}
     * @memberof SchemaInputObjectTypes
     */
    model?: Array<InputType>;
    /**
     * 
     * @type {Array<InputType>}
     * @memberof SchemaInputObjectTypes
     */
    prisma?: Array<InputType>;
}

export function SchemaInputObjectTypesFromJSON(json: any): SchemaInputObjectTypes {
    return SchemaInputObjectTypesFromJSONTyped(json, false);
}

export function SchemaInputObjectTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaInputObjectTypes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': !exists(json, 'model') ? undefined : ((json['model'] as Array<any>).map(InputTypeFromJSON)),
        'prisma': !exists(json, 'prisma') ? undefined : ((json['prisma'] as Array<any>).map(InputTypeFromJSON)),
    };
}

export function SchemaInputObjectTypesToJSON(value?: SchemaInputObjectTypes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': value.model === undefined ? undefined : ((value.model as Array<any>).map(InputTypeToJSON)),
        'prisma': value.prisma === undefined ? undefined : ((value.prisma as Array<any>).map(InputTypeToJSON)),
    };
}

