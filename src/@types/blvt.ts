import { FilterOptions, RecvWindowOption } from './core';

export interface TokenNameOption {
  tokenName?: string;
}

export interface BlvtInfoOptions extends TokenNameOption {}

export interface SubscribeBlvtOptions extends RecvWindowOption {}

export type BlvtSubscriptionRecordOptions = FilterOptions &
  RecvWindowOption &
  TokenNameOption & {
    id?: number;
  };

export type BlvtRedemptionRecordOptions = FilterOptions &
  RecvWindowOption &
  TokenNameOption & {
    id?: number;
  };
