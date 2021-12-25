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
import {
    OutputType,
    OutputTypeFromJSON,
    OutputTypeFromJSONTyped,
    OutputTypeToJSON,
} from './OutputType';

/**
 * 
 * @export
 * @interface SchemaArgInputType
 */
export interface SchemaArgInputType {
    /**
     * 
     * @type {boolean}
     * @memberof SchemaArgInputType
     */
    isList: boolean;
    /**
     * 
     * @type {string | InputType | OutputType}
     * @memberof SchemaArgInputType
     */
    type: string | InputType | OutputType | null;
    /**
     * 
     * @type {string}
     * @memberof SchemaArgInputType
     */
    location: SchemaArgInputTypeLocationEnum;
    /**
     * 
     * @type {string}
     * @memberof SchemaArgInputType
     */
    namespace: SchemaArgInputTypeNamespaceEnum;
}

/**
* @export
* @enum {string}
*/
export enum SchemaArgInputTypeLocationEnum {
    Scalar = 'scalar',
    InputObjectTypes = 'inputObjectTypes',
    OutputObjectTypes = 'outputObjectTypes',
    EnumTypes = 'enumTypes'
}/**
* @export
* @enum {string}
*/
export enum SchemaArgInputTypeNamespaceEnum {
    Model = 'model',
    Prisma = 'prisma'
}

export function SchemaArgInputTypeFromJSON(json: any): SchemaArgInputType {
    return SchemaArgInputTypeFromJSONTyped(json, false);
}

export function SchemaArgInputTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaArgInputType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isList': json['isList'],
        'type': string | InputType | OutputTypeFromJSON(json['type']),
        'location': json['location'],
        'namespace': json['namespace'],
    };
}

export function SchemaArgInputTypeToJSON(value?: SchemaArgInputType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isList': value.isList,
        'type': string | InputType | OutputTypeToJSON(value.type),
        'location': value.location,
        'namespace': value.namespace,
    };
}
