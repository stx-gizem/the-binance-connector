import { FilterOptions, LimitOptions, RecvWindowOption } from './core';

export type NftHistoryOptions = RecvWindowOption &
  FilterOptions & {
    page?: number;
  };

export type NftAssetOptions = RecvWindowOption &
  LimitOptions & {
    page?: number;
  };
