import { UsdMFuturesApi } from "./usd-m-futures-api";
import { ConfigOptions } from "../../@types/config/options";
import { validateRequiredParameters } from "../../helpers/validation";
import {
  AccountTradeListOptions,
  AllOrdersOptions,
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
import { SymbolOption } from "../../@types/usd-m-futures/market";
import { TimeFilterOptions } from "../../@types/core";

class TradesUsdMApi extends UsdMFuturesApi {
  changePositionMode(dualSidePosition: 'true' | 'false', config: ConfigOptions = {}) {
    validateRequiredParameters({dualSidePosition});
    return this.signRequest('POST', '/fapi/v1/positionSide/dual', {dualSidePosition}, config);
  }

  getCurrentPositionMode(config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/positionSide/dual', {}, config);
  }

  changeMultiAssetsMode(multiAssetsMargin: 'true' | 'false', config: ConfigOptions = {}) {
    validateRequiredParameters({multiAssetsMargin});
    return this.signRequest('POST', '/fapi/v1/multiAssetsMargin', {multiAssetsMargin}, config);
  }

  getCurrentMultiAssetsMode(config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/multiAssetsMargin', {}, config);
  }

  newOrder(symbol: string, side: string, type: string, options: NewOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol, side, type});
    return this.signRequest('POST', '/fapi/v1/order', {
      symbol,
      side,
      type,
      ...options
    }, config);
  }

  placeMultipleOrders(batchOrders: any[], config: ConfigOptions = {}) {
    validateRequiredParameters({batchOrders});
    return this.signRequest('POST', '/fapi/v1/batchOrders', {batchOrders}, config);
  }

  getOrder(symbol: string, options: QueryOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/fapi/v1/order', {
      symbol,
      ...options
    }, config);
  }

  cancelOrder(symbol: string, options: CancelOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('DELETE', '/fapi/v1/order', {
      symbol,
      ...options
    }, config);
  }

  cancelAllOpenOrders(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('DELETE', '/fapi/v1/allOpenOrders', {symbol}, config);
  }

  cancelMultipleOrders(symbol: string, options: CancelMultipleOrdersOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('DELETE', '/fapi/v1/batchOrders', {
      symbol,
      ...options
    }, config);
  }

  autoCancelAllOpenOrders(symbol: string, countdownTime?: string | number, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      countdownTime
    });
    return this.signRequest('POST', '/fapi/v1/countdownCancelAll', {
      symbol,
      countdownTime
    }, config);
  }

  getCurrentOpenOrder(symbol: string, options: QueryOrderOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/fapi/v1/openOrder', {
      symbol,
      ...options
    }, config);
  }

  getCurrentAllOpenOrders(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/openOrders', options, config);
  }

  getAllOrders(symbol: string, options: AllOrdersOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/fapi/v1/allOrders', {
      symbol,
      ...options
    }, config);
  }

  futuresAccountBalanceV2(config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v2/balance', {}, config);
  }

  accountInformationV2(config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v2/account', {}, config);
  }

  changeInitialLeverage(symbol: string, leverage: number, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      leverage
    });
    return this.signRequest('POST', '/fapi/v1/leverage', {
      symbol,
      leverage
    }, config);
  }

  changeMarginType(symbol: string, marginType: MarginType | string, config: ConfigOptions = {}) {
    validateRequiredParameters({
      symbol,
      marginType
    });
    return this.signRequest('POST', '/fapi/v1/marginType', {
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
    return this.signRequest('POST', '/fapi/v1/positionMargin', {
      symbol,
      amount,
      type,
      ...options
    });
  }

  getPositionMarginChangeHistory(symbol: string, options: GetPositionMarginChangeHistoryOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/fapi/v1/positionMargin/history', {
      symbol,
      ...options
    }, config);
  }

  positionInformationV2(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/fapi/v2/positionRisk', {symbol}, config);
  }

  getAccountTradeList(symbol: string, options: AccountTradeListOptions = {}, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/fapi/v1/userTrades', {symbol, ...options}, config);
  }

  getIncomeHistory(options: GetIncomeHistoryOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/income', options, config);
  }

  notionalAndLeverageBrackets(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/leverageBracket', options, config);
  }

  positionADLQuantileEstimation(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/adlQuantile', options, config);
  }

  getUserForceOrders(options: GetUserForceOrdersOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/forceOrders', options, config);
  }

  futuresTradingQuantitativeRulesIndicators(options: SymbolOption = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/apiTradingStatus', options, config);
  }

  getCommissionRate(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({symbol});
    return this.signRequest('GET', '/fapi/v1/commissionRate', {symbol}, config);
  }

  getDownloadIdForFuturesTransactionHist(options: TimeFilterOptions = {}, config: ConfigOptions = {}) {
    return this.signRequest('GET', '/fapi/v1/income/asyn', options, config);
  }

  getFuturesTransactionHistDownloadLinkById(downloadId: string, config: ConfigOptions = {}) {
    validateRequiredParameters({downloadId});
    return this.signRequest('GET', '/fapi/v1/income/asyn/id', {downloadId}, config);
  }

}

export const UsdFuturesTrade = new TradesUsdMApi();
