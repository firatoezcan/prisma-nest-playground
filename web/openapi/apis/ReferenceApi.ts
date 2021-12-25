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


import * as runtime from '../runtime';
import {
    ReferenceCreateDto,
    ReferenceCreateDtoFromJSON,
    ReferenceCreateDtoToJSON,
    ReferenceEntity,
    ReferenceEntityFromJSON,
    ReferenceEntityToJSON,
    ReferenceUpdateDto,
    ReferenceUpdateDtoFromJSON,
    ReferenceUpdateDtoToJSON,
} from '../models';

export interface CreateReferenceRequest {
    referenceCreateDto: ReferenceCreateDto;
}

export interface DeleteReferenceRequest {
    id: string;
}

export interface FindOneReferenceRequest {
    id: string;
}

export interface UpdateReferenceRequest {
    id: string;
    referenceUpdateDto: ReferenceUpdateDto;
}

/**
 * 
 */
export class ReferenceApi extends runtime.BaseAPI {

    /**
     */
    async createReferenceRaw(requestParameters: CreateReferenceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReferenceEntity>> {
        if (requestParameters.referenceCreateDto === null || requestParameters.referenceCreateDto === undefined) {
            throw new runtime.RequiredError('referenceCreateDto','Required parameter requestParameters.referenceCreateDto was null or undefined when calling createReference.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/references`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReferenceCreateDtoToJSON(requestParameters.referenceCreateDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceEntityFromJSON(jsonValue));
    }

    /**
     */
    async createReference(requestParameters: CreateReferenceRequest, initOverrides?: RequestInit): Promise<ReferenceEntity> {
        const response = await this.createReferenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteReferenceRaw(requestParameters: DeleteReferenceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReferenceEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteReference.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/references/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceEntityFromJSON(jsonValue));
    }

    /**
     */
    async deleteReference(requestParameters: DeleteReferenceRequest, initOverrides?: RequestInit): Promise<ReferenceEntity> {
        const response = await this.deleteReferenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findManyReferenceRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ReferenceEntity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/references`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ReferenceEntityFromJSON));
    }

    /**
     */
    async findManyReference(initOverrides?: RequestInit): Promise<Array<ReferenceEntity>> {
        const response = await this.findManyReferenceRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async findOneReferenceRaw(requestParameters: FindOneReferenceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReferenceEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findOneReference.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/references/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceEntityFromJSON(jsonValue));
    }

    /**
     */
    async findOneReference(requestParameters: FindOneReferenceRequest, initOverrides?: RequestInit): Promise<ReferenceEntity> {
        const response = await this.findOneReferenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateReferenceRaw(requestParameters: UpdateReferenceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReferenceEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateReference.');
        }

        if (requestParameters.referenceUpdateDto === null || requestParameters.referenceUpdateDto === undefined) {
            throw new runtime.RequiredError('referenceUpdateDto','Required parameter requestParameters.referenceUpdateDto was null or undefined when calling updateReference.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/references/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ReferenceUpdateDtoToJSON(requestParameters.referenceUpdateDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceEntityFromJSON(jsonValue));
    }

    /**
     */
    async updateReference(requestParameters: UpdateReferenceRequest, initOverrides?: RequestInit): Promise<ReferenceEntity> {
        const response = await this.updateReferenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
