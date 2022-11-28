import {BinanceApi} from './binance-api';
import {hasOneOfParameters, validateRequiredParameters} from '../../helpers/validation';
import {ConfigOptions} from '../../@types/config/options';
import {
  ConvertAcceptQuoteOptions,
  ConvertQueryOrderQuantityPrecisionPerAssetOptions,
  ConvertTradeHistoryOptions,
  SendConvertQuoteRequestOptions
} from '../../@types/convert';

class ConvertApi extends BinanceApi {
  /**
   * List All Convert Pairs (USER_DATA)<br>
   *
   * GET /sapi/v1/convert/exchangeInfo<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#list-all-convert-pairs-user_data}
   *
   * @param {string} [fromAsset]
   * @param {string} [toAsset]
   * @param config
   *
   */
  listAllConvertPairs(
    fromAsset: string,
    toAsset: string,
    config: ConfigOptions = {}
  ) {
    validateRequiredParameters({fromAsset, toAsset});

    return this.signRequest(
      'GET',
      '/sapi/v1/convert/exchangeInfo',
      {fromAsset, toAsset},
      config
    );
  }

  /**
   * Query order quantity precision per asset (USER_DATA)<br>
   *
   * GET /sapi/v1/convert/assetInfo<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-order-quantity-precision-per-asset-user_data}
   *
   * @param options
   * @param config
   *
   */
  queryOrderQuantityPrecision(
    options: ConvertQueryOrderQuantityPrecisionPerAssetOptions = {},
    config: ConfigOptions = {}
  ) {

    return this.signRequest(
      'GET',
      '/sapi/v1/convert/exchangeInfo',
      options,
      config
    );
  }

  /**
   * Send quote request (USER_DATA)<br>
   *
   * POST /sapi/v1/convert/getQuote<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#send-quote-request-user_data}
   *
   * @param {string} fromAsset
   * @param {string} toAsset
   * @param {string} fromAmount
   * @param {string} toAmount
   * @param options
   * @param config
   *
   */
  sendQuoteRequest(
    fromAsset: string,
    toAsset: string,
    fromAmount: string,
    toAmount: string,
    options: SendConvertQuoteRequestOptions,
    config: ConfigOptions = {}
  ) {

    validateRequiredParameters({fromAsset, toAsset});
    hasOneOfParameters({fromAmount, toAmount});

    return this.signRequest(
      'POST',
      '/sapi/v1/convert/getQuote',
      Object.assign(options, {fromAsset, toAsset, fromAmount, toAmount}),
      config
    );
  }

  /**
   * Accept Quote (TRADE)<br>
   *
   * POST /sapi/v1/convert/acceptQuote<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#accept-quote-trade}
   *
   * @param {string} quoteId
   * @param options
   * @param config
   *
   */
  acceptQuote(
    quoteId: string,
    options: ConvertAcceptQuoteOptions = {},
    config: ConfigOptions = {}
  ) {
    validateRequiredParameters({quoteId});

    return this.signRequest(
      'POST',
      '/sapi/v1/convert/acceptQuote',
      Object.assign(options, {quoteId}),
      config
    );
  }

  /**
   * Order status (USER_DATA)<br>
   *
   * GET /sapi/v1/convert/orderStatus<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#order-status-user_data}
   *
   * @param orderId
   * @param config
   *
   */
  convertOrderStatus(
    orderId: string,
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({orderId});

    return this.signRequest(
      'GET',
      '/sapi/v1/convert/orderStatus',
      {orderId},
      config,
    );
  }

  /**
   * Get Convert Trade History (USER_DATA)<br>
   *
   * GET /sapi/v1/convert/tradeFlow<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-convert-trade-history-user_data}
   *
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {object} [options]
   * @param config
   * @param {number} [options.limit] - Default 100, Max 1000
   * @param {number} [options.recvWindow]
   *
   */
  convertTradeHistory(
    startTime: number,
    endTime: number,
    options: ConvertTradeHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({startTime, endTime});

    return this.signRequest(
      'GET',
      '/sapi/v1/convert/tradeFlow',
      Object.assign(options, {startTime, endTime}),
      config,
    );
  }
}

export const Convert = new ConvertApi();
