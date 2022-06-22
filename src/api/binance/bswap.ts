import { BinanceApi } from './binance-api';
import { validateRequiredParameters } from '../../helpers/validation';
import { ConfigOptions } from '../../@types/config/options';
import { RecvWindowOption } from '../../@types/core';
import {
  BswapClaimedHistoryOptions,
  BswapGetPoolConfigOptions,
  BswapLiquidityAddOptions,
  BswapLiquidityOperationRecordOptions,
  BswapLiquidityOptions,
  BswapRewardOptions,
  BswapSwapHistoryOptions,
} from '../../@types/bswap';

class BswapApi extends BinanceApi {
  /**
   * List All Swap Pools (MARKET_DATA)<br>
   *
   * GET /sapi/v1/bswap/pools<br>
   *
   * Get metadata about all swap pools.<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#list-all-swap-pools-market_data}
   */
  bswapPools(config: ConfigOptions = {}) {
    return this.signRequest('GET', `/sapi/v1/bswap/pool`, {}, config);
  }

  /**
   * Get liquidity information of a pool (USER_DATA)<br>
   *
   * GET /sapi/v1/bswap/liquidity<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-liquidity-information-of-a-pool-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.poolId]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapLiquidity(
    options: BswapLiquidityOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest('GET', `/sapi/v1/bswap/liquidity`, options, config);
  }

  /**
   * Add Liquidity (TRADE)<br>
   *
   * POST /sapi/v1/bswap/liquidityAdd<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#add-liquidity-trade}
   *
   * @param {number} poolId
   * @param {string} asset
   * @param {number} quantity
   * @param {object} [options]
   * @param config
   * @param {string} [options.type] - "Single" to add a single token; "Combination" to add dual tokens. Default "Single"
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapLiquidityAdd(
    poolId: number,
    asset: string,
    quantity: number | string,
    options: BswapLiquidityAddOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ poolId, asset, quantity });

    return this.signRequest(
      'POST',
      `/sapi/v1/bswap/liquidityAdd`,
      Object.assign(options, {
        poolId,
        asset,
        quantity,
      }),
      config,
    );
  }

  /**
   * Remove Liquidity (TRADE)<br>
   *
   * POST /sapi/v1/bswap/liquidityRemove<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#remove-liquidity-trade}
   *
   * @param {number} poolId
   * @param {string} type -`SINGLE` for single asset removal, `COMBINATION` for combination of all coins removal
   * @param {string} asset
   * @param {number} shareAmount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapLiquidityRemove(
    poolId: number,
    type: string,
    asset: string,
    shareAmount: number | string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ poolId, type, asset, shareAmount });

    return this.signRequest(
      'POST',
      `/sapi/v1/bswap/liquidityRemove`,
      Object.assign(options, {
        poolId,
        type,
        asset,
        shareAmount,
      }),
      config,
    );
  }

  /**
   * Get Liquidity Operation Record (USER_DATA)<br>
   *
   * GET /sapi/v1/bswap/liquidityOps<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-liquidity-operation-record-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.operationId]
   * @param {number} [options.poolId]
   * @param {string} [options.operation] -`ADD` or `REMOVE`
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 3, max 100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapLiquidityOperationRecord(
    options: BswapLiquidityOperationRecordOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      `/sapi/v1/bswap/liquidityOps`,
      options,
      config,
    );
  }

  /**
   * Request Quote (USER_DATA)<br>
   *
   * Request a quote for swap quote asset (selling asset) for base asset (buying asset),
   * essentially price/exchange rates. quoteQty is quantity of quote asset (to sell).<br>
   * Please be noted the quote is for reference only, the actual price will change
   * as the liquidity changes, it's recommended to swap immediate after request a quote
   * for slippage prevention.<br>
   *
   * GET /sapi/v1/bswap/quote<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#request-quote-user_data}
   *
   * @param {string} quoteAsset
   * @param {string} baseAsset
   * @param {number} quoteQty
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapRequestQuote(
    quoteAsset: string,
    baseAsset: string,
    quoteQty: number | string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ quoteAsset, baseAsset, quoteQty });

    return this.signRequest(
      'GET',
      `/sapi/v1/bswap/quote`,
      Object.assign(options, {
        quoteAsset,
        baseAsset,
        quoteQty,
      }),
      config,
    );
  }

  /**
   * Swap (TRADE)<br>
   *
   * POST /sapi/v1/bswap/swap<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#swap-trade}
   *
   * @param {string} quoteAsset
   * @param {string} baseAsset
   * @param {number} quoteQty
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapSwap(
    quoteAsset: string,
    baseAsset: string,
    quoteQty: number | string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ quoteAsset, baseAsset, quoteQty });

    return this.signRequest(
      'POST',
      `/sapi/v1/bswap/swap`,
      Object.assign(options, {
        quoteAsset,
        baseAsset,
        quoteQty,
      }),
      config,
    );
  }

  /**
   * Get Swap History (USER_DATA)<br>
   *
   * GET /sapi/v1/bswap/swap<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#swap-trade}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.swapId]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.status] - 0: pending for swap, 1: success, 2: failed
   * @param {string} [options.baseAsset]
   * @param {string} [options.quoteAsset]
   * @param {number} [options.limit] - default 3, max 100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapSwapHistory(
    options: BswapSwapHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest('GET', `/sapi/v1/bswap/swap`, options, config);
  }

  /**
   * Get Pool Configure (USER_DATA)
   *
   * GET /sapi/v1/bswap/poolConfigure<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-pool-configure-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.poolId]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapGetPoolConfig(
    options: BswapGetPoolConfigOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      `/sapi/v1/bswap/poolConfigure`,
      options,
      config,
    );
  }

  /**
   * Add Liquidity Preview (USER_DATA)
   *
   * GET /sapi/v1/bswap/addLiquidityPreview<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#add-liquidity-preview-user_data}
   *
   * @param {number} poolId
   * @param {string} type - "SINGLE" for adding a single token;"COMBINATION" for adding dual tokens
   * @param {string} quoteAsset
   * @param {number} quoteQty
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapAddLiquidityPreview(
    poolId: number,
    type: string,
    quoteAsset: string,
    quoteQty: number | string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ poolId, type, quoteAsset, quoteQty });
    return this.signRequest(
      'GET',
      `/sapi/v1/bswap/addLiquidityPreview`,
      Object.assign(options, { poolId, type, quoteAsset, quoteQty }),
      config,
    );
  }

  /**
   * Remove Liquidity Preview (USER_DATA)
   *
   * GET /sapi/v1/bswap/removeLiquidityPreview<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#remove-liquidity-preview-user_data}
   *
   * @param {number} poolId
   * @param {string} type - Type is "SINGLE", remove and obtain a single token;Type is "COMBINATION", remove and obtain dual token.
   * @param {string} quoteAsset
   * @param {number} shareAmount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapRemoveLiquidityPreview(
    poolId: number,
    type: string,
    quoteAsset: string,
    shareAmount: number | string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ poolId, type, quoteAsset, shareAmount });
    return this.signRequest(
      'GET',
      `/sapi/v1/bswap/removeLiquidityPreview`,
      Object.assign(options, { poolId, type, quoteAsset, shareAmount }),
      config,
    );
  }

  /**
   * Get Unclaimed Rewards Record (USER_DATA)
   *
   * GET /sapi/v1/bswap/unclaimedRewards<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-unclaimed-rewards-record-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.type] - 0: Swap rewards,1:Liquidity rewards, default to 0
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapUnclaimedRewards(
    options: BswapRewardOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      `/sapi/v1/bswap/unclaimedRewards`,
      options,
      config,
    );
  }

  /**
   * Claim rewards (TRADE)
   *
   * POST /sapi/v1/bswap/claimRewards<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#claim-rewards-trade}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.type] - 0: Swap rewards,1:Liquidity rewards, default to 0
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapClaimRewards(
    options: BswapRewardOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'POST',
      `/sapi/v1/bswap/claimRewards`,
      options,
      config,
    );
  }

  /**
   * Get Claimed History (USER_DATA)
   *
   * GET /sapi/v1/bswap/claimedHistory<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-claimed-history-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.poolId]
   * @param {string} [options.assetRewards]
   * @param {number} [options.type] - 0: Swap rewards,1:Liquidity rewards, default to 0
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 3, max 100
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  bswapClaimedHistory(
    options: BswapClaimedHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      `/sapi/v1/bswap/claimedHistory`,
      options,
      config,
    );
  }
}

export const Bswap = new BswapApi();
