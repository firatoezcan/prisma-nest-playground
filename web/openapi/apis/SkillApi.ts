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
    SkillCreateDto,
    SkillCreateDtoFromJSON,
    SkillCreateDtoToJSON,
    SkillEntity,
    SkillEntityFromJSON,
    SkillEntityToJSON,
    SkillUpdateDto,
    SkillUpdateDtoFromJSON,
    SkillUpdateDtoToJSON,
} from '../models';

export interface CreateSkillRequest {
    skillCreateDto: SkillCreateDto;
}

export interface DeleteSkillRequest {
    id: string;
}

export interface FindOneSkillRequest {
    id: string;
}

export interface UpdateSkillRequest {
    id: string;
    skillUpdateDto: SkillUpdateDto;
}

/**
 * 
 */
export class SkillApi extends runtime.BaseAPI {

    /**
     */
    async createSkillRaw(requestParameters: CreateSkillRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SkillEntity>> {
        if (requestParameters.skillCreateDto === null || requestParameters.skillCreateDto === undefined) {
            throw new runtime.RequiredError('skillCreateDto','Required parameter requestParameters.skillCreateDto was null or undefined when calling createSkill.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/skills`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SkillCreateDtoToJSON(requestParameters.skillCreateDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SkillEntityFromJSON(jsonValue));
    }

    /**
     */
    async createSkill(requestParameters: CreateSkillRequest, initOverrides?: RequestInit): Promise<SkillEntity> {
        const response = await this.createSkillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteSkillRaw(requestParameters: DeleteSkillRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SkillEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteSkill.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/skills/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SkillEntityFromJSON(jsonValue));
    }

    /**
     */
    async deleteSkill(requestParameters: DeleteSkillRequest, initOverrides?: RequestInit): Promise<SkillEntity> {
        const response = await this.deleteSkillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findManySkillRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SkillEntity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/skills`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SkillEntityFromJSON));
    }

    /**
     */
    async findManySkill(initOverrides?: RequestInit): Promise<Array<SkillEntity>> {
        const response = await this.findManySkillRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async findOneSkillRaw(requestParameters: FindOneSkillRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SkillEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findOneSkill.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/skills/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SkillEntityFromJSON(jsonValue));
    }

    /**
     */
    async findOneSkill(requestParameters: FindOneSkillRequest, initOverrides?: RequestInit): Promise<SkillEntity> {
        const response = await this.findOneSkillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateSkillRaw(requestParameters: UpdateSkillRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SkillEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateSkill.');
        }

        if (requestParameters.skillUpdateDto === null || requestParameters.skillUpdateDto === undefined) {
            throw new runtime.RequiredError('skillUpdateDto','Required parameter requestParameters.skillUpdateDto was null or undefined when calling updateSkill.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/skills/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SkillUpdateDtoToJSON(requestParameters.skillUpdateDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SkillEntityFromJSON(jsonValue));
    }

    /**
     */
    async updateSkill(requestParameters: UpdateSkillRequest, initOverrides?: RequestInit): Promise<SkillEntity> {
        const response = await this.updateSkillRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
