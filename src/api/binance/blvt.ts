import { BinanceApi } from './binance-api';
import { validateRequiredParameters } from '../../helpers/validation';
import { ConfigOptions } from '../../@types/config/options';
import {
  BlvtInfoOptions,
  BlvtRedemptionRecordOptions,
  BlvtSubscriptionRecordOptions,
  SubscribeBlvtOptions,
} from '../../@types/blvt';
import { RecvWindowOption } from '../../@types/core';

class BlvtApi extends BinanceApi {
  /**
   * Get BLVT Info (MARKET_DATA)<br>
   *
   * GET /sapi/v1/blvt/tokenInfo<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-blvt-info-market_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.tokenName]
   */
  blvtInfo(options: BlvtInfoOptions = {}, config: ConfigOptions = {}) {
    return this.publicRequest(
      'GET',
      `/sapi/v1/blvt/tokenInfo`,
      options,
      config,
    );
  }

  /**
   * Subscribe BLVT (USER_DATA)<br>
   *
   * POST /sapi/v1/blvt/subscribe<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#subscribe-blvt-user_data}
   *
   * @param {string} tokenName
   * @param {number} cost
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subscribeBlvt(
    tokenName: string,
    cost: number | string,
    options: SubscribeBlvtOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ tokenName, cost });
    return this.signRequest(
      'POST',
      `/sapi/v1/blvt/subscribe`,
      Object.assign(options, {
        tokenName,
        cost,
      }),
      config,
    );
  }

  /**
   * Query Subscription Record (USER_DATA)<br>
   *
   * GET /sapi/v1/blvt/subscribe/record<br>
   *
   * Only the data of the latest 90 days is available<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-subscription-record-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.tokenName]
   * @param {number} [options.id]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 1000, max 1000
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   *
   */
  blvtSubscriptionRecord(
    options: BlvtSubscriptionRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      `/sapi/v1/blvt/subscribe/record`,
      options,
      config,
    );
  }

  /**
   * Subscribe BLVT (USER_DATA)<br>
   *
   * POST /sapi/v1/blvt/redeem<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#redeem-blvt-user_data}
   *
   * @param {string} tokenName
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  redeemBlvt(
    tokenName: string,
    amount: string | number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ tokenName, amount });
    return this.signRequest(
      'POST',
      `/sapi/v1/blvt/redeem`,
      Object.assign(options, {
        tokenName,
        amount,
      }),
      config,
    );
  }

  /**
   * Query Redemption Record (USER_DATA)<br>
   *
   * GET /sapi/v1/blvt/redeem/record<br>
   *
   * Only the data of the latest 90 days is available<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-redemption-record-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.tokenName]
   * @param {number} [options.id]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 1000, max 1000
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  blvtRedemptionRecord(
    options: BlvtRedemptionRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      `/sapi/v1/blvt/redeem/record`,
      options,
      config,
    );
  }
}

export const Blvt = new BlvtApi();
