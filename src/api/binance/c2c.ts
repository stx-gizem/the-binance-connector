import { BinanceApi } from './binance-api';
import { validateRequiredParameters } from '../../helpers/validation';
import { ConfigOptions } from '../../@types/config/options';
import { C2cTradeHistoryOptions } from '../../@types/c2c';

class C2cApi extends BinanceApi {
  /**
   * Get C2C Trade History (USER_DATA)<br>
   *
   * GET /sapi/v1/c2c/orderMatch/listUserOrderHistory<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-c2c-trade-history-user_data}
   *
   * @param {string} tradeType - BUY, SELL
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTimestamp] - The max interval between startTimestamp and endTimestamp is 30 days.<br>
   *     If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned.
   * @param {number} [options.endTimestamp]
   * @param {number} [options.page] - default 1
   * @param {number} [options.rows] - default 100, max 100
   * @param {number} [options.recvWindow]
   *
   */
  c2cTradeHistory(
    tradeType: string,
    options: C2cTradeHistoryOptions = {},
    config: ConfigOptions,
  ) {
    validateRequiredParameters({ tradeType });

    return this.signRequest(
      'GET',
      '/sapi/v1/c2c/orderMatch/listUserOrderHistory',
      Object.assign(options, { tradeType }),
      config,
    );
  }
}

export const C2C = new C2cApi();
