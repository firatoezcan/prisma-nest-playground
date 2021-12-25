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
    Deprecation,
    DeprecationFromJSON,
    DeprecationFromJSONTyped,
    DeprecationToJSON,
} from './Deprecation';
import {
    SchemaArgInputType,
    SchemaArgInputTypeFromJSON,
    SchemaArgInputTypeFromJSONTyped,
    SchemaArgInputTypeToJSON,
} from './SchemaArgInputType';

/**
 * 
 * @export
 * @interface SchemaArg
 */
export interface SchemaArg {
    /**
     * 
     * @type {string}
     * @memberof SchemaArg
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaArg
     */
    comment?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaArg
     */
    isNullable: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaArg
     */
    isRequired: boolean;
    /**
     * 
     * @type {Array<SchemaArgInputType>}
     * @memberof SchemaArg
     */
    inputTypes: Array<SchemaArgInputType>;
    /**
     * 
     * @type {Deprecation}
     * @memberof SchemaArg
     */
    deprecation?: Deprecation;
}

export function SchemaArgFromJSON(json: any): SchemaArg {
    return SchemaArgFromJSONTyped(json, false);
}

export function SchemaArgFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaArg {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'isNullable': json['isNullable'],
        'isRequired': json['isRequired'],
        'inputTypes': ((json['inputTypes'] as Array<any>).map(SchemaArgInputTypeFromJSON)),
        'deprecation': !exists(json, 'deprecation') ? undefined : DeprecationFromJSON(json['deprecation']),
    };
}

export function SchemaArgToJSON(value?: SchemaArg | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'comment': value.comment,
        'isNullable': value.isNullable,
        'isRequired': value.isRequired,
        'inputTypes': ((value.inputTypes as Array<any>).map(SchemaArgInputTypeToJSON)),
        'deprecation': DeprecationToJSON(value.deprecation),
    };
}

