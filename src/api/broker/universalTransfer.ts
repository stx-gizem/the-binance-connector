import { BrokerApi } from "./broker-api";
import { ConfigOptions } from "../../@types/config/options";
import { UniversalTransferHistoryOptions, UniversalTransferOptions } from "../../@types/broker/universalTransfer";
import { validateRequiredParameters } from "../../helpers/validation";
import { RecvWindowOption } from "../../@types/core";

class BrokerUniversalTransferApi extends BrokerApi {

  /**
   * Universal Transfer
   *
   * POST /sapi/v1/broker/universalTransfer
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#universal-transfer}
   *
   * @param {string} fromAccountType - SPOT,USDT_FUTURE,COIN_FUTURE
   * @param {string} toAccountType - SPOT,USDT_FUTURE,COIN_FUTURE
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindows]
   * @param {string} [options.clientTranId] - client transfer id, must be unique
   * @param {string} [options.fromId]
   * @param {string} [options.told]
   */
  transfer(
    fromAccountType: string | "SPOT" | "USDT_FUTURE" | "COIN_FUTURE",
    toAccountType: string | "SPOT" | "USDT_FUTURE" | "COIN_FUTURE",
    asset: string,
    amount: string | number,
    options: UniversalTransferOptions = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      fromAccountType,
      toAccountType,
      asset,
      amount,
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/universalTransfer',
      {
        ...options,
        fromAccountType,
        toAccountType,
        asset,
        amount,
      },
      config
    );
  }

  /**
   * Query Universal Transfer History
   *
   * GET /sapi/v1/broker/universalTransfer
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-universal-transfer-history}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.clientTranId]
   * @param {string} [options.fromId]
   * @param {string} [options.told]
   * @param {boolean} [options.showAllStatus]
   * @param {number} [options.page]
   * @param {number} [options.limit]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.recvWindow]
   */
  history(options: UniversalTransferHistoryOptions = {}, config: ConfigOptions = this.config) {
    return this.signRequest(
      'GET',
      '/sapi/v1/broker/universalTransfer',
      options,
      config
    );
  }

  /**
   * Enable Universal Transfer Permission For Sub Account Api Key
   *
   * POST /sapi/v1/broker/subAccountApi/permission/universalTransfer
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#enable-universal-transfer-permission-for-sub-account-api-key}
   *
   * @param {string} subAccountId
   * @param {string} subAccountApiKey
   * @param {string} canUniversalTransfer - true or false
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  enableForSub(
    subAccountId: string,
    subAccountApiKey: string,
    canUniversalTransfer: string | 'true' | 'false',
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      subAccountApiKey,
      canUniversalTransfer
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi/permission/universalTransfer',
      {
        ...options,
        subAccountId,
        subAccountApiKey,
        canUniversalTransfer,
      },
      config
    );
  }
}

export const BrokerUniversalTransfer = new BrokerUniversalTransferApi();
