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
 * @interface AirportCharts
 */
export interface AirportCharts {
    /**
     *
     * @type {number}
     * @memberof AirportCharts
     */
    items?: any;
    /**
     * Date in format YYYY-MM-DD
     * @type {string}
     * @memberof AirportCharts
     */
    date?: any;
    /**
     *
     * @type {Array&lt;AirportChartsData&gt;}
     * @memberof AirportCharts
     */
    data?: any;
    /**
     *
     * @type {AirportChartsInfo}
     * @memberof AirportCharts
     */
    info?: any;
    /**
     *
     * @type {AirportChartsIvaoData}
     * @memberof AirportCharts
     */
    ivaoData?: any;
}
