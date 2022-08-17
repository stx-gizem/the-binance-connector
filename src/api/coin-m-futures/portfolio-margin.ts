import { CoinMFuturesApi } from "./coin-m-futures-api";
import { ConfigOptions } from "../../@types/config/options";
import { PortfolioMarginExchangeInfoOptions } from "../../@types/coin-m-futures/portfolio-margin";

class PortfolioMarginCoinMApi extends CoinMFuturesApi {
  portfolioMarginExchangeInformation(options: PortfolioMarginExchangeInfoOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/pmExchangeInfo', options, config);
  }
}

export const CoinFuturesPortfolioMargin = new PortfolioMarginCoinMApi();
