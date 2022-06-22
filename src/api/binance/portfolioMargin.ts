import { BinanceApi } from './binance-api';
import { ConfigOptions } from '../../@types/config/options';
import { RecvWindowOption } from '../../@types/core';

class PortfolioMarginApi extends BinanceApi {
  /**
   * Get Portfolio Margin Account Info (USER_DATA)<br>
   *
   * GET /sapi/v1/portfolio/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-portfolio-margin-account-info-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   *
   */
  portfolioMarginAccount(
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/portfolio/account',
      options,
      config,
    );
  }
}

export const PortfolioMargin = new PortfolioMarginApi();
