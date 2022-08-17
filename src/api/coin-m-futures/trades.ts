import { CoinMFuturesApi } from "./coin-m-futures-api";
import { ConfigOptions } from "../../@types/config/options";
import { validateRequiredParameters } from "../../helpers/validation";
import {
  CancelMultipleOrdersOptions,
  CancelOrderOptions,
  GetIncomeHistoryOptions,
  GetPositionMarginChangeHistoryOptions,
  GetUserForceOrdersOptions,
  MarginType,
  ModifyIsolatedPositionMarginOptions,
  NewOrderOptions,
  QueryOrderOptions
} from "../../@types/usd-m-futures/trades";
import {
  GetAccountTradeListOptions,
  GetAllOrdersOptions,
  GetCurrentAllOpenOrdersOptions,
  GetOrderModifyHistoryOptions,
  ModifyOrderOptions,
  NotionalBracketForSymbolOptions,
  PositionInformationOptions
} from "../../@types/coin-m-futures/trades";
import { SymbolOption } from "../../@types/usd-m-futures/market";

class TradesCoinMApi extends CoinMFuturesApi {
  changePositionMode(dualSidePosition: 'true' | 'false', config: ConfigOptions = {}) {
    validateRequiredParameters({dualSidePosition});
    return this.signRequest('POST', '/dapi/v1/positionSide/dual', {dualSidePosition}, config);
  }

  getCurrentPositionMode(config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/positionSide/dual', {}, config);
  }

  newOrder(symbol: string, side: string, type: string, options: NewOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol, side, type});
    return this.signRequest('POST', '/dapi/v1/order', {
      symbol,
      side,
      type,
      ...options
    }, config);
  }

  modifyOrder(symbol: string, side: string | 'SELL' | 'BUY', options: ModifyOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol, side});
    return this.signRequest('PUT', '/dapi/v1/order', {
      symbol,
      side,
      ...options,
    }, config);
  }

  placeMultipleOrders(batchOrders: any[], config: ConfigOptions = {}) {
    validateRequiredParameters({batchOrders});
    return this.signRequest('POST', '/dapi/v1/batchOrders', {batchOrders}, config);
  }

  modifyMultipleOrders(batchOrders: any[], config: ConfigOptions = {}) {
    validateRequiredParameters({batchOrders});
    return this.signRequest('PUT', '/dapi/v1/batchOrders', {batchOrders}, config);
  }

  getOrderModifyHistory(symbol: string, options: GetOrderModifyHistoryOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/dapi/v1/orderAmendment', {
      symbol,
      ...options
    }, config);
  }

  getOrder(symbol: string, options: QueryOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/dapi/v1/order', {
      symbol,
      ...options
    }, config);
  }

  cancelOrder(symbol: string, options: CancelOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('DELETE', '/dapi/v1/order', {
      symbol,
      ...options
    }, config);
  }

  cancelAllOpenOrders(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('DELETE', '/dapi/v1/allOpenOrders', {symbol}, config);
  }

  cancelMultipleOrders(symbol: string, options: CancelMultipleOrdersOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('DELETE', '/dapi/v1/batchOrders', {
      symbol,
      ...options
    }, config);
  }

  autoCancelAllOpenOrders(symbol: string, countdownTime?: string | number, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      countdownTime
    });
    return this.signRequest('POST', '/dapi/v1/countdownCancelAll', {
      symbol,
      countdownTime
    }, config);
  }

  getCurrentOpenOrder(symbol: string, options: QueryOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/dapi/v1/openOrder', {
      symbol,
      ...options
    }, config);
  }

  getCurrentAllOpenOrders(options: GetCurrentAllOpenOrdersOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/openOrders', options, config);
  }

  getAllOrders(options: GetAllOrdersOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/allOrders', options, config);
  }

  futuresAccountBalance(config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/balance', {}, config);
  }

  accountInformation(config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/account', {}, config);
  }

  changeInitialLeverage(symbol: string, leverage: number, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      leverage
    });
    return this.signRequest('POST', '/dapi/v1/leverage', {
      symbol,
      leverage
    }, config);
  }

  changeMarginType(symbol: string, marginType: MarginType | string, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      marginType
    });
    return this.signRequest('POST', '/dapi/v1/marginType', {
      symbol,
      marginType
    }, config);
  }

  modifyIsolatedPositionMargin(symbol: string, amount: string | number, type: 1 | 2 | number, options: ModifyIsolatedPositionMarginOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      amount,
      type
    });
    return this.signRequest('POST', '/dapi/v1/positionMargin', {
      symbol,
      amount,
      type,
      ...options
    });
  }

  getPositionMarginChangeHistory(symbol: string, options: GetPositionMarginChangeHistoryOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/dapi/v1/positionMargin/history', {
      symbol,
      ...options
    }, config);
  }

  positionInformation(options: PositionInformationOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/positionRisk', options, config);
  }

  getAccountTradeList(options: GetAccountTradeListOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/userTrades', options, config);
  }

  getIncomeHistory(options: GetIncomeHistoryOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/income', options, config);
  }

  notionalBracketForSymbol(options: NotionalBracketForSymbolOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/leverageBracket', options, config);
  }

  notionalBracketForPair(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v2/leverageBracket', options, config);
  }

  getUserForceOrders(options: GetUserForceOrdersOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/forceOrders', options, config);
  }

  positionADLQuantileEstimation(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/dapi/v1/adlQuantile', options, config);
  }

  getCommissionRate(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/dapi/v1/commissionRate', {symbol}, config);
  }
}

export const CoinFuturesTrade = new TradesCoinMApi();
