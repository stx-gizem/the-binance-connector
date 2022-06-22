import { RecvWindowOption } from './core';

export type FiatHistoryOptions = RecvWindowOption & {
  beginTime?: number;
  endTime?: number;
  page?: number;
  rows?: number;
};
