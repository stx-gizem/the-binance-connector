import { BrokerApi } from "./broker-api";
import { GetBrokerSpotCommissionRebateOptions } from "../../@types/broker/rebate";
import { ConfigOptions } from "../../@types/config/options";
import { validateRequiredParameters } from "../../helpers/validation";

class BrokerRebateApi extends BrokerApi {
  /**
   * Query Broker Commission Rebate Recent Record（Spot）
   *
   * GET /sapi/v1/broker/rebate/recentRecord
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-broker-commission-rebate-recent-recordspot}
   *
   * @param {string} subAccountId
   * @param {number} startTime
   * @param {number} endTime
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   * @param {number} [options.page] - default 1
   * @param {number} [options.size] - default 500，max500
   */
  getBrokerSpotCommissionRebate(
    subAccountId: string,
    startTime: number,
    endTime: number,
    options: GetBrokerSpotCommissionRebateOptions = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      startTime,
      endTime,
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/rebate/recentRecord',
      {
        ...options,
        subAccountId,
        startTime,
        endTime,
      },
      config
    );
  }

  /**
   * Query Broker Futures Commission Rebate Record
   *
   * GET /sapi/v1/broker/rebate/futures/recentRecord
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-broker-futures-commission-rebate-record}
   *
   * @param {number} futuresType - 1:USDT Futures, 2: Coin Futures
   * @param {number} startTime
   * @param {number} endTime
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   * @param {number} [options.page] - default 1
   * @param {number} [options.size] - default 10，max100
   */
  getBrokerFuturesCommissionRebate(
    futuresType: number | 1 | 2,
    startTime: number,
    endTime: number,
    options: GetBrokerSpotCommissionRebateOptions = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      futuresType,
      startTime,
      endTime
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/rebate/futures/recentRecord',
      {
        ...options,
        futuresType,
        startTime,
        endTime
      },
      config
    );
  }
}

export const BrokerRebate = new BrokerRebateApi();
