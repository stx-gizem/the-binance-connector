import { BrokerApi } from "./broker-api";
import {
  BrokerCreateSubAccountOptions,
  CreateApiKeyOptions,
  QuerySubAccountApiKeyOptions,
  QuerySubAccountOptions
} from "../../@types/broker/brokerSubAccount";
import { ConfigOptions } from "../../@types/config/options";
import { RecvWindowOption } from "../../@types/core";
import { validateRequiredParameters } from "../../helpers/validation";

class BrokerSubAccountApi extends BrokerApi {
  /**
   * Create a Sub Account
   *
   * POST /sapi/v1/broker/subAccount
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#create-a-sub-account}
   *
   * @param {object} [options]
   * @param {string} [options.tag] - tag length should be less than 32
   * @param {number} [options.recvWindow]
   * @param config
   */
  createSubAccount(options: BrokerCreateSubAccountOptions = {}, config: ConfigOptions = this.config) {
    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccount',
      options,
      config
    );
  }

  /**
   * Enable Margin for Sub Account
   *
   * POST /sapi/v1/broker/subAccount/margin
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#enable-margin-for-sub-account}
   *
   * @param {string} subAccountId
   * @param {string} margin - only true for now
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  enableMargin(subAccountId: string, margin = "true", options: RecvWindowOption = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({subAccountId, margin});
    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccount/margin',
      {
        ...options,
        subAccountId,
        margin
      },
      config
    );
  }

  /**
   * Enable Futures for Sub Account
   *
   * POST /sapi/v1/broker/subAccount/futures
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#enable-futures-for-sub-account}
   *
   * @param {string} subAccountId
   * @param {string} futures - only true for now
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  enableFutures(subAccountId: string, futures = "true", options: RecvWindowOption = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({subAccountId, futures});
    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccount/futures',
      {
        ...options,
        subAccountId,
        futures
      },
      config
    );
  }

  /**
   * Create Api Key for Sub Account
   *
   * POST /sapi/v1/broker/subAccountApi
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#create-api-key-for-sub-account}
   *
   * @param {string} subAccountId
   * @param {string} canTrade
   * @param {object} [options]
   * @param {number} [options.recvWindow]
   * @param {string} [options.marginTrade]
   * @param {string} [options.futuresTrade]
   * @param config
   */
  createApiKey(subAccountId: string, canTrade: string | "true" | "false", options: CreateApiKeyOptions = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId,
      canTrade
    });
    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi',
      {
        ...options,
        subAccountId,
        canTrade
      },
      config
    );
  }

  /**
   * Delete Sub Account Api Key
   *
   * DELETE /sapi/v1/broker/subAccountApi
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#delete-sub-account-api-key}
   *
   * @param {string} subAccountId
   * @param {string} subAccountApiKey
   * @param {object} [options]
   * @param {number} [options.recvWindow]
   * @param config
   */
  deleteApiKey(subAccountId: string, subAccountApiKey: string, options: RecvWindowOption = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId,
      subAccountApiKey
    });

    return this.signRequest(
      'DELETE',
      '/sapi/v1/broker/subAccountApi',
      {
        ...options,
        subAccountId,
        subAccountApiKey
      }
    );
  }

  /**
   * Query Sub Account Api Key
   *
   * GET /sapi/v1/broker/subAccountApi
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-sub-account-api-key}
   *
   * @param {string} subAccountId
   * @param {object} [options]
   * @param {number} [options.recvWindow]
   * @param {number} [options.page]
   * @param {number} [options.size]
   * @param {string} [options.subAccountApiKey]
   * @param config
   */
  queryApiKey(subAccountId: string, options: QuerySubAccountApiKeyOptions = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccountApi',
      {
        ...options,
        subAccountId
      },
      config
    );
  }

  /**
   * Change Sub Account Api Permission
   *
   * POST /sapi/v1/broker/subAccountApi/permission
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#change-sub-account-api-permission}
   *
   * @param {string} subAccountId
   * @param {string} subAccountApiKey
   * @param {string} canTrade
   * @param {string} marginTrade
   * @param {string} futuresTrade
   * @param {object} [options]
   * @param {number} [options.recvWindow]
   * @param config
   */
  changePermission(subAccountId: string, subAccountApiKey: string, canTrade: string | "true" | "false", marginTrade: string | "true" | "false", futuresTrade: string | "true" | "false", options: RecvWindowOption = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId,
      subAccountApiKey,
      canTrade,
      marginTrade,
      futuresTrade
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi/permission',
      {
        ...options,
        subAccountId,
        subAccountApiKey,
        canTrade,
        marginTrade,
        futuresTrade
      },
      config
    );
  }

  /**
   * Query Sub Account
   *
   * GET /sapi/v1/broker/subAccount
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-sub-account}
   *
   * @param {object} [options]
   * @param {number} [options.recvWindow]
   * @param {string} [options.subAccountId]
   * @param {number} [options.page]
   * @param {number} [options.size]
   * @param config
   */
  getList(options: QuerySubAccountOptions = {}, config: ConfigOptions = this.config) {
    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccount',
      options,
      config
    );
  }

  /**
   * Enable Vanilla Options Permission For Sub Account Api Key
   *
   * POST /sapi/v1/broker/subAccountApi/permission/vanillaOptions
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#enable-vanilla-options-permission-for-sub-account-api-key}
   *
   * @param {string} subAccountId
   * @param {string} subAccountApiKey
   * @param {string} canVanillaOptions
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  enableVanillaOptions(
    subAccountId: string,
    subAccountApiKey: string,
    canVanillaOptions: string | 'true' | 'false',
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      subAccountApiKey,
      canVanillaOptions,
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi/permission/vanillaOptions',
      {
        ...options,
        subAccountId,
        subAccountApiKey,
        canVanillaOptions,
      },
      config
    );
  }
}

export const BrokerSubAccount = new BrokerSubAccountApi();
