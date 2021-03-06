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
/**
 * 
 * @export
 * @interface AirportChartsData
 */
export interface AirportChartsData {
    /**
     * 
     * @type {string}
     * @memberof AirportChartsData
     */
    type?: AirportChartsDataTypeEnum;
    /**
     * Date in format YYYY-MM-DD
     * @type {string}
     * @memberof AirportChartsData
     */
    date?: any;
    /**
     * 
     * @type {string}
     * @memberof AirportChartsData
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof AirportChartsData
     */
    link?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum AirportChartsDataTypeEnum {
    ADC = 'ADC',
    AOC = 'AOC',
    GMC = 'GMC',
    IAC = 'IAC',
    LC = 'LC',
    PATC = 'PATC',
    PDC = 'PDC',
    SID = 'SID',
    STAR = 'STAR',
    VAC = 'VAC'
}

