import { FilterOptions, RecvWindowOption } from './core';

export interface PoolIdOption {
  poolId?: number;
}

export type BswapLiquidityOptions = PoolIdOption & RecvWindowOption;

export type BswapLiquidityAddOptions = RecvWindowOption & {
  type?: string;
};

export type BswapLiquidityOperationRecordOptions = PoolIdOption &
  RecvWindowOption &
  FilterOptions & {
    operationId?: number;
    operation?: 'ADD' | 'REMOVE';
  };

export type BswapSwapHistoryOptions = FilterOptions &
  RecvWindowOption & {
    swapId?: number;
    status?: number;
    baseAsset?: string;
    quoteAsset?: string;
  };

export type BswapGetPoolConfigOptions = RecvWindowOption & PoolIdOption;

export type BswapRewardOptions = RecvWindowOption & {
  type?: number;
};

export type BswapClaimedHistoryOptions = PoolIdOption &
  FilterOptions &
  RecvWindowOption & {
    type?: number;
    assetRewards?: string;
  };
