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
/**
 *
 * @export
 * @interface AirportWeather
 */
export interface AirportWeather {
    /**
     *
     * @type {string}
     * @memberof AirportWeather
     */
    metar?: any;
    /**
     *
     * @type {string}
     * @memberof AirportWeather
     */
    taf?: any;
    /**
     *
     * @type {string}
     * @memberof AirportWeather
     */
    status?: AirportWeatherStatusEnum;
}
/**
    * @export
    * @enum {string}
    */
export declare enum AirportWeatherStatusEnum {
    VFR = "VFR",
    SVFR = "SVFR",
    IFR = "IFR"
}
