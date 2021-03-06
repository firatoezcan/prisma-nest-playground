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
 * @interface DMMFDto
 */
export interface DMMFDto {
    /**
     * 
     * @type {Datamodel}
     * @memberof DMMFDto
     */
    datamodel: Datamodel;
    /**
     * 
     * @type {Schema}
     * @memberof DMMFDto
     */
    schema: Schema;
    /**
     * 
     * @type {Mappings}
     * @memberof DMMFDto
     */
    mappings: Mappings;
}

export function DMMFDtoFromJSON(json: any): DMMFDto {
    return DMMFDtoFromJSONTyped(json, false);
}

export function DMMFDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DMMFDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'datamodel': DatamodelFromJSON(json['datamodel']),
        'schema': SchemaFromJSON(json['schema']),
        'mappings': MappingsFromJSON(json['mappings']),
    };
}

export function DMMFDtoToJSON(value?: DMMFDto | null): any {
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

