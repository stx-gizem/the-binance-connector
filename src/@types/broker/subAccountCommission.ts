import { RecvWindowOption } from "../core";

export type ChangeSubAccountCommissionOptions = RecvWindowOption & {
  marginMakerCommission?: number | string;
  marginTakerCommission?: number | string;
}

export type GetUsdtFuturesCommissionOptions = RecvWindowOption & {
  symbol?: string;
}

export type GetCoinFuturesCommissionOptions = RecvWindowOption & {
  pair?: string;
}
