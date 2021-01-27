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
import { Airport } from '../models';
import { AirportStatus } from '../models';
import { InlineResponse500 } from '../models';
import { PreferentialRouteResponse } from '../models';
/**
 * AirportsApi - axios parameter creator
 * @export
 */
export const AirportsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get data from a given airport
         * @param {string} icao 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        airportsIcaoGet: async (icao: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'icao' is not null or undefined
            if (icao === null || icao === undefined) {
                throw new RequiredError('icao','Required parameter icao was null or undefined when calling airportsIcaoGet.');
            }
            const localVarPath = `/airports/{icao}`
                .replace(`{${"icao"}}`, encodeURIComponent(String(icao)));
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
        /**
         * 
         * @summary Get preferential routes for a given airport
         * @param {string} icao 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        airportsRoutesIcaoGet: async (icao: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'icao' is not null or undefined
            if (icao === null || icao === undefined) {
                throw new RequiredError('icao','Required parameter icao was null or undefined when calling airportsRoutesIcaoGet.');
            }
            const localVarPath = `/airports/routes/{icao}`
                .replace(`{${"icao"}}`, encodeURIComponent(String(icao)));
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
        /**
         * 
         * @summary Fetch a list of airports with weather status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        airportsStatusGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/airports/status`;
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
 * AirportsApi - functional programming interface
 * @export
 */
export const AirportsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get data from a given airport
         * @param {string} icao 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async airportsIcaoGet(icao: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Airport>> {
            const localVarAxiosArgs = await AirportsApiAxiosParamCreator(configuration).airportsIcaoGet(icao, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get preferential routes for a given airport
         * @param {string} icao 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async airportsRoutesIcaoGet(icao: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreferentialRouteResponse>> {
            const localVarAxiosArgs = await AirportsApiAxiosParamCreator(configuration).airportsRoutesIcaoGet(icao, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Fetch a list of airports with weather status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async airportsStatusGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AirportStatus>>> {
            const localVarAxiosArgs = await AirportsApiAxiosParamCreator(configuration).airportsStatusGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AirportsApi - factory interface
 * @export
 */
export const AirportsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get data from a given airport
         * @param {string} icao 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        airportsIcaoGet(icao: string, options?: any): AxiosPromise<Airport> {
            return AirportsApiFp(configuration).airportsIcaoGet(icao, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get preferential routes for a given airport
         * @param {string} icao 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        airportsRoutesIcaoGet(icao: string, options?: any): AxiosPromise<PreferentialRouteResponse> {
            return AirportsApiFp(configuration).airportsRoutesIcaoGet(icao, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Fetch a list of airports with weather status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        airportsStatusGet(options?: any): AxiosPromise<Array<AirportStatus>> {
            return AirportsApiFp(configuration).airportsStatusGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AirportsApi - object-oriented interface
 * @export
 * @class AirportsApi
 * @extends {BaseAPI}
 */
export class AirportsApi extends BaseAPI {
    /**
     * 
     * @summary Get data from a given airport
     * @param {string} icao 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AirportsApi
     */
    public airportsIcaoGet(icao: string, options?: any) {
        return AirportsApiFp(this.configuration).airportsIcaoGet(icao, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get preferential routes for a given airport
     * @param {string} icao 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AirportsApi
     */
    public airportsRoutesIcaoGet(icao: string, options?: any) {
        return AirportsApiFp(this.configuration).airportsRoutesIcaoGet(icao, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Fetch a list of airports with weather status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AirportsApi
     */
    public airportsStatusGet(options?: any) {
        return AirportsApiFp(this.configuration).airportsStatusGet(options).then((request) => request(this.axios, this.basePath));
    }
}