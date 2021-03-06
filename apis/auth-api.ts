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
import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
import { Body } from "../models";
import { InlineResponse200 } from "../models";
import { User } from "../models";
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Get Auth data from a given JWT
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authGet: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/auth`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authentication required

      // authentication authorization required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("apiKey")
            : await configuration.apiKey;
        localVarHeaderParameter["apiKey"] = localVarApiKeyValue;
      }

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Do Auth base on IVAO Token
     * @param {Body} body IVAO Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authPost: async (body: Body, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling authPost."
        );
      }
      const localVarPath = `/auth`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorization required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("apiKey")
            : await configuration.apiKey;
        localVarHeaderParameter["apiKey"] = localVarApiKeyValue;
      }

      localVarHeaderParameter["Content-Type"] = "application/json";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Get Auth data from a given JWT
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authGet(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>
    > {
      const localVarAxiosArgs = await AuthApiAxiosParamCreator(
        configuration
      ).authGet(options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Do Auth base on IVAO Token
     * @param {Body} body IVAO Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authPost(
      body: Body,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InlineResponse200>
    > {
      const localVarAxiosArgs = await AuthApiAxiosParamCreator(
        configuration
      ).authPost(body, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Get Auth data from a given JWT
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authGet(options?: any): AxiosPromise<User> {
      return AuthApiFp(configuration)
        .authGet(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Do Auth base on IVAO Token
     * @param {Body} body IVAO Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authPost(body: Body, options?: any): AxiosPromise<InlineResponse200> {
      return AuthApiFp(configuration)
        .authPost(body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
  /**
   *
   * @summary Get Auth data from a given JWT
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public authGet(options?: any) {
    return AuthApiFp(this.configuration)
      .authGet(options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Do Auth base on IVAO Token
   * @param {Body} body IVAO Token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public authPost(body: Body, options?: any) {
    return AuthApiFp(this.configuration)
      .authPost(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
