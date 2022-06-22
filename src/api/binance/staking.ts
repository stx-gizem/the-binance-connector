import { BinanceApi } from './binance-api';
import { ConfigOptions } from '../../@types/config/options';
import { validateRequiredParameters } from '../../helpers/validation';
import {
  StakingHistoryOptions,
  StakingProductListOptions,
  StakingProductPositionOptions,
  StakingPurchaseProductOptions,
  StakingRedeemProductOptions,
} from '../../@types/staking';
import { RecvWindowOption } from '../../@types/core';

class StakingApi extends BinanceApi {
  /**
   * Get Staking Product List (USER_DATA)<br>
   *
   * GET /sapi/v1/staking/productList<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-staking-product-list-user_data}
   *
   * @param {string} product - * `STAKING` - for Locked Staking, * `F_DEFI` - for flexible DeFi Staking, * `L_DEFI` - for locked DeFi Staking
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {number} [options.current] - Currently querying page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10, Max:100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  stakingProductList(
    product: string,
    options: StakingProductListOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ product });
    return this.signRequest(
      'GET',
      '/sapi/v1/staking/productList',
      Object.assign(options, {
        product,
      }),
      config,
    );
  }

  /**
   * Purchase Staking Product (USER_DATA)<br>
   *
   * POST /sapi/v1/staking/purchase<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#purchase-staking-product-user_data}
   *
   * @param {string} product - * `STAKING` - for Locked Staking, * `F_DEFI` - for flexible DeFi Staking, * `L_DEFI` - for locked DeFi Staking
   * @param {string} productId
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {string} [options.renewable] - true or false, default false. Active if product is `STAKING` or `L_DEFI`
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  stakingPurchaseProduct(
    product: string,
    productId: string | number,
    amount: any,
    options: StakingPurchaseProductOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ product, productId, amount });
    return this.signRequest(
      'POST',
      '/sapi/v1/staking/purchase',
      Object.assign(options, {
        product,
        productId,
        amount,
      }),
      config,
    );
  }

  /**
   * Redeem Staking Product (USER_DATA)<br>
   *
   * POST /sapi/v1/staking/redeem<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#redeem-staking-product-user_data}
   *
   * @param {string} product - * `STAKING` - for Locked Staking, * `F_DEFI` - for flexible DeFi Staking, * `L_DEFI` - for locked DeFi Staking
   * @param {string} productId
   * @param {object} [options]
   * @param config
   * @param {string} [options.positionId] - Mandatory if product is `STAKING` or `L_DEFI`
   * @param {number} [options.amount] - Mandatory if product is `F_DEFI`
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  stakingRedeemProduct(
    product: string,
    productId: string | number,
    options: StakingRedeemProductOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ product, productId });
    return this.signRequest(
      'POST',
      '/sapi/v1/staking/redeem',
      Object.assign(options, {
        product,
        productId,
      }),
      config,
    );
  }

  /**
   * Get Staking Product Position (USER_DATA)<br>
   *
   * GET /sapi/v1/staking/position<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-staking-product-position-user_data}
   *
   * @param {string} product - * `STAKING` - for Locked Staking, * `F_DEFI` - for flexible DeFi Staking, * `L_DEFI` - for locked DeFi Staking
   * @param {object} [options]
   * @param config
   * @param {string} [options.productId]
   * @param {string} [options.asset]
   * @param {number} [options.current] - Currently querying the page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10, Max:100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  stakingProductPosition(
    product: string,
    options: StakingProductPositionOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ product });
    return this.signRequest(
      'GET',
      '/sapi/v1/staking/position',
      Object.assign(options, {
        product,
      }),
      config,
    );
  }

  /**
   * Get Staking History (USER_DATA)<br>
   *
   * GET /sapi/v1/staking/stakingRecord<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-staking-history-user_data}
   *
   * @param {string} product - * `STAKING` - for Locked Staking, * `F_DEFI` - for flexible DeFi Staking, * `L_DEFI` - for locked DeFi Staking
   * @param {string} txnType - `SUBSCRIPTION`, `REDEMPTION`, `INTEREST`
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.current] - Currently querying the page. Start from 1. Default:1
   * @param {number} [options.size] - Default:10, Max:100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  stakingHistory(
    product: string,
    txnType: string | 'SUBSCRIPTION' | 'REDEMPTION' | 'INTEREST',
    options: StakingHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ product, txnType });
    return this.signRequest(
      'GET',
      '/sapi/v1/staking/stakingRecord',
      Object.assign(options, {
        product,
        txnType,
      }),
      config,
    );
  }

  /**
   * Set Auto Staking (USER_DATA)<br>
   *
   * POST /sapi/v1/staking/setAutoStaking<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#set-auto-staking-user_data}
   *
   * @param {string} product - * `STAKING` - for Locked Staking, * `L_DEFI` - for locked DeFi Staking
   * @param {string} positionId
   * @param {string} renewable - true or false
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  stakingSetAutoStaking(
    product: string,
    positionId: string,
    renewable: string | 'true' | 'false',
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ product, positionId, renewable });
    return this.signRequest(
      'POST',
      '/sapi/v1/staking/setAutoStaking',
      Object.assign(options, {
        product,
        positionId,
        renewable,
      }),
      config,
    );
  }

  /**
   * Get Personal Left Quota of Staking Product (USER_DATA)<br>
   *
   * GET /sapi/v1/staking/personalLeftQuota<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-personal-left-quota-of-staking-product-user_data}
   *
   * @param {string} product - * `STAKING` - for Locked Staking, * `F_DEFI` - for flexible DeFi Staking, * `L_DEFI` - for locked DeFi Staking
   * @param {string} productId
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  stakingProductQuota(
    product: string,
    productId: string | number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ product, productId });
    return this.signRequest(
      'GET',
      '/sapi/v1/staking/personalLeftQuota',
      Object.assign(options, {
        product,
        productId,
      }),
      config,
    );
  }
}

export const Staking = new StakingApi();
