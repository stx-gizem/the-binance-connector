import { BrokerApi } from "./broker-api";
import {
  ChangeSubAccountCommissionOptions, GetCoinFuturesCommissionOptions,
  GetUsdtFuturesCommissionOptions
} from "../../@types/broker/subAccountCommission";
import { ConfigOptions } from "../../@types/config/options";
import { validateRequiredParameters } from "../../helpers/validation";
import { RecvWindowOption } from "../../@types/core";

class SubAccountCommissionApi extends BrokerApi {

  /**
   * Change Sub Account Commission
   *
   * POST /sapi/v1/broker/subAccountApi/commission
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#change-sub-account-commission}
   *
   * @param {string} subAccountId
   * @param {number} makerCommission - 0.001
   * @param {number} takerCommission - 0.002
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   * @param {number} [options.marginMakerCommission]
   * @param {number} [options.marginTakerCommission]
   */
  changeCommission(subAccountId: string, makerCommission: number | string, takerCommission: number | string, options: ChangeSubAccountCommissionOptions = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({
      subAccountId,
      makerCommission,
      takerCommission,
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi/commission',
      {
        ...options,
        subAccountId,
        makerCommission,
        takerCommission,
      },
      config
    );
  }

  /**
   * Change Sub Account USDT-Ⓜ Futures Commission Adjustment
   *
   * POST /sapi/v1/broker/subAccountApi/commission/futures
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#change-sub-account-usdt-m-futures-commission-adjustment}
   *
   * @param {string} subAccountId
   * @param {string} symbol
   * @param {number} makerAdjustment - 100 for 0.01%
   * @param {number} takerAdjustment - 100 for 0.01%
   * @param {object} [options]
   * @param {number} [options.recvWindow]
   * @param config
   */
  changeUsdtFuturesCommission(
    subAccountId: string,
    symbol: string,
    makerAdjustment: number,
    takerAdjustment: number,
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      symbol,
      makerAdjustment,
      takerAdjustment
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi/commission/futures',
      {
        ...options,
        subAccountId,
        symbol,
        makerAdjustment,
        takerAdjustment
      },
      config
    );
  }

  /**
   * Query Sub Account USDT-Ⓜ Futures Commission Adjustment
   *
   * GET /sapi/v1/broker/subAccountApi/commission/futures
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-sub-account-usdt-m-futures-commission-adjustment}
   *
   * @param {string} subAccountId
   * @param {object} [options]
   * @param config
   * @param {string} [options.symbol]
   * @param {number} [options.recvWindow]
   */
  getUsdtFuturesCommission(
    subAccountId: string,
    options: GetUsdtFuturesCommissionOptions = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccountApi/commission/futures',
      {
        ...options,
        subAccountId
      },
      config
    );
  }

  /**
   * Change Sub Account COIN-Ⓜ Futures Commission Adjustment
   *
   * POST /sapi/v1/broker/subAccountApi/commission/coinFutures
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#change-sub-account-coin-m-futures-commission-adjustment}
   *
   * @param {string} subAccountId
   * @param {string} pair - BTCUSD
   * @param {number} makerAdjustment - 100 for 0.01%
   * @param {number} takerAdjustment - 100 for 0.01%
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  changeCoinFuturesCommission(
    subAccountId: string,
    pair: string,
    makerAdjustment: number,
    takerAdjustment: number,
    options: RecvWindowOption,
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      pair,
      makerAdjustment,
      takerAdjustment,
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccountApi/commission/coinFutures',
      {
        ...options,
        subAccountId,
        pair,
        makerAdjustment,
        takerAdjustment,
      },
      config
    );
  }

  /**
   * Query Sub Account COIN-Ⓜ Futures Commission Adjustment
   *
   * GET /sapi/v1/broker/subAccountApi/commission/coinFutures
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-sub-account-coin-m-futures-commission-adjustment}
   *
   * @param {string} subAccountId
   * @param {object} [options]
   * @param {string} [options.pair] - BTCUSD
   * @param {number} [options.recvWindow]
   * @param config
   */
  getCoinFuturesCommission(
    subAccountId: string,
    options: GetCoinFuturesCommissionOptions = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccountApi/commission/coinFutures',
      {
        ...options,
        subAccountId
      },
      config
    );
  }
}

export const SubAccountCommission = new SubAccountCommissionApi();
