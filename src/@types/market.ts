import { FilterOptions, LimitOptions } from './core';

export interface ServerTime {
  serverTime: number;
}

export interface ExchangeOptions {
  symbol?: string;
  symbols?: string[];
}

export type TradeHistoryOptions = LimitOptions & {
  fromId?: number;
};

export type AggHistoryOptions = FilterOptions & {
  fromId?: number;
};

export enum KlineInterval {
  MIN_1 = '1m',
  MIN_3 = '3m',
  MIN_5 = '5m',
  MIN_15 = '15m',
  MIN_30 = '30m',
  HOUR_1 = '1h',
  HOUR_2 = '2h',
  HOUR_4 = '4h',
  HOUR_6 = '6h',
  HOUR_8 = '8h',
  HOUR_12 = '12h',
  DAY_1 = '1d',
  DAY_3 = '3d',
  WEAK_1 = '1w',
  MONTH_1 = '1M',
}
