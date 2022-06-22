import { BrokerApi } from "./broker-api";
import {
  FuturesTransferHistoryOptions,
  SpotTransferHistoryOptions,
  SpotTransferOptions
} from "../../@types/broker/brokerTransfer";
import { ConfigOptions } from "../../@types/config/options";
import { validateRequiredParameters } from "../../helpers/validation";

class BrokerTransferApi extends BrokerApi {

  /**
   * Sub Account Transfer（SPOT）
   *
   * POST /sapi/v1/broker/transfer
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#sub-account-transferspot}
   *
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {string} [options.fromId]
   * @param {string} [options.told]
   * @param {string} [options.clientTrandId] - client transfer id, must be unique
   * @param {number} [options.recvWindow]
   */
  spotTransfer(asset: string, amount: string | number, options: SpotTransferOptions = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({
      asset,
      amount
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/transfer',
      {
        ...options,
        asset,
        amount
      },
      config
    );
  }

  /**
   * Query Sub Account Transfer History（SPOT）
   *
   * GET /sapi/v1/broker/transfer
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-sub-account-transfer-historyspot}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.fromId]
   * @param {string} [options.told]
   * @param {string} [options.showAllStatus] - true or false, default: false
   * @param {string} [options.clientTrandId] - client transfer id
   * @param {number} [options.recvWindow]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit]
   * @param {number} [options.page]
   */
  spotTransferHistory(options: SpotTransferHistoryOptions = {}, config: ConfigOptions = this.config) {
    return this.signRequest(
      'GET',
      '/sapi/v1/broker/transfer',
      options,
      config
    );
  }

  /**
   * Sub Account Transfer（FUTURES）
   *
   * POST /sapi/v1/broker/transfer/futures
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#sub-account-transferfutures}
   *
   * @param {number} futuresType 1:USDT Futures,2: COIN Futures
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {string} [options.fromId]
   * @param {string} [options.told]
   * @param {string} [options.clientTrandId]
   * @param {number} [options.recvWindow]
   *
   */
  futuresTransfer(
    futuresType: number | 1 | 2,
    asset: string,
    amount: string | number,
    options: SpotTransferOptions = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      futuresType,
      asset,
      amount
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/transfer/futures',
      {
        ...options,
        futuresType,
        asset,
        amount
      },
      config
    );
  }

  /**
   * Query Sub Account Transfer History（FUTURES）
   *
   * GET /sapi/v1/broker/transfer/futures
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-sub-account-transfer-historyfutures}
   *
   * @param {string} subAccountId
   * @param {number} futuresType - 1:USDT Futures,2: COIN Futures
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   * @param {number} [options.startTime] - default 30 days records
   * @param {number} [options.endTime] - default 30 days records
   * @param {number} [options.limit] - default 50, max 500
   * @param {number} [options.page] - default 1
   * @param {string} [options.clientTrandId]
   */
  futuresTransferHistory(
    subAccountId: string,
    futuresType: number | 1 | 2,
    options: FuturesTransferHistoryOptions = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      futuresType
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/transfer/futures',
      {
        ...options,
        subAccountId,
        futuresType
      },
      config
    );
  }

}

export const BrokerTransfer = new BrokerTransferApi();
