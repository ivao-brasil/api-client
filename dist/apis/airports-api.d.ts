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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Airport } from '../models';
import { AirportStatus } from '../models';
import { PreferentialRouteResponse } from '../models';
/**
 * AirportsApi - axios parameter creator
 * @export
 */
export declare const AirportsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get data from a given airport
     * @param {string} icao
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsIcaoGet: (icao: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Get preferential routes for a given airport
     * @param {string} icao
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsRoutesIcaoGet: (icao: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @summary Fetch a list of airports with weather status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsStatusGet: (options?: any) => Promise<RequestArgs>;
};
/**
 * AirportsApi - functional programming interface
 * @export
 */
export declare const AirportsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get data from a given airport
     * @param {string} icao
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsIcaoGet(icao: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Airport>>;
    /**
     *
     * @summary Get preferential routes for a given airport
     * @param {string} icao
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsRoutesIcaoGet(icao: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PreferentialRouteResponse>>;
    /**
     *
     * @summary Fetch a list of airports with weather status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsStatusGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AirportStatus>>>;
};
/**
 * AirportsApi - factory interface
 * @export
 */
export declare const AirportsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get data from a given airport
     * @param {string} icao
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsIcaoGet(icao: string, options?: any): AxiosPromise<Airport>;
    /**
     *
     * @summary Get preferential routes for a given airport
     * @param {string} icao
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsRoutesIcaoGet(icao: string, options?: any): AxiosPromise<PreferentialRouteResponse>;
    /**
     *
     * @summary Fetch a list of airports with weather status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    airportsStatusGet(options?: any): AxiosPromise<Array<AirportStatus>>;
};
/**
 * AirportsApi - object-oriented interface
 * @export
 * @class AirportsApi
 * @extends {BaseAPI}
 */
export declare class AirportsApi extends BaseAPI {
    /**
     *
     * @summary Get data from a given airport
     * @param {string} icao
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AirportsApi
     */
    airportsIcaoGet(icao: string, options?: any): Promise<import("axios").AxiosResponse<Airport>>;
    /**
     *
     * @summary Get preferential routes for a given airport
     * @param {string} icao
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AirportsApi
     */
    airportsRoutesIcaoGet(icao: string, options?: any): Promise<import("axios").AxiosResponse<PreferentialRouteResponse>>;
    /**
     *
     * @summary Fetch a list of airports with weather status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AirportsApi
     */
    airportsStatusGet(options?: any): Promise<import("axios").AxiosResponse<AirportStatus[]>>;
}
