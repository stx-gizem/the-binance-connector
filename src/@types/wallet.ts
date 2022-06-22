import { FilterOptions, RecvWindowOption, TimeFilterOptions } from './core';

export type AccountSnapshotOptions = RecvWindowOption & FilterOptions;

export type WithdrawOptions = RecvWindowOption & {
  withdrawOrderId?: string;
  network?: string;
  addressTag?: string;
  transactionFeeFlag?: boolean;
  name?: string;
  walletType?: number | 0 | 1;
};

export type DepositHistoryOptions = RecvWindowOption &
  FilterOptions & {
    coin?: string;
    status?: number | 0 | 6 | 1;
    offset?: number;
  };

export type WithdrawHistoryOptions = RecvWindowOption &
  FilterOptions & {
    coin?: string;
    status?: number | 0 | 2 | 1 | 3 | 4 | 5;
    offset?: number;
    withdrawOrderId?: string;
  };

export type DepositAddressOptions = RecvWindowOption & {
  network?: string;
};

export type DustLogOptions = RecvWindowOption & TimeFilterOptions;

export type AssetDevidendRecordOptions = RecvWindowOption &
  FilterOptions & {
    asset?: string;
  };

export type AssetDetailOptions = RecvWindowOption & {
  asset?: string;
};

export type TradeFeeOptions = RecvWindowOption & {
  symbol?: string;
};

export type UserUniversalTransferOptions = RecvWindowOption & {
  fromSymbol?: string;
  toSymbol?: string;
};

export type UserUniversalTransferHistoryOptions = RecvWindowOption &
  TimeFilterOptions & {
    current?: number;
    size?: number;
    fromSymbol?: string;
    toSymbol?: string;
  };

export type FundingWalletOptions = RecvWindowOption & {
  asset?: string;
  needBtcValuation?: string | 'true' | 'false';
};
