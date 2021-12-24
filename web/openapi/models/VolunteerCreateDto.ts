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
    CreateVolunteerUserRelationInputDto,
    CreateVolunteerUserRelationInputDtoFromJSON,
    CreateVolunteerUserRelationInputDtoFromJSONTyped,
    CreateVolunteerUserRelationInputDtoToJSON,
} from './CreateVolunteerUserRelationInputDto';

/**
 * 
 * @export
 * @interface VolunteerCreateDto
 */
export interface VolunteerCreateDto {
    /**
     * 
     * @type {string}
     * @memberof VolunteerCreateDto
     */
    organization: string;
    /**
     * 
     * @type {string}
     * @memberof VolunteerCreateDto
     */
    position: string;
    /**
     * 
     * @type {string}
     * @memberof VolunteerCreateDto
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof VolunteerCreateDto
     */
    url: string;
    /**
     * 
     * @type {Date}
     * @memberof VolunteerCreateDto
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof VolunteerCreateDto
     */
    endDate: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof VolunteerCreateDto
     */
    highlights: Array<string>;
    /**
     * 
     * @type {CreateVolunteerUserRelationInputDto}
     * @memberof VolunteerCreateDto
     */
    user?: CreateVolunteerUserRelationInputDto;
}

export function VolunteerCreateDtoFromJSON(json: any): VolunteerCreateDto {
    return VolunteerCreateDtoFromJSONTyped(json, false);
}

export function VolunteerCreateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VolunteerCreateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organization': json['organization'],
        'position': json['position'],
        'summary': json['summary'],
        'url': json['url'],
        'startDate': (new Date(json['startDate'])),
        'endDate': (new Date(json['endDate'])),
        'highlights': json['highlights'],
        'user': !exists(json, 'user') ? undefined : CreateVolunteerUserRelationInputDtoFromJSON(json['user']),
    };
}

export function VolunteerCreateDtoToJSON(value?: VolunteerCreateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organization': value.organization,
        'position': value.position,
        'summary': value.summary,
        'url': value.url,
        'startDate': (value.startDate.toISOString()),
        'endDate': (value.endDate.toISOString()),
        'highlights': value.highlights,
        'user': CreateVolunteerUserRelationInputDtoToJSON(value.user),
    };
}
