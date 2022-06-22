import { BinanceApi } from './binance-api';
import { ConfigOptions } from '../../@types/config/options';
import {
  AggHistoryOptions,
  ExchangeOptions,
  KlineInterval,
  ServerTime,
  TradeHistoryOptions,
} from '../../@types/market';
import { validateRequiredParameters } from '../../helpers/validation';
import { FilterOptions, LimitOptions } from '../../@types/core';

class MarketApi extends BinanceApi {
  /**
   * Test Connectivity<br>
   *
   * GET /api/v3/ping<br>
   *
   * Test connectivity to the Rest API.<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#test-connectivity}
   */
  ping(config: ConfigOptions = {}) {
    return this.publicRequest('GET', `/api/v3/ping`, {}, config);
  }

  /**
   * Check Server Time<br>
   *
   * GET /api/v3/time<br>
   *
   * Test connectivity to the Rest API and get the current server time.<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#check-server-time}
   *
   */
  time(config: ConfigOptions = {}) {
    return this.publicRequest('GET', `/api/v3/time`, {}, config);
  }

  /**
   * Exchange Information<br>
   *
   * GET /api/v3/exchangeInfo<br>
   *
   * Current exchange trading rules and symbol information<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#exchange-information}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.symbol] - symbol
   * @param {Array} [options.symbols] - an array of symbols
   *
   */
  exchangeInfo(options: ExchangeOptions = {}, config: ConfigOptions = {}) {
    if (Object.prototype.hasOwnProperty.call(options, 'symbol')) {
      options.symbol = options.symbol.toUpperCase();
    }
    if (Object.prototype.hasOwnProperty.call(options, 'symbols')) {
      options.symbols = options.symbols.map((symbol) => symbol.toUpperCase());
    }
    return this.publicRequest('GET', `/api/v3/exchangeInfo`, options, config);
  }

  /**
   * Order Book<br>
   *
   * GET /api/v3/depth<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#order-book}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {number} [options.limit] - Default 100; max 5000.
   *    If limit > 5000, then the response will truncate to 5000.
   */
  depth(
    symbol: string,
    options: LimitOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.publicRequest(
      'GET',
      `/api/v3/depth`,
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Recent Trades List<br>
   *
   * GET /api/v3/trades<br>
   *
   * Get recent trades.<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#recent-trades-list}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {number} [options.limit] - Default 500; max 1000.
   */
  trades(
    symbol: string,
    options: LimitOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.publicRequest(
      'GET',
      `/api/v3/trades`,
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Old Trade Lookup<br>
   *
   * GET /api/v3/historicalTrades<br>
   *
   * Get older market trades.<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#old-trade-lookup}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {number} [options.limit] - Default 500; max 1000.
   * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
   */
  historicalTrades(
    symbol: string,
    options: TradeHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.publicRequest(
      'GET',
      `/api/v3/historicalTrades`,
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Compressed/Aggregate Trades List<br>
   *
   * GET /api/v3/aggTrades<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#compressed-aggregate-trades-list}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {number} [options.fromId] - id to get aggregate trades from INCLUSIVE.
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - Default 500; max 1000.
   */
  aggTrades(
    symbol: string,
    options: AggHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.publicRequest(
      'GET',
      `/api/v3/aggTrades`,
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Kline/Candlestick Data<br>
   *
   * GET /api/v3/klines<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-data}
   *
   * @param {string} symbol
   * @param {KlineInterval} interval
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - Default 500; max 1000.
   */
  klines(
    symbol: string,
    interval: KlineInterval,
    options: FilterOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol, interval });
    return this.publicRequest(
      'GET',
      `/api/v3/klines`,
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        interval: interval,
      }),
      config,
    );
  }

  /**
   * Current Average Price<br>
   *
   * GET /api/v3/avgPrice<br>
   *
   * Current average price for a symbol.<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#current-average-price}
   *
   * @param {string} symbol
   * @param config
   */
  avgPrice(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ symbol });

    return this.publicRequest(
      'GET',
      `/api/v3/avgPrice`,
      { symbol: symbol.toUpperCase() },
      config,
    );
  }

  /**
   * 24hr Ticker Price Change Statistics<br>
   *
   * GET /api/v3/ticker/24hr<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#24hr-ticker-price-change-statistics}
   *
   * @param {string} [symbol]
   * @param {Array} [symbols] - an array of symbols
   * @param config
   */
  ticker24hr(
    symbol: string = '',
    symbols: string[] = [],
    config: ConfigOptions = {},
  ) {
    symbols = symbols.map((symbol) => symbol.toUpperCase());

    return this.publicRequest(
      'GET',
      `/api/v3/ticker/24hr`,
      { symbol: symbol.toUpperCase(), symbols: symbols },
      config,
    );
  }

  /**
   * Symbol Price Ticker<br>
   *
   * GET /api/v3/ticker/price<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#symbol-price-ticker}
   *
   * @param {string} [symbol]
   * @param {Array} [symbols] - an array of symbols
   * @param config
   */
  tickerPrice(
    symbol: string = '',
    symbols: string[] = [],
    config: ConfigOptions = {},
  ) {
    symbols = symbols.map((symbol) => symbol.toUpperCase());

    return this.publicRequest(
      'GET',
      `/api/v3/ticker/price`,
      { symbol: symbol.toUpperCase(), symbols: symbols },
      config,
    );
  }

  /**
   * Symbol Order Book Ticker<br>
   *
   * GET /api/v3/ticker/bookTicker<br>
   *
   * Best price/qty on the order book for a symbol or symbols.<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#symbol-order-book-ticker}
   *
   * @param {string} [symbol]
   * @param {Array} [symbols] - an array of symbols
   * @param config
   */
  bookTicker(
    symbol: string = '',
    symbols: string[] = [],
    config: ConfigOptions = {},
  ) {
    symbols = symbols.map((symbol) => symbol.toUpperCase());

    return this.publicRequest(
      'GET',
      `/api/v3/ticker/bookTicker`,
      { symbol: symbol.toUpperCase(), symbols: symbols },
      config,
    );
  }
}

export const Market = new MarketApi();
