import { RecvWindowOption, TimeFilterOptions } from './core';

export type StakingProductListOptions = RecvWindowOption & {
  asset?: string;
  current?: number;
  size?: number;
};

export type StakingPurchaseProductOptions = RecvWindowOption & {
  renewable?: string;
};

export type StakingRedeemProductOptions = RecvWindowOption & {
  positionId?: string;
  amount?: number | string;
};

export type StakingProductPositionOptions = RecvWindowOption & {
  productId?: string | number;
  asset?: string;
  current?: number;
  size?: number;
};

export type StakingHistoryOptions = RecvWindowOption &
  TimeFilterOptions & {
    asset?: string;
    current?: number;
    size?: number;
  };
