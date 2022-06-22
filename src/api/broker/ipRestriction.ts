import { BrokerApi } from "./broker-api";
import { RecvWindowOption } from "../../@types/core";
import { ConfigOptions } from "../../@types/config/options";
import { validateRequiredParameters } from "../../helpers/validation";

class BrokerIpRestrictionApi extends BrokerApi {

  /**
   * Enable or Disable IP Restriction for Sub Account Api Key
   *
   * POST /sapi/v1/broker/subAccountApi/ipRestriction
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#enable-or-disable-ip-restriction-for-sub-account-api-key}
   *
   * @param {string} subAccountId
   * @param {string} subAccountApiKey
   * @param {boolean} ipRestrict
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  changeIPRestrictionForSub(
    subAccountId: string,
    subAccountApiKey: string,
    ipRestrict: boolean,
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId,
      subAccountApiKey,
      ipRestrict
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi/ipRestriction',
      {
        ...options,
        subAccountId,
        subAccountApiKey,
        ipRestrict
      },
      config
    );
  }

  /**
   * Add IP Restriction for Sub Account Api Key
   *
   * POST /sapi/v1/broker/subAccountApi/ipRestriction/ipList
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#add-ip-restriction-for-sub-account-api-key}
   *
   * @param {string} subAccountId
   * @param {string} subAccountApiKey
   * @param {string} ipAddress
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  addIPRestrictionForSub(
    subAccountId: string,
    subAccountApiKey: string,
    ipAddress: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId,
      subAccountApiKey,
      ipAddress
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi/ipRestriction/ipList',
      {
        ...options,
        subAccountId,
        subAccountApiKey,
        ipAddress
      },
      config
    );
  }

  /**
   * Get IP Restriction for Sub Account Api Key
   *
   * GET /sapi/v1/broker/subAccountApi/ipRestriction
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#get-ip-restriction-for-sub-account-api-key}
   *
   * @param {string} subAccountId
   * @param {string} subAccountApiKey
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  getIPRestrictionForSub(
    subAccountId: string,
    subAccountApiKey: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId,
      subAccountApiKey,
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccountApi/ipRestriction',
      {
        ...options,
        subAccountId,
        subAccountApiKey,
      },
      config
    );
  }

  /**
   * Delete IP Restriction for Sub Account Api Key
   *
   * DELETE /sapi/v1/broker/subAccountApi/ipRestriction/ipList
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#delete-ip-restriction-for-sub-account-api-key}
   *
   * @param {string} subAccountId
   * @param {string} subAccountApiKey
   * @param {string} ipAddress
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  deleteIPRestrictionForSub(
    subAccountId: string,
    subAccountApiKey: string,
    ipAddress: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId,
      subAccountApiKey,
      ipAddress
    });

    return this.signRequest(
      'DELETE',
      '/sapi/v1/broker/subAccountApi/ipRestriction/ipList',
      {
        ...options,
        subAccountId,
        subAccountApiKey,
        ipAddress
      },
      config
    );
  }
}

export const BrokerIpRestriction = new BrokerIpRestrictionApi();
