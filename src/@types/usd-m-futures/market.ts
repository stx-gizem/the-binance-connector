import { FilterOptions, LimitOptions } from "../core";

export interface OrderBookOptions {
  limit?: 5 | 10 | 20 | 50 | 100 | 500 | 1000
}

export type OldTradesOptions = LimitOptions & {
  fromId?: string,
}

export type AggTradesOptions = FilterOptions & {
  fromId?: string
};

export enum ContractType {
  Perpetual = 'PERPETUAL',
  CurrentQuarter = 'CURRENT_QUARTER',
  NextQuarter = 'NEXT_QUARTER',
}

export interface MarkPriceOptions {
  symbol?: string
}


export type FundingRateHistoryOptions = FilterOptions & {
  symbol?: string
}

export type SymbolOption = {
  symbol?: string
}

export enum FuturePeriod {
  MINUTE_5 = '5m',
  MINUTE_15 = '15m',
  MINUTE_30 = '30m',
  HOUR_1 = '1h',
  HOUR_2 = '2h',
  HOUR_4 = '4h',
  HOUR_6 = '6h',
  HOUR_12 = '12h',
  DAY_1 = '1d',
}
