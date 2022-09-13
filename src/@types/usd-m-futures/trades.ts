import { FilterOptions } from '../core';

export interface NewOrderOptions {
  positionSide?: string | 'BOTH' | 'LONG' | 'SHORT',
  timeInForce?: string,
  quantity?: string | number,
  reduceOnly?: 'true' | 'false' | string,
  price?: string | number,
  newClientOrderId?: string,
  stopPrice?: string | number,
  closePosition?: string | 'true' | 'false',
  activationPrice?: string | number,
  callbackRate?: string | number,
  workingType?: string | 'ARK_PRICE' | 'CONTRACT_PRICE',
  priceProtect?: string | 'TRUE' | 'FALSE',
  newOrderRespType?: string | 'ACK' | 'RESULT',
}


export interface QueryOrderOptions {
  orderId?: string | number,
  origClientOrderId?: string,
}


export interface CancelOrderOptions {
  orderId?: string | number,
  origClientOrderId?: string,
}


export interface CancelMultipleOrdersOptions {
  orderIdList?: any[],
  origClientOrderIdList?: any[]
}

export interface AllOrdersOptions extends FilterOptions {
  orderId?: string | number,
}

export enum MarginType {
  ISOLATED = 'ISOLATED',
  CROSSED = 'CROSSED'
}

export enum ModifyPositionMarginType {
  ADD_POSITION_MARGIN = 1,
  REDUCE_POSITION_MARGIN = 2
}

export interface ModifyIsolatedPositionMarginOptions {
  positionSide?: string | 'BOTH' | 'LONG' | 'SHORT'
}

export interface GetPositionMarginChangeHistoryOptions extends FilterOptions {
  type?: ModifyPositionMarginType;
}

export interface AccountTradeListOptions extends FilterOptions {
  fromId?: string | number,
}


export interface GetIncomeHistoryOptions extends FilterOptions {
  symbol?: string,
  incomeType?: string | 'TRANSFER' | 'WELCOME_BONUS' | 'REALIZED_PNL' | 'FUNDING_FEE' | 'COMMISSION' | 'INSURANCE_CLEAR' | 'REFERRAL_KICKBACK' | 'COMMISSION_REBATE' | 'DELIVERED_SETTELMENT' | 'COIN_SWAP_DEPOSIT' | 'COIN_SWAP_WITHDRAW' | 'AUTO_EXCHANGE'
}

export interface GetUserForceOrdersOptions extends FilterOptions {
  symbol?: string,
  autoCloseType?: string | 'LIQUIDATION' | 'ADL'
}
