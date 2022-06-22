import { RecvWindowOption, TimeFilterOptions } from './core';

export type RebateSpotHistoryOptions = RecvWindowOption &
  TimeFilterOptions & {
    page?: number;
  };
