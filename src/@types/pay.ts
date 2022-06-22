import { RecvWindowOption } from './core';

export type PayHistoryOptions = RecvWindowOption & {
  startTimestamp?: number;
  endTimestamp?: number;
  limit?: number;
};
