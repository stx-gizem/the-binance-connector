import { FilterOptions, RecvWindowOption } from './core';

export type SubAccountListOptions = RecvWindowOption & {
  email?: string;
  isFreeze?: string | 'true' | 'false';
  page?: number;
  limit?: number;
};

export type SubAccountTransferHistoryOptions = RecvWindowOption &
  FilterOptions & {
    fromEmail?: string;
    toEmail?: string;
    page?: number;
  };

export type SubAccountDepositAddressOptions = RecvWindowOption & {
  network?: string;
};

export type SubAccountDepositHistoryOptions = RecvWindowOption &
  FilterOptions & {
    coin?: string;
    status?: number;
    offset?: number;
  };

export type SubAccountStatusOptions = RecvWindowOption & {
  email?: string;
};

export type SubAccountTransferSubAccountHistoryOptions = RecvWindowOption &
  FilterOptions & {
    asset?: string;
    type?: number | 1 | 2;
  };

export type SubAccountFuturesAssetTransferHistoryOptions = RecvWindowOption &
  FilterOptions & {
    page?: number;
  };

export type SubAccountSpotSummaryOptions = RecvWindowOption & {
  email?: string;
  page?: number;
  size?: number;
};

export type ManagedSubAccountWithdrawOptions = RecvWindowOption & {
  transferDate?: number;
};

export type ManagedSubAccountSnapshotOptions = RecvWindowOption & FilterOptions;

export type SubAccountUniversalTransferOptions = RecvWindowOption & {
  fromEmail?: string;
  toEmail?: string;
  clientTranId?: string;
  symbol?: string;
};

export type SubAccountUniversalTransferHistoryOptions = RecvWindowOption &
  FilterOptions & {
    fromEmail?: string;
    toEmail?: string;
    clientTranId?: string;
    page?: number;
  };

export type SubAccountFuturesAccountSummaryV2Options = RecvWindowOption & {
  page?: number;
  limit?: number;
};
