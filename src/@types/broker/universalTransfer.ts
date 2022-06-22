import { FilterOptions, RecvWindowOption } from "../core";

export type UniversalTransferOptions = RecvWindowOption & {
  clientTranId?: string;
  fromId?: string;
  told?: string;
};


export type UniversalTransferHistoryOptions = RecvWindowOption & FilterOptions & {
  clientTranId?: string;
  fromId?: string;
  told?: string;
  page?: number;
  showAllStatus?: boolean;
}
