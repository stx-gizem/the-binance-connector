import { RecvWindowOption } from './core';

export type C2cTradeHistoryOptions = RecvWindowOption & {
  startTimestamp?: number;
  endTimestamp?: number;
  page?: number;
  rows?: number;
};
