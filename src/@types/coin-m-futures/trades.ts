import { FilterOptions } from "../core";

export interface ModifyOrderOptions {
  orderId?: string | number,
  origClientOrderId?: string,
  quantity?: string | number,
  price?: string | number,
}


export interface GetOrderModifyHistoryOptions extends FilterOptions {
  orderId?: string | number,
  origClientOrderId?: string,
}

export interface GetCurrentAllOpenOrdersOptions {
  symbol?: string,
  pair?: string,
}

export interface GetAllOrdersOptions extends FilterOptions {
  symbol?: string,
  pair?: string,
  orderId?: string | number,

}

export interface PositionInformationOptions {
  marginAsset?: string,
  pair?: string,
}

export interface GetAccountTradeListOptions extends FilterOptions {
  symbol?: string,
  pair?: string,
  fromId?: string
}

export interface NotionalBracketForSymbolOptions {
  pair?: string,
}
