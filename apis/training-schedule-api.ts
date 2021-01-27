/* tslint:disable */
/* eslint-disable */
/**
 * IVAO Brasil
 * API pública da IVAO Brasil
 *
 * OpenAPI spec version: 1.0.0
 * Contact: br-web@ivao.aero
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ErrorResponse } from '../models';
import { PaginatedTrainingSessions } from '../models';
import { TrainingSession } from '../models';
/**
 * TrainingScheduleApi - axios parameter creator
 * @export
 */
export const TrainingScheduleApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns a paginated list of Training Sessions
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [occurrenceDateBefore] 
         * @param {string} [occurrenceDateAfter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trainingScheduleSessionsGet: async (offset?: number, limit?: number, occurrenceDateBefore?: string, occurrenceDateAfter?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/training-schedule/sessions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (occurrenceDateBefore !== undefined) {
                localVarQueryParameter['occurrenceDateBefore'] = (occurrenceDateBefore as any instanceof Date) ?
                    (occurrenceDateBefore as any).toISOString().substr(0,10) :
                    occurrenceDateBefore;
            }

            if (occurrenceDateAfter !== undefined) {
                localVarQueryParameter['occurrenceDateAfter'] = (occurrenceDateAfter as any instanceof Date) ?
                    (occurrenceDateAfter as any).toISOString().substr(0,10) :
                    occurrenceDateAfter;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a Training Session by ID.
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trainingScheduleSessionsIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling trainingScheduleSessionsIdGet.');
            }
            const localVarPath = `/training-schedule/sessions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TrainingScheduleApi - functional programming interface
 * @export
 */
export const TrainingScheduleApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns a paginated list of Training Sessions
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [occurrenceDateBefore] 
         * @param {string} [occurrenceDateAfter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trainingScheduleSessionsGet(offset?: number, limit?: number, occurrenceDateBefore?: string, occurrenceDateAfter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedTrainingSessions>> {
            const localVarAxiosArgs = await TrainingScheduleApiAxiosParamCreator(configuration).trainingScheduleSessionsGet(offset, limit, occurrenceDateBefore, occurrenceDateAfter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get a Training Session by ID.
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trainingScheduleSessionsIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrainingSession>> {
            const localVarAxiosArgs = await TrainingScheduleApiAxiosParamCreator(configuration).trainingScheduleSessionsIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TrainingScheduleApi - factory interface
 * @export
 */
export const TrainingScheduleApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Returns a paginated list of Training Sessions
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [occurrenceDateBefore] 
         * @param {string} [occurrenceDateAfter] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trainingScheduleSessionsGet(offset?: number, limit?: number, occurrenceDateBefore?: string, occurrenceDateAfter?: string, options?: any): AxiosPromise<PaginatedTrainingSessions> {
            return TrainingScheduleApiFp(configuration).trainingScheduleSessionsGet(offset, limit, occurrenceDateBefore, occurrenceDateAfter, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a Training Session by ID.
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trainingScheduleSessionsIdGet(id: number, options?: any): AxiosPromise<TrainingSession> {
            return TrainingScheduleApiFp(configuration).trainingScheduleSessionsIdGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TrainingScheduleApi - object-oriented interface
 * @export
 * @class TrainingScheduleApi
 * @extends {BaseAPI}
 */
export class TrainingScheduleApi extends BaseAPI {
    /**
     * 
     * @summary Returns a paginated list of Training Sessions
     * @param {number} [offset] 
     * @param {number} [limit] 
     * @param {string} [occurrenceDateBefore] 
     * @param {string} [occurrenceDateAfter] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrainingScheduleApi
     */
    public trainingScheduleSessionsGet(offset?: number, limit?: number, occurrenceDateBefore?: string, occurrenceDateAfter?: string, options?: any) {
        return TrainingScheduleApiFp(this.configuration).trainingScheduleSessionsGet(offset, limit, occurrenceDateBefore, occurrenceDateAfter, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get a Training Session by ID.
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrainingScheduleApi
     */
    public trainingScheduleSessionsIdGet(id: number, options?: any) {
        return TrainingScheduleApiFp(this.configuration).trainingScheduleSessionsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}
