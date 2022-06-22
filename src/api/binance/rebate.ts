import { BinanceApi } from './binance-api';
import { ConfigOptions } from '../../@types/config/options';
import { RebateSpotHistoryOptions } from '../../@types/rebate';

class RebateApi extends BinanceApi {
  /**
   * Get Spot Rebate History Records (USER_DATA)<br>
   *
   * GET /sapi/v1/rebate/taxQuery<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-spot-rebate-history-records-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.page] - Default 1
   * @param {number} [options.recvWindow]
   *
   */
  rebateSpotHistory(
    options: RebateSpotHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest('GET', '/sapi/v1/rebate/taxQuery', options, config);
  }
}

export const Rebate = new RebateApi();
