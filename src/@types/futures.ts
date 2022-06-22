import { FilterOptions, RecvWindowOption, TimeFilterOptions } from './core';

export type FuturesTransferHistoryOptions = RecvWindowOption & {
  endTime?: number;
  current?: number;
  size?: number;
};

export type FuturesLoanBorrowHistoryOptions = RecvWindowOption & FilterOptions;

export type FuturesLoanRepayHistoryOptions = RecvWindowOption &
  FilterOptions & {
    coin?: string;
  };

export type FuturesLoanConfigsOptions = RecvWindowOption & {
  loanCoin?: string;
  collateralCoin?: string;
};

export type FuturesLoanHistoryOptions = RecvWindowOption &
  FilterOptions & {
    loanCoin?: string;
    collateralCoin?: string;
  };
export type FuturesLoanInterestHistoryOptions = RecvWindowOption &
  FilterOptions & {
    current?: number;
    collateralCoin?: string;
  };
