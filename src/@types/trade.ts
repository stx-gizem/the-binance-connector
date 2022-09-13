import { FilterOptions, RecvWindowOption } from './core';

export type NewOrderOptions = RecvWindowOption & {
  timeInForce?: string;
  quantity?: string | number;
  quoteOrderQty?: string | number;
  price?: string | number;
  newClientOrderId?: string;
  stopPrice?: string | number;
  trailingDelta?: string | number;
  icebergQty?: string | number;
  newOrderRespType?: string;
};

export type CancelOrderOptions = RecvWindowOption & {
  orderId?: number | string;
  origClientOrderId?: string;
  newClientOrderId?: string;
};

export type GetOrderOptions = RecvWindowOption & {
  orderId?: number | string;
  origClientOrderId?: string;
  newClientOrderId?: string;
};

export type OpenOrdersOptions = RecvWindowOption & {
  symbol?: string;
};

export type AllOrdersOptions = RecvWindowOption &
  FilterOptions & {
    orderId?: number | string;
  };

export type NewOCOOrderOptions = RecvWindowOption & {
  listClientOrderId?: string;
  limitClientOrderId?: string;
  limitIcebergQty?: string | number;
  trailingDelta?: string | number;
  stopClientOrderId?: string;
  stopLimitPrice?: string | number;
  stopIcebergQty?: string | number;
  stopLimitTimeInForce?: string;
  newOrderRespType?: string;
};

export type CancelOCOOrderOptions = RecvWindowOption & {
  orderListId?: string | number;
  listClientOrderId?: string;
  newClientOrderId?: string;
};

export type GetOCOOrderOptions = RecvWindowOption & {
  orderListId?: string | number;
  origClientOrderId?: string;
};

export type GetOCOOrdersOptions = RecvWindowOption &
  FilterOptions & {
    fromId?: number;
  };

export type MyTradesOptions = RecvWindowOption &
  FilterOptions & {
    fromId?: number;
    orderId?: number | string;
  };

export type CancelAllOpenOrdersOptions = RecvWindowOption & {
  symbol: string
}
