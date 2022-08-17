import { UsdMFuturesApi } from "./usd-m-futures-api";
import { SymbolOption } from "../../@types/usd-m-futures/market";
import { ConfigOptions } from "../../@types/config/options";

class PortfolioMarginUsdMApi extends UsdMFuturesApi {
  portfolioMarginExchangeInformation(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/pmExchangeInfo', options, config);
  }

}

export const UsdFuturesPortfolioMargin = new PortfolioMarginUsdMApi();
