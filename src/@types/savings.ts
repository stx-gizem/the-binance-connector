import { RecvWindowOption, TimeFilterOptions } from './core';

export type SavingsFlexibleProductsOptions = RecvWindowOption & {
  status?: string | 'SUBSCRIBABLE' | 'UNSUBSCRIBABLE' | 'ALL';
  featured?: string | 'ALL' | 'true';
  current?: number;
  size?: number;
};

export type SavingsProductListOptions = RecvWindowOption & {
  asset?: string;
  status?: string | 'SUBSCRIBABLE' | 'UNSUBSCRIBABLE' | 'ALL';
  isSortAsc?: boolean;
  sortBy?: string | 'START_TIME' | 'LOT_SIZE' | 'INTEREST_RATE' | 'DURATION';
  current?: number;
  size?: number;
};

export type SavingsCustomizedPositionOptions = RecvWindowOption & {
  projectId?: string | number;
  status?: string | 'HOLDING' | 'REDEEMED';
};

export type SavingsPurchaseRecordOptions = RecvWindowOption &
  TimeFilterOptions & {
    current?: number;
    size?: number;
    asset?: string;
  };
