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
    Datamodel,
    DatamodelFromJSON,
    DatamodelFromJSONTyped,
    DatamodelToJSON,
} from './Datamodel';
import {
    Mappings,
    MappingsFromJSON,
    MappingsFromJSONTyped,
    MappingsToJSON,
} from './Mappings';
import {
    Schema,
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
} from './Schema';

/**
 * 
 * @export
 * @interface DMMF
 */
export interface DMMF {
    /**
     * 
     * @type {Datamodel}
     * @memberof DMMF
     */
    datamodel: Datamodel;
    /**
     * 
     * @type {Schema}
     * @memberof DMMF
     */
    schema: Schema;
    /**
     * 
     * @type {Mappings}
     * @memberof DMMF
     */
    mappings: Mappings;
}

export function DMMFFromJSON(json: any): DMMF {
    return DMMFFromJSONTyped(json, false);
}

export function DMMFFromJSONTyped(json: any, ignoreDiscriminator: boolean): DMMF {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'datamodel': DatamodelFromJSON(json['datamodel']),
        'schema': SchemaFromJSON(json['schema']),
        'mappings': MappingsFromJSON(json['mappings']),
    };
}

export function DMMFToJSON(value?: DMMF | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'datamodel': DatamodelToJSON(value.datamodel),
        'schema': SchemaToJSON(value.schema),
        'mappings': MappingsToJSON(value.mappings),
    };
}
