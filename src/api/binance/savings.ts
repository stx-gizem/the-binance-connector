import { BinanceApi } from './binance-api';
import { validateRequiredParameters } from '../../helpers/validation';
import { ConfigOptions } from '../../@types/config/options';
import {
  SavingsCustomizedPositionOptions,
  SavingsFlexibleProductsOptions,
  SavingsProductListOptions,
  SavingsPurchaseRecordOptions,
} from '../../@types/savings';
import { RecvWindowOption } from '../../@types/core';

class SavingsApi extends BinanceApi {
  /**
   * Get Flexible Product List (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/daily/product/list<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-flexible-product-list-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.status] - "ALL", "SUBSCRIBABLE", "UNSUBSCRIBABLE"; default "ALL"
   * @param {string} [options.featured] - "ALL", "true"; default "ALL"
   * @param {number} [options.current] - Current query page. Default: 1, Min: 1
   * @param {number} [options.size] - Default: 50, Max: 100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsFlexibleProducts(
    options: SavingsFlexibleProductsOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/lending/daily/product/list',
      options,
      config,
    );
  }

  /**
   * Get Left Daily Purchase Quota of Flexible Product (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/daily/userLeftQuota<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-left-daily-purchase-quota-of-flexible-product-user_data}
   *
   * @param {string} productId
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsFlexibleUserLeftQuota(
    productId: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ productId });
    return this.signRequest(
      'GET',
      '/sapi/v1/lending/daily/userLeftQuota',
      Object.assign(options, {
        productId,
      }),
      config,
    );
  }

  /**
   * Purchase Flexible Product (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/daily/purchase<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#purchase-flexible-product-user_data}
   *
   * @param {string} productId
   * @param {string} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsPurchaseFlexibleProduct(
    productId: string,
    amount: string | number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ productId, amount });

    return this.signRequest(
      'POST',
      '/sapi/v1/lending/daily/purchase',
      Object.assign(options, {
        productId,
        amount,
      }),
      config,
    );
  }

  /**
   * Get Left Daily Redemption Quota of Flexible Product (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/daily/userRedemptionQuota<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-left-daily-redemption-quota-of-flexible-product-user_data}
   *
   * @param {string} productId
   * @param {string} type - "FAST", "NORMAL"
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsFlexibleUserRedemptionQuota(
    productId: string,
    type: string | 'FAST' | 'NORMAL',
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ productId, type });

    return this.signRequest(
      'GET',
      '/sapi/v1/lending/daily/userRedemptionQuota',
      Object.assign(options, {
        productId,
        type,
      }),
      config,
    );
  }

  /**
   * Redeem Flexible Product (USER_DATA)<br>
   *
   * POST /sapi/v1/lending/daily/redeem<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#redeem-flexible-product-user_data}
   *
   * @param {string} productId
   * @param {number} amount
   * @param {string} type - "FAST", "NORMAL"
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsFlexibleRedeem(
    productId: string,
    amount: string | number,
    type: string | 'FAST' | 'NORMAL',
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ productId, amount, type });

    return this.signRequest(
      'POST',
      '/sapi/v1/lending/daily/redeem',
      Object.assign(options, {
        productId,
        amount,
        type,
      }),
      config,
    );
  }

  /**
   * Get Flexible Product Position (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/daily/token/position<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-flexible-product-position-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsFlexibleProductPosition(
    asset: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset });

    return this.signRequest(
      'GET',
      '/sapi/v1/lending/daily/token/position',
      Object.assign(options, {
        asset,
      }),
      config,
    );
  }

  /**
   * Get Fixed and Activity Project List(USER_DATA)<br>
   *
   * GET /sapi/v1/lending/project/list<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-fixed-and-activity-project-list-user_data}
   *
   * @param {string} type - "ACTIVITY", "CUSTOMIZED_FIXED"
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {string} [options.status] - "ALL", "SUBSCRIBABLE", "UNSUBSCRIBABLE"; default "ALL"
   * @param {boolean} [options.isSortAsc] - default "true"
   * @param {string} [options.sortBy] - "START_TIME", "LOT_SIZE", "INTEREST_RATE", "DURATION"; default "START_TIME"
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10, Max:100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsProductList(
    type: string | 'ACTIVITY' | 'CUSTOMIZED_FIXED',
    options: SavingsProductListOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ type });

    return this.signRequest(
      'GET',
      '/sapi/v1/lending/project/list',
      Object.assign(options, {
        type,
      }),
      config,
    );
  }

  /**
   * Purchase Fixed/Activity Project (USER_DATA)<br>
   *
   * POST /sapi/v1/lending/customizedFixed/purchase<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#purchase-fixed-activity-project-user_data}
   *
   * @param {string} projectId
   * @param {number} lot
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsPurchaseCustomizedProject(
    projectId: string,
    lot: string | number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ projectId, lot });

    return this.signRequest(
      'POST',
      '/sapi/v1/lending/customizedFixed/purchase',
      Object.assign(options, {
        projectId,
        lot,
      }),
      config,
    );
  }

  /**
   * Get Fixed/Activity Project Position (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/project/position/list<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-fixed-activity-project-position-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param config
   * @param {string} [options.projectId]
   * @param {string} [options.status] - "HOLDING", "REDEEMED"
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsCustomizedPosition(
    asset: string,
    options: SavingsCustomizedPositionOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset });

    return this.signRequest(
      'GET',
      '/sapi/v1/lending/project/position/list',
      Object.assign(options, {
        asset,
      }),
      config,
    );
  }

  /**
   * Lending Account (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/union/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#lending-account-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsAccount(options: RecvWindowOption = {}, config: ConfigOptions = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/lending/union/account',
      options,
      config,
    );
  }

  /**
   * Get Purchase Record (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/union/purchaseRecord<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-purchase-record-user_data}
   *
   * @param {string} lendingType - "DAILY" for flexible,
   *    "ACTIVITY" for activity, "CUSTOMIZED_FIXED" for fixed
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10, Max:100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsPurchaseRecord(
    lendingType: string | 'DAILY' | 'ACTIVITY' | 'CUSTOMIZED_FIXED',
    options: SavingsPurchaseRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ lendingType });

    return this.signRequest(
      'GET',
      '/sapi/v1/lending/union/purchaseRecord',
      Object.assign(options, {
        lendingType,
      }),
      config,
    );
  }

  /**
   * Get Redemption Record (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/union/redemptionRecord<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-redemption-record-user_data}
   *
   * @param {string} lendingType - "DAILY" for flexible,
   *    "ACTIVITY" for activity, "CUSTOMIZED_FIXED" for fixed
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10, Max:100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsRedemptionRecord(
    lendingType: string | 'DAILY' | 'ACTIVITY' | 'CUSTOMIZED_FIXED',
    options: SavingsPurchaseRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ lendingType });

    return this.signRequest(
      'GET',
      '/sapi/v1/lending/union/redemptionRecord',
      Object.assign(options, {
        lendingType,
      }),
      config,
    );
  }

  /**
   * Get Interest History (USER_DATA)<br>
   *
   * GET /sapi/v1/lending/union/interestHistory<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-interest-history-user_data-2}
   *
   * @param {string} lendingType - "DAILY" for flexible,
   *    "ACTIVITY" for activity, "CUSTOMIZED_FIXED" for fixed
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10, Max:100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  savingsInterestHistory(
    lendingType: string | 'DAILY' | 'ACTIVITY' | 'CUSTOMIZED_FIXED',
    options: SavingsPurchaseRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ lendingType });

    return this.signRequest(
      'GET',
      '/sapi/v1/lending/union/interestHistory',
      Object.assign(options, {
        lendingType,
      }),
      config,
    );
  }
}

export const Savings = new SavingsApi();
