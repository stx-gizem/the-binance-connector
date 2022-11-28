import { LimitOptions, RecvWindowOption } from './core';

export type ConvertTradeHistoryOptions = RecvWindowOption & LimitOptions;
export type ConvertQueryOrderQuantityPrecisionPerAssetOptions = RecvWindowOption;
export type ConvertAcceptQuoteOptions = RecvWindowOption;

export enum ConvertValidTime {
  DEFAULT = '10s',
  TEN_SECOND = '10s',
  THIRTY_SECOND = '30s',
  ONE_MINUTE = '1m',
  TWO_MINUTE = '2m',
}

export type SendConvertQuoteRequestOptions = RecvWindowOption & {
  validTime: ConvertValidTime,
};
