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
    PublicationCreateDto,
    PublicationCreateDtoFromJSON,
    PublicationCreateDtoToJSON,
    PublicationUpdateDto,
    PublicationUpdateDtoFromJSON,
    PublicationUpdateDtoToJSON,
} from '../models';

export interface CreatePublicationRequest {
    publicationCreateDto: PublicationCreateDto;
}

export interface DeletePublicationRequest {
    id: string;
}

export interface FindOnePublicationRequest {
    id: string;
}

export interface UpdatePublicationRequest {
    id: string;
    publicationUpdateDto: PublicationUpdateDto;
}

/**
 * 
 */
export class PublicationApi extends runtime.BaseAPI {

    /**
     */
    async createPublicationRaw(requestParameters: CreatePublicationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.publicationCreateDto === null || requestParameters.publicationCreateDto === undefined) {
            throw new runtime.RequiredError('publicationCreateDto','Required parameter requestParameters.publicationCreateDto was null or undefined when calling createPublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/publications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PublicationCreateDtoToJSON(requestParameters.publicationCreateDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async createPublication(requestParameters: CreatePublicationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createPublicationRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deletePublicationRaw(requestParameters: DeletePublicationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/publications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deletePublication(requestParameters: DeletePublicationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deletePublicationRaw(requestParameters, initOverrides);
    }

    /**
     */
    async findManyPublicationRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/publications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async findManyPublication(initOverrides?: RequestInit): Promise<void> {
        await this.findManyPublicationRaw(initOverrides);
    }

    /**
     */
    async findOnePublicationRaw(requestParameters: FindOnePublicationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findOnePublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/publications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async findOnePublication(requestParameters: FindOnePublicationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.findOnePublicationRaw(requestParameters, initOverrides);
    }

    /**
     */
    async updatePublicationRaw(requestParameters: UpdatePublicationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updatePublication.');
        }

        if (requestParameters.publicationUpdateDto === null || requestParameters.publicationUpdateDto === undefined) {
            throw new runtime.RequiredError('publicationUpdateDto','Required parameter requestParameters.publicationUpdateDto was null or undefined when calling updatePublication.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/publications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PublicationUpdateDtoToJSON(requestParameters.publicationUpdateDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updatePublication(requestParameters: UpdatePublicationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updatePublicationRaw(requestParameters, initOverrides);
    }

}
