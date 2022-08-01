import { CoinMFuturesApi } from "./coin-m-futures-api";
import { ConfigOptions } from "../../@types/config/options";
import {
  AggTradesOptions,
  ContractType,
  FundingRateHistoryOptions,
  FuturePeriod,
  OldTradesOptions,
  OrderBookOptions
} from "../../@types/usd-m-futures/market";
import { validateRequiredParameters } from "../../helpers/validation";
import { FilterOptions, LimitOptions } from "../../@types/core";
import { SymbolPairOption, } from "../../@types/coin-m-futures/market";

class MarketCoinMApi extends CoinMFuturesApi {
  /**
   * Test Connectivity<br>
   *
   * GET /dapi/v1/ping<br>
   *
   * Test connectivity to the Rest API.<br>
   * {@link https://binance-docs.github.io/apidocs/delivery/en/#test-connectivity}
   */
  ping(config: ConfigOptions = {}) {
    return this.publicRequest('GET', `/dapi/v1/ping`, {}, config);
  }

  /**
   * Check Server Time<br>
   *
   * GET /dapi/v1/time<br>
   *
   * Test connectivity to the Rest API and get the current server time.<br>
   * {@link https://binance-docs.github.io/apidocs/delivery/en/#check-server-time}
   *
   */
  time(config: ConfigOptions = {}) {
    return this.publicRequest('GET', `/dapi/v1/time`, {}, config);
  }

  /**
   * Exchange Information<br>
   *
   * GET /dapi/v1/exchangeInfo<br>
   *
   * Current exchange trading rules and symbol information<br>
   * {@link https://binance-docs.github.io/apidocs/delivery/en/#exchange-information}
   *
   */
  exchangeInfo(config: ConfigOptions = {}) {
    return this.publicRequest('GET', `/dapi/v1/exchangeInfo`, {}, config);
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
    return this.publicRequest('GET', '/dapi/v1/depth', {
      symbol,
      ...options
    }, config);
  }

  getRecentTrades(symbol: string, options: LimitOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.publicRequest('GET', '/dapi/v1/trades', {
      symbol,
      ...options
    }, config);
  }

  oldTrades(symbol: string, options: OldTradesOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/dapi/v1/historicalTrades', {
      symbol,
      ...options
    }, config);
  }

  getAggTrades(symbol: string, options: AggTradesOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.publicRequest('GET', '/dapi/v1/aggTrades', {
      symbol,
      ...options
    }, config);
  }

  indexAndMarkPrice(options: SymbolPairOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/dapi/v1/premiumIndex', {
      ...options
    }, config);
  }

  fundingRateHistory(options: FundingRateHistoryOptions = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/dapi/v1/fundingRate', options, config);
  }

  getCandlestickData(symbol: string, interval: string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol, interval});
    return this.publicRequest('GET', '/dapi/v1/klines', {
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

    return this.publicRequest('GET', '/dapi/v1/continuousKlines', {
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

    return this.publicRequest('GET', '/dapi/v1/indexPriceKlines', {
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

    return this.publicRequest('GET', '/dapi/v1/markPriceKlines', {
      pair,
      interval,
      ...options
    }, config);
  }

  tickerPriceChangeStatistics24Hr(options: SymbolPairOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/dapi/v1/ticker/24hr', {
      ...options
    }, config);
  }

  getSymbolPriceTicker(options: SymbolPairOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/dapi/v1/ticker/price', {
      ...options
    }, config);
  }

  getSymbolOrderBookTicker(options: SymbolPairOption = {}, config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/dapi/v1/ticker/bookTicker', {
      ...options
    }, config);
  }

  openInterest(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.publicRequest('GET', '/dapi/v1/openInterest', {
      symbol
    }, config);
  }

  openInterestStatistics(pair: string, contractType: ContractType | string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      pair,
      contractType,
      period
    });
    return this.publicRequest('GET', '/futures/data/openInterestHist', {
      pair,
      contractType,
      period,
      ...options
    }, config)
  }

  topLongShortAccountRatio(pair: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      pair,
      period
    });

    return this.publicRequest('GET', '/futures/data/topLongShortAccountRatio', {
      pair,
      period,
      ...options
    }, config);
  }

  topLongShortPositionRatio(pair: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      pair,
      period
    });

    return this.publicRequest('GET', '/futures/data/topLongShortPositionRatio', {
      pair,
      period,
      ...options
    }, config);
  }

  longShortRatio(pair: string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      pair,
      period
    });

    return this.publicRequest('GET', '/futures/data/globalLongShortAccountRatio', {
      pair,
      period,
      ...options
    }, config);
  }

  takerBuySellVolume(pair: string, contractType: ContractType | string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      pair,
      contractType,
      period
    });

    return this.publicRequest('GET', '/futures/data/takerBuySellVol', {
      pair,
      contractType,
      period,
      ...options
    }, config);
  }

  basis(pair: string, contractType: ContractType | string, period: FuturePeriod | string, options: FilterOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      pair,
      contractType,
      period
    });

    return this.publicRequest('GET', '/futures/data/basis', {
      pair,
      contractType,
      period,
      ...options
    }, config);
  }
}

export const MarketCoinM = new MarketCoinMApi();
