import { UsdMFuturesApi } from "./usd-m-futures-api";
import { ConfigOptions } from "../../@types/config/options";
import {
  AggTradesOptions,
  ContractType,
  FundingRateHistoryOptions,
  FuturePeriod,
  MarkPriceOptions,
  OldTradesOptions,
  OrderBookOptions,
  SymbolOption
} from "../../@types/usd-m-futures/market";
import { validateRequiredParameters } from "../../helpers/validation";
import { FilterOptions, LimitOptions } from "../../@types/core";

class MarketUsdMApi extends UsdMFuturesApi {
  /**
   * Test Connectivity<br>
   *
   * GET /fapi/v1/ping<br>
   *
   * Test connectivity to the Rest API.<br>
   * {@link https://binance-docs.github.io/apidocs/futures/en/#test-connectivity}
   */
  ping(config: ConfigOptions = {}) {
    return this.publicRequest('GET', `/fapi/v1/ping`, {}, config);
  }

  /**
   * Check Server Time<br>
   *
   * GET /fapi/v1/time<br>
   *
   * Test connectivity to the Rest API and get the current server time.<br>
   * {@link https://binance-docs.github.io/apidocs/futures/en/#check-server-time}
   *
   */
  time(config: ConfigOptions = {}) {
    return this.publicRequest('GET', `/fapi/v1/time`, {}, config);
  }

  /**
   * Exchange Information<br>
   *
   * GET /fapi/v1/exchangeInfo<br>
   *
   * Current exchange trading rules and symbol information<br>
   * {@link https://binance-docs.github.io/apidocs/futures/en/#exchange-information}
   *
   */
  exchangeInfo(config: ConfigOptions = {}) {
    return this.publicRequest('GET', `/fapi/v1/exchangeInfo`, {}, config);
  }

  /**
   * Order Book
   *
   * @param symbol
   * @param options
   * @param config
   */
  orderBook(symbol: string, options: OrderBookOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.publicRequest('GET', '/fapi/v1/depth', {
      symbol,
      ...options
    }, config);
  }

  getRecentTrades(symbol: string, options: LimitOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.publicRequest('GET', '/fapi/v1/trades', {
      symbol,
      ...options
    }, config);
  }

  oldTrades(symbol: string, options: OldTradesOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/fapi/v1/historicalTrades', {
      symbol,
      ...options
    }, config);
  }

  getAggTrades(symbol: string, options: AggTradesOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.publicRequest('GET', '/fapi/v1/aggTrades', {
      symbol,
      ...options
    }, config);
  }

  getCandlestickData(symbol: string, interval: string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol, interval});
    return this.publicRequest('GET', '/fapi/v1/klines', {
      symbol,
      interval,
      ...options
    }, config);
  }

  getContinuousContractKline(pair: string, contractType: ContractType | string, interval: string, options: FilterOptions = {}, config: ConfigOptions) {
    validateRequiredParameters({
      pair,
      contractType,
      interval
    });

    return this.publicRequest('GET', '/fapi/v1/continuousKlines', {
      pair,
      contractType,
      interval,
      ...options
    }, config);
  }

  getIndexPriceKline(pair: string, interval: string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      pair,
      interval
    });

    return this.publicRequest('GET', '/fapi/v1/indexPriceKlines', {
      pair,
      interval,
      ...options
    }, config);
  }

  getMarkPriceKline(pair: string, interval: string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      pair,
      interval
    });

    return this.publicRequest('GET', '/fapi/v1/markPriceKlines', {
      pair,
      interval,
      ...options
    }, config);
  }

  markPrice(options: MarkPriceOptions = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/fapi/v1/premiumIndex', {
      ...options
    }, config);
  }

  fundingRateHistory(options: FundingRateHistoryOptions = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/fapi/v1/fundingRate', options, config);
  }

  tickerPriceChangeStatistics24Hr(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/fapi/v1/ticker/24hr', {
      ...options
    }, config);
  }

  getSymbolPriceTicker(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/fapi/v1/ticker/price', options, config);
  }

  getSymbolOrderBookTicker(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/fapi/v1/ticker/bookTicker', options, config);
  }

  openInterest(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.publicRequest('GET', '/fapi/v1/openInterest', {
      symbol
    }, config);
  }

  openInterestStatistics(symbol: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      period
    });
    return this.publicRequest('GET', '/futures/data/openInterestHist', {
      symbol,
      period,
      ...options
    }, config);
  }

  topLongShortAccountRatio(symbol: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      period
    });
    return this.publicRequest('GET', '/futures/data/topLongShortAccountRatio', {
      symbol,
      period,
      ...options
    }, config);
  }

  topLongShortPositionRatio(symbol: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      period
    });
    return this.publicRequest('GET', '/futures/data/topLongShortPositionRatio', {
      symbol,
      period,
      ...options
    }, config);
  }

  longShortRatio(symbol: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      period
    });
    return this.publicRequest('GET', '/futures/data/globalLongShortAccountRatio', {
      symbol,
      period,
      ...options
    }, config);
  }

  takerBuySellVolume(symbol: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      period
    });
    return this.publicRequest('GET', '/futures/data/takerlongshortRatio', {
      symbol,
      period,
      ...options
    }, config);
  }

  historicalBlvtKlines(symbol: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      period
    });
    return this.publicRequest('GET', '/fapi/v1/lvtKlines', {
      symbol,
      period,
      ...options
    }, config);
  }

  compositeIndexInfo(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/fapi/v1/indexInfo', {
      ...options
    }, config);
  }

  assetIndexForMultiAssetsMode(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/fapi/v1/assetIndex', {
      ...options
    }, config);
  }
}

export const MarketUsdM = new MarketUsdMApi();
