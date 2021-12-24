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
    InterestsCreateDto,
    InterestsCreateDtoFromJSON,
    InterestsCreateDtoToJSON,
    InterestsUpdateDto,
    InterestsUpdateDtoFromJSON,
    InterestsUpdateDtoToJSON,
} from '../models';

export interface InterestsEntityControllerCreateRequest {
    interestsCreateDto: InterestsCreateDto;
}

export interface InterestsEntityControllerDeleteRequest {
    id: string;
}

export interface InterestsEntityControllerFindOneRequest {
    id: string;
}

export interface InterestsEntityControllerUpdateRequest {
    id: string;
    interestsUpdateDto: InterestsUpdateDto;
}

/**
 * 
 */
export class InterestsApi extends runtime.BaseAPI {

    /**
     */
    async interestsEntityControllerCreateRaw(requestParameters: InterestsEntityControllerCreateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.interestsCreateDto === null || requestParameters.interestsCreateDto === undefined) {
            throw new runtime.RequiredError('interestsCreateDto','Required parameter requestParameters.interestsCreateDto was null or undefined when calling interestsEntityControllerCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/interests`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InterestsCreateDtoToJSON(requestParameters.interestsCreateDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async interestsEntityControllerCreate(requestParameters: InterestsEntityControllerCreateRequest, initOverrides?: RequestInit): Promise<void> {
        await this.interestsEntityControllerCreateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async interestsEntityControllerDeleteRaw(requestParameters: InterestsEntityControllerDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling interestsEntityControllerDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/interests/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async interestsEntityControllerDelete(requestParameters: InterestsEntityControllerDeleteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.interestsEntityControllerDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async interestsEntityControllerFindManyRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/interests`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async interestsEntityControllerFindMany(initOverrides?: RequestInit): Promise<void> {
        await this.interestsEntityControllerFindManyRaw(initOverrides);
    }

    /**
     */
    async interestsEntityControllerFindOneRaw(requestParameters: InterestsEntityControllerFindOneRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling interestsEntityControllerFindOne.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/interests/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async interestsEntityControllerFindOne(requestParameters: InterestsEntityControllerFindOneRequest, initOverrides?: RequestInit): Promise<void> {
        await this.interestsEntityControllerFindOneRaw(requestParameters, initOverrides);
    }

    /**
     */
    async interestsEntityControllerUpdateRaw(requestParameters: InterestsEntityControllerUpdateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling interestsEntityControllerUpdate.');
        }

        if (requestParameters.interestsUpdateDto === null || requestParameters.interestsUpdateDto === undefined) {
            throw new runtime.RequiredError('interestsUpdateDto','Required parameter requestParameters.interestsUpdateDto was null or undefined when calling interestsEntityControllerUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/interests/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: InterestsUpdateDtoToJSON(requestParameters.interestsUpdateDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async interestsEntityControllerUpdate(requestParameters: InterestsEntityControllerUpdateRequest, initOverrides?: RequestInit): Promise<void> {
        await this.interestsEntityControllerUpdateRaw(requestParameters, initOverrides);
    }

}
