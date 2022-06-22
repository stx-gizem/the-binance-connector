import { BinanceApi } from './binance-api';
import { ConfigOptions } from '../../@types/config/options';
import {
  hasOneOfParameters,
  validateRequiredParameters,
} from '../../helpers/validation';
import { RecvWindowOption } from '../../@types/core';
import {
  CancelAllOpenMarginOrderOptions,
  CancelMarginOCOOrderOptions,
  CancelMarginOrderOptions,
  GetMarginOCOOrderOptions,
  GetMarginOCOOrdersOptions,
  GetMarginOpenOCOOrdersOptions,
  IsolatedMarginAccountInfoOptions,
  IsolatedMarginTierOptions,
  IsolatedMarginTransferHistoryOptions,
  MarginAllOrdersOptions,
  MarginBorrowOptions,
  MarginFeeOptions,
  MarginForceLiquidationRecordOptions,
  MarginInterestHistoryOptions,
  MarginInterestRateHistoryOptions,
  MarginLoanRecordOptions,
  MarginMaxBorrowableOptions,
  MarginMyTradesOptions,
  MarginOCOOrderOptions,
  MarginOpenOrdersOptions,
  MarginOrderCountOptions,
  MarginOrderOptions,
  MarginTransferHistoryOptions,
  NewMarginOrderOptions,
} from '../../@types/margin';

class MarginApi extends BinanceApi {
  /**
   * Cross Margin Account Transfer (MARGIN)<br>
   *
   * POST /sapi/v1/margin/transfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#cross-margin-account-transfer-margin}
   *
   * @param {string} asset
   * @param {number} amount
   * @param {number} type - 1: transfer from main account to margin account
   *    <br>2: transfer from margin account to main account
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginTransfer(
    asset: string,
    amount: any,
    type: number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset, amount, type });

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/transfer',
      Object.assign(options, {
        asset: asset.toUpperCase(),
        amount,
        type,
      }),
      config,
    );
  }

  /**
   * Margin Account Borrow (MARGIN)<br>
   *
   * POST /sapi/v1/margin/load<br>
   *
   * Apply for a loan.<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-borrow-margin}
   *
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - TRUE or FALSE
   * @param {string} [options.symbol] - isolated symbol
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginBorrow(
    asset: string,
    amount: any,
    options: MarginBorrowOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset, amount });

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/loan',
      Object.assign(options, {
        asset: asset.toUpperCase(),
        amount,
      }),
      config,
    );
  }

  /**
   * Margin Account Repay(MARGIN)<br>
   *
   * POST /sapi/v1/margin/repay<br>
   *
   * Repay loan for margin account.<br>
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-repay-margin}
   *
   * @param {string} asset
   * @param {string} amount
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - TRUE or FALSE
   * @param {string} [options.symbol]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginRepay(
    asset: string,
    amount: any,
    options: MarginBorrowOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset, amount });

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/repay',
      Object.assign(options, {
        asset: asset.toUpperCase(),
        amount,
      }),
      config,
    );
  }

  /**
   * Query Margin Asset (MARKET_DATA)<br>
   *
   * GET /sapi/v1/margin/asset<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-asset-market_data}
   *
   * @param {string} asset
   * @param config
   */
  marginAsset(asset: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ asset });

    return this.publicRequest(
      'GET',
      '/sapi/v1/margin/asset',
      { asset: asset.toUpperCase() },
      config,
    );
  }

  /**
   * Query Cross Margin Pair (MARKET_DATA)<br>
   *
   * GET /sapi/v1/margin/pair<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-pair-market_data}
   *
   * @param {string} symbol
   * @param config
   */
  marginPair(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ symbol });

    return this.publicRequest(
      'GET',
      '/sapi/v1/margin/pair',
      { symbol: symbol.toUpperCase() },
      config,
    );
  }

  /**
   * Get All Margin Assets (MARKET_DATA)<br>
   *
   * GET /sapi/v1/margin/allAssets<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-margin-assets-market_data}
   */
  marginAllAssets(config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/sapi/v1/margin/allAssets', {}, config);
  }

  /**
   * Get All Cross Margin Pairs (MARKET_DATA)<br>
   *
   * GET /sapi/v1/margin/allPairs<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-cross-margin-pairs-market_data}
   */
  marginAllPairs(config: ConfigOptions = {}) {
    return this.publicRequest('GET', '/sapi/v1/margin/allPairs', {}, config);
  }

  /**
   * Query Margin PriceIndex (MARKET_DATA)<br>
   *
   * GET /sapi/v1/margin/priceIndex<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-priceindex-market_data}
   *
   * @param {string} symbol
   * @param config
   */
  marginPairIndex(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ symbol });

    return this.publicRequest(
      'GET',
      '/sapi/v1/margin/priceIndex',
      { symbol: symbol.toUpperCase() },
      config,
    );
  }

  /**
   * Margin Account New Order (TRADE)<br>
   *
   * POST /sapi/v1/margin/order<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-new-order-trade}
   *
   * @param {string} symbol
   * @param {string} side - BUY or SELL
   * @param {string} type
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - TRUE or FALSE
   * @param {number} [options.quantity]
   * @param {number} [options.quoteOrderQty]
   * @param {number} [options.price]
   * @param {number} [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT,
   *    TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
   * @param {string} [options.newClientOrderId] - A unique id among open orders.
   *    Automatically generated if not sent.
   * @param {number} [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT,
   *    and TAKE_PROFIT_LIMIT to create an iceberg order.
   * @param {string} [options.newOrderRespType] - Set the response JSON. ACK, RESULT, or FULL;
   *    MARKET and LIMIT order types default to FULL, all other orders default to ACK.
   * @param {string} [options.sideEffectType] - NO_SIDE_EFFECT, MARGIN_BUY, AUTO_REPAY;
   *    default NO_SIDE_EFFECT.
   * @param {string} [options.timeInForce] - GTC, IOC, FOK
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  newMarginOrder(
    symbol: string,
    side: string | 'BUY' | 'SELL',
    type: string,
    options: NewMarginOrderOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol, side, type });

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        type: type.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Margin Account Cancel Order (TRADE)<br>
   *
   * DELETE /sapi/v1/margin/order<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-order-trade}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - TRUE or FALSE
   * @param {number} [options.orderId]
   * @param {string} [options.origClientOrderId]
   * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel.
   *    Automatically generated by default.
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  cancelMarginOrder(
    symbol: string,
    options: CancelMarginOrderOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.signRequest(
      'DELETE',
      '/sapi/v1/margin/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Margin Account Cancel all Open Orders on a Symbol (TRADE)<br>
   *
   * DELETE /sapi/v1/margin/openOrders<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-all-open-orders-on-a-symbol-trade}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - TRUE or FALSE, default "FALSE"
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  cancelAllOpenMarginOrder(
    symbol: string,
    options: CancelAllOpenMarginOrderOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.signRequest(
      'DELETE',
      '/sapi/v1/margin/openOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Get Cross Margin Transfer History (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/transfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-cross-margin-transfer-history-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {string} [options.type] - ROLL_IN, ROLL_OUT
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10 Max:100
   * @param {boolean} [options.archived] - Default: false. Set to true for archived data from 6 months ago
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginTransferHistory(
    options: MarginTransferHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest('GET', '/sapi/v1/margin/transfer', options, config);
  }

  /**
   * Query Loan Record (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/loan<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-loan-record-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param config
   * @param {string} [options.isolatedSymbol]
   * @param {number} [options.txId] - the tranId in POST /sapi/v1/margin/loan
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10 Max:100
   * @param {boolean} [options.archived] - Default: false. Set to true for archived data from 6 months ago
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginLoanRecord(
    asset: string,
    options: MarginLoanRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset });

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/loan',
      Object.assign(options, {
        asset: asset.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Query Repay Record (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/repay<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-repay-record-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param config
   * @param {string} [options.isolatedSymbol]
   * @param {number} [options.txId] - return of /sapi/v1/margin/repay
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10 Max:100
   * @param {boolean} [options.archived] - Default: false. Set to true for archived data from 6 months ago
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginRepayRecord(
    asset: string,
    options: MarginLoanRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset });

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/repay',
      Object.assign(options, {
        asset: asset.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Get Interest History (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/interestHistory<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-interest-history-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {string} [options.isolatedSymbol]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10 Max:100
   * @param {boolean} [options.archived] - Default: false. Set to true for archived data from 6 months ago
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginInterestHistory(
    options: MarginInterestHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/interestHistory',
      options,
      config,
    );
  }

  /**
   * Get Force Liquidation Record (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/forceLiquidationRec<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-force-liquidation-record-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {string} [options.isolatedSymbol]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10 Max:100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginForceLiquidationRecord(
    options: MarginForceLiquidationRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/forceLiquidationRec',
      options,
      config,
    );
  }

  /**
   * Query Cross Margin Account Details (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-account-details-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginAccount(options: RecvWindowOption = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/sapi/v1/margin/account', options, config);
  }

  /**
   * Query Margin Account's Order (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/order<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-order-user_data}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - TRUE or FALSE, default "FALSE"
   * @param {number} [options.orderId]
   * @param {string} [options.origClientOrderId]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginOrder(
    symbol: string,
    options: MarginOrderOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Query Margin Account's Open Order (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/openOrders<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-open-orders-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.symbol]
   * @param {string} [options.isIsolated] - TRUE or FALSE, default "FALSE"
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginOpenOrders(
    options: MarginOpenOrdersOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/openOrders',
      options,
      config,
    );
  }

  /**
   * Query Margin Account's All Order (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/allOrders<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-all-orders-user_data}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - TRUE or FALSE, default "FALSE"
   * @param {number} [options.orderId]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - Default 500; max 500.
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginAllOrders(
    symbol: string,
    options: MarginAllOrdersOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/allOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Marign Account New OCO (TRADE)<br>
   *
   * POST /sapi/v1/margin/order/oco<br>
   *
   * - Price Restrictions:<br>
   * SELL: Limit Price > Last Price > Stop Price<br>
   * BUY: Limit Price < Last Price < Stop Price<br>
   * - Quantity Restrictions:<br>
   * Both legs must have the same quantity<br>
   * ICEBERG quantities however do not have to be the same.<br>
   * - Order Rate Limit:<br>
   * OCO counts as 2 orders against the order rate limit.<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#marign-account-new-oco-trade}
   *
   * @param {string} symbol
   * @param {string} side
   * @param {number} quantity
   * @param {number} price
   * @param {number} stopPrice
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - For isolated margin or not, "TRUE", "FALSE", default "FALSE"
   * @param {string} [options.listClientOrderId]
   * @param {string} [options.limitClientOrderId] - A unique Id for the limit order
   * @param {number} [options.limitIcebergQty]
   * @param {string} [options.stopClientOrderId] - A unique Id for the stop loss/stop loss limit leg.
   * @param {number} [options.stopLimitPrice] - If provided, stopLimitTimeInForce is required.
   * @param {number} [options.stopIcebergQty]
   * @param {string} [options.stopLimitTimeInForce] - GTC/ FOK/ IOC
   * @param {string} [options.newOrderRespType]
   * @param {string} [options.sideEffectType] - NO_SIDE_EFFECT, MARGIN_BUY, AUTO_REPAY; default NO_SIDE_EFFECT.
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginOCOOrder(
    symbol: string,
    side: string,
    quantity: any,
    price: any,
    stopPrice: any,
    options: MarginOCOOrderOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol, side, quantity, price, stopPrice });

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/order/oco',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        quantity,
        price,
        stopPrice,
      }),
      config,
    );
  }

  /**
   * Margin Account Cancel OCO (TRADE)<br>
   *
   * DELETE /sapi/v1/margin/orderList<br>
   *
   * - Either orderListId or listClientOrderId must be provided<br>
   * - Canceling an individual leg will cancel the entire OCO<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-oco-trade}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - For isolated margin or not, "TRUE", "FALSE", default "FALSE"
   * @param {number} [options.orderListId]
   * @param {string} [options.listClientOrderId]
   * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default.
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  cancelMarginOCOOrder(
    symbol: string,
    options: CancelMarginOCOOrderOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });
    hasOneOfParameters({
      orderListId: options.orderListId,
      listClientOrderId: options.listClientOrderId,
    });

    return this.signRequest(
      'DELETE',
      '/sapi/v1/margin/orderList',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Query Margin Account's OCO (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/orderList<br>
   *
   * Either orderListId or origClientOrderId must be provided<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-oco-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - For isolated margin or not, "TRUE", "FALSE", default "FALSE"
   * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
   * @param {number} [options.orderListId]
   * @param {string} [options.origClientOrderId]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  getMarginOCOOrder(
    options: GetMarginOCOOrderOptions = {},
    config: ConfigOptions = {},
  ) {
    hasOneOfParameters({
      orderListId: options.orderListId,
      origClientOrderId: options.origClientOrderId,
    });
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/orderList',
      options,
      config,
    );
  }

  /**
   * Query Marign Account's all OCO (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/allOrderList<br>
   *
   * Retrieves all OCO for a specific margin account based on provided optional parameters.<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-marign-account-39-s-all-oco-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - For isolated margin or not, "TRUE", "FALSE", default "FALSE"
   * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
   * @param {number} [options.fromId] - If provided, neither startTime nor endTime can be sent
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - Default Value: 500; Max Value: 1000
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  getMarginOCOOrders(
    options: GetMarginOCOOrdersOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/allOrderList',
      options,
      config,
    );
  }

  /**
   * Query Margin Account's Open OCO (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/openOrderList<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-open-oco-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - For isolated margin or not, "TRUE", "FALSE", default "FALSE"
   * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  getMarginOpenOCOOrders(
    options: GetMarginOpenOCOOrdersOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/openOrderList',
      options,
      config,
    );
  }

  /**
   * Query Margin Account's Trade List (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/myTrades<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-trade-list-user_data}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - Default 500; max 500.
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.fromId] - TradeId to fetch from. Default gets most recent trades.
   * @param {number} [options.limit] - Default 500; max 1000.
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginMyTrades(
    symbol: string,
    options: MarginMyTradesOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/myTrades',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Query Max Borrow (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/maxBorrowable<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-max-borrow-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param config
   * @param {string} [options.isolatedSymbol]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginMaxBorrowable(
    asset: string,
    options: MarginMaxBorrowableOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset });

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/maxBorrowable',
      Object.assign(options, {
        asset: asset.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Query Max Transfer-Out Amount (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/maxTransferable<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-max-transfer-out-amount-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param config
   * @param {string} [options.isolatedSymbol]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginMaxTransferable(
    asset: string,
    options: MarginMaxBorrowableOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset });

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/maxTransferable',
      Object.assign(options, {
        asset: asset.toUpperCase(),
      }),
      config,
    );
  }

  /**
   * Query Margin Interest Rate History (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/interestRateHistory<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-interest-rate-history-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param config
   * @param {number} [options.vipLevel] - Default: user's vip level
   * @param {number} [options.startTime] - Default: 7 days ago
   * @param {number} [options.endTime] - Default: present. Maximum range: 1 months.
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  marginInterestRateHistory(
    asset: string,
    options: MarginInterestRateHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset });
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/interestRateHistory',
      Object.assign(options, { asset }),
      config,
    );
  }

  /**
   * Isolated Margin Account Transfer (MARGIN)<br>
   *
   * POST /sapi/v1/margin/isolated/transfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#isolated-margin-account-transfer-margin}
   *
   * @param {string} asset - asset, such as BTC
   * @param {string} symbol
   * @param {string} transFrom - "SPOT", "ISOLATED_MARGIN"
   * @param {string} transTo - "SPOT", "ISOLATED_MARGIN"
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - No more than 60000
   */
  isolatedMarginTransfer(
    asset: string,
    symbol: string,
    transFrom: string | 'SPOT' | 'ISOLATED_MARGIN',
    transTo: string | 'SPOT' | 'ISOLATED_MARGIN',
    amount,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset, symbol, transFrom, transTo, amount });
    return this.signRequest(
      'POST',
      '/sapi/v1/margin/isolated/transfer',
      Object.assign(options, { asset, symbol, transFrom, transTo, amount }),
      config,
    );
  }

  /**
   * Get Isolated Margin Transfer History (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/isolated/transfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-isolated-margin-transfer-history-user_data}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {string} [options.transFrom] - "SPOT", "ISOLATED_MARGIN"
   * @param {string} [options.transTo] - "SPOT", "ISOLATED_MARGIN"
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Current page, default 1
   * @param {number} [options.size] - Default 10, max 100
   * @param {number} [options.recvWindow] - No more than 60000
   */
  isolatedMarginTransferHistory(
    symbol: string,
    options: IsolatedMarginTransferHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/isolated/transfer',
      Object.assign(options, { symbol }),
      config,
    );
  }

  /**
   * Query Isolated Margin Account Info (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/isolated/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-account-info-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.symbols] - Max 5 symbols can be sent; separated by ",". e.g. "BTCUSDT,BNBUSDT,ADAUSDT"
   * @param {number} [options.recvWindow] - No more than 60000
   */
  isolatedMarginAccountInfo(
    options: IsolatedMarginAccountInfoOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/isolated/account',
      options,
      config,
    );
  }

  /**
   * Disable Isolated Margin Account (TRADE)<br>
   *
   * DELETE /sapi/v1/margin/isolated/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#disable-isolated-margin-account-trade}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - No more than 60000
   */
  disableIsolatedMarginAccount(
    symbol: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });
    return this.signRequest(
      'DELETE',
      '/sapi/v1/margin/isolated/account',
      Object.assign(options, { symbol }),
      config,
    );
  }

  /**
   * Enable Isolated Margin Account (TRADE)<br>
   *
   * POST /sapi/v1/margin/isolated/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#enable-isolated-margin-account-trade}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - No more than 60000
   */
  enableIsolatedMarginAccount(
    symbol: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });
    return this.signRequest(
      'POST',
      '/sapi/v1/margin/isolated/account',
      Object.assign(options, { symbol }),
      config,
    );
  }

  /**
   * Query Enabled Isolated Margin Account Limit (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/isolated/accountLimit<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-enabled-isolated-margin-account-limit-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - No more than 60000
   */
  isolatedMarginAccountLimit(
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/isolated/accountLimit',
      options,
      config,
    );
  }

  /**
   * Query Isolated Margin Symbol (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/isolated/pair<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-symbol-user_data}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - No more than 60000
   */
  isolatedMarginSymbol(
    symbol: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/isolated/pair',
      Object.assign(options, { symbol }),
      config,
    );
  }

  /**
   * Get All Isolated Margin Symbol(USER_DATA)<br>
   *
   * GET /sapi/v1/margin/isolated/allPairs<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-isolated-margin-symbol-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - No more than 60000
   */
  isolatedMarginAllSymbols(
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/isolated/allPairs',
      options,
      config,
    );
  }

  /**
   * Query Cross Margin Fee Data (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/crossMarginData<br>
   *
   * Get cross margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-fee-data-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.vipLevel] - User's current specific margin data will be returned if vipLevel is omitted
   * @param {string} [options.coin]
   * @param {number} [options.recvWindow] - No more than 60000
   */
  marginFee(options: MarginFeeOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/crossMarginData',
      options,
      config,
    );
  }

  /**
   * Query Isolated Margin Fee Data (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/isolatedMarginData<br>
   *
   * Get isolated margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-fee-data-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.vipLevel] - User's current specific margin data will be returned if vipLevel is omitted
   * @param {string} [options.symbol]
   * @param {number} [options.recvWindow] - No more than 60000
   */
  isolatedMarginFee(
    options: MarginFeeOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/isolatedMarginData',
      options,
      config,
    );
  }

  /**
   * Query Isolated Margin Tier Data (USER_DATA)<br>
   *
   * GET /sapi/v1/margin/isolatedMarginTier<br>
   *
   * Get isolated margin tier data collection with any tier as https://www.binance.com/en/margin-data
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-fee-data-user_data}
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param config
   * @param {string} [options.tier] - All margin tier data will be returned if tier is omitted
   * @param {number} [options.recvWindow] - No more than 60000
   */
  isolatedMarginTier(
    symbol: string,
    options: IsolatedMarginTierOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol });

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/isolatedMarginTier',
      Object.assign(options, { symbol }),
      config,
    );
  }

  /**
   * Query Current Margin Order Count Usage (TRADE)<br>
   *
   * GET /sapi/v1/margin/rateLimit/order<br>
   *
   * Displays the user's current margin order count usage for all intervals.
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-current-margin-order-count-usage-trade}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.isIsolated] - for isolated margin or not, "TRUE", "FALSE"，default "FALSE"
   * @param {string} [options.symbol] - isolated symbol, mandatory for isolated margin
   * @param {number} [options.recvWindow] - No more than 60000
   */
  marginOrderCount(
    options: MarginOrderCountOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/rateLimit/order',
      options,
      config,
    );
  }
}

export const Margin = new MarginApi();
