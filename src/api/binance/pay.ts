import { BinanceApi } from './binance-api';
import { ConfigOptions } from '../../@types/config/options';
import { PayHistoryOptions } from '../../@types/pay';

class PayApi extends BinanceApi {
  /**
   * Get Pay Trade History (USER_DATA)<br>
   *
   * GET /sapi/v1/pay/transactions<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-pay-trade-history-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTimestamp]
   * @param {number} [options.endTimestamp]
   * @param {number} [options.limit] - default 100, max 100
   * @param {number} [options.recvWindow]
   *
   */
  payHistory(options: PayHistoryOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/pay/transactions',
      options,
      config,
    );
  }
}

export const Pay = new PayApi();
