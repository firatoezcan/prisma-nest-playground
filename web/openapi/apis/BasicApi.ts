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
    BasicCreateDto,
    BasicCreateDtoFromJSON,
    BasicCreateDtoToJSON,
    BasicEntity,
    BasicEntityFromJSON,
    BasicEntityToJSON,
    BasicUpdateDto,
    BasicUpdateDtoFromJSON,
    BasicUpdateDtoToJSON,
} from '../models';

export interface CreateBasicRequest {
    basicCreateDto: BasicCreateDto;
}

export interface DeleteBasicRequest {
    id: string;
}

export interface FindOneBasicRequest {
    id: string;
}

export interface UpdateBasicRequest {
    id: string;
    basicUpdateDto: BasicUpdateDto;
}

/**
 * 
 */
export class BasicApi extends runtime.BaseAPI {

    /**
     */
    async createBasicRaw(requestParameters: CreateBasicRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BasicEntity>> {
        if (requestParameters.basicCreateDto === null || requestParameters.basicCreateDto === undefined) {
            throw new runtime.RequiredError('basicCreateDto','Required parameter requestParameters.basicCreateDto was null or undefined when calling createBasic.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/basics`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BasicCreateDtoToJSON(requestParameters.basicCreateDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicEntityFromJSON(jsonValue));
    }

    /**
     */
    async createBasic(requestParameters: CreateBasicRequest, initOverrides?: RequestInit): Promise<BasicEntity> {
        const response = await this.createBasicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteBasicRaw(requestParameters: DeleteBasicRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BasicEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteBasic.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/basics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicEntityFromJSON(jsonValue));
    }

    /**
     */
    async deleteBasic(requestParameters: DeleteBasicRequest, initOverrides?: RequestInit): Promise<BasicEntity> {
        const response = await this.deleteBasicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findManyBasicRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<BasicEntity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/basics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BasicEntityFromJSON));
    }

    /**
     */
    async findManyBasic(initOverrides?: RequestInit): Promise<Array<BasicEntity>> {
        const response = await this.findManyBasicRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async findOneBasicRaw(requestParameters: FindOneBasicRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BasicEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findOneBasic.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/basics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicEntityFromJSON(jsonValue));
    }

    /**
     */
    async findOneBasic(requestParameters: FindOneBasicRequest, initOverrides?: RequestInit): Promise<BasicEntity> {
        const response = await this.findOneBasicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateBasicRaw(requestParameters: UpdateBasicRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BasicEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateBasic.');
        }

        if (requestParameters.basicUpdateDto === null || requestParameters.basicUpdateDto === undefined) {
            throw new runtime.RequiredError('basicUpdateDto','Required parameter requestParameters.basicUpdateDto was null or undefined when calling updateBasic.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/basics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BasicUpdateDtoToJSON(requestParameters.basicUpdateDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicEntityFromJSON(jsonValue));
    }

    /**
     */
    async updateBasic(requestParameters: UpdateBasicRequest, initOverrides?: RequestInit): Promise<BasicEntity> {
        const response = await this.updateBasicRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
