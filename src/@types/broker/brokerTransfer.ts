import { FilterOptions, RecvWindowOption } from "../core";

export type SpotTransferOptions = RecvWindowOption & {
  fromId?: string;
  told?: string;
  clientTranId?: string;
}

export type SpotTransferHistoryOptions = RecvWindowOption & FilterOptions & {
  fromId?: string;
  told?: string;
  clientTranId?: string;
  showAllStatus?: string | 'true' | 'false',
  page?: number
}

export type FuturesTransferHistoryOptions = RecvWindowOption & FilterOptions & {
  page?: number;
  clientTranId?: string;
}
