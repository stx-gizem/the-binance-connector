import { FilterOptions, RecvWindowOption, TimeFilterOptions } from './core';

export type MarginBorrowOptions = RecvWindowOption & {
  symbol?: string;
  isIsolated?: string | 'TRUE' | 'FALSE';
};
export type NewMarginOrderOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
  quantity?: string | number;
  quoteOrderQty?: string | number;
  price?: string | number;
  stopPrice?: string | number;
  newClientOrderId?: string;
  icebergQty?: string | number;
  newOrderRespType?: string;
  sideEffectType?: string | 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY';
  timeInForce?: string | 'GTC' | 'IOC' | 'FOK';
};

export type CancelMarginOrderOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
  orderId?: number;
  origClientOrderId?: string;
  newClientOrderId?: string;
};

export type CancelAllOpenMarginOrderOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
};

export type MarginTransferHistoryOptions = RecvWindowOption &
  TimeFilterOptions & {
    asset?: string;
    type?: string | 'ROLL_IN' | 'ROLL_OUT';
    current?: number;
    size?: number;
    archived?: boolean;
  };

export type MarginLoanRecordOptions = RecvWindowOption &
  TimeFilterOptions & {
    isolatedSymbol?: string;
    txId?: number;
    current?: number;
    size?: number;
    archived?: boolean;
  };

export type MarginInterestHistoryOptions = RecvWindowOption &
  TimeFilterOptions & {
    asset?: string;
    isolatedSymbol?: string;
    current?: number;
    size?: number;
    archived?: boolean;
  };

export type MarginForceLiquidationRecordOptions = RecvWindowOption &
  TimeFilterOptions & {
    isolatedSymbol?: string;
    current?: number;
    size?: number;
  };

export type MarginOrderOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
  orderId?: number;
  origClientOrderId?: string;
};

export type MarginOpenOrdersOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
  symbol?: string;
};

export type MarginAllOrdersOptions = RecvWindowOption &
  FilterOptions & {
    isIsolated?: string | 'TRUE' | 'FALSE';
    orderId?: number;
  };

export type MarginOCOOrderOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
  listClientOrderId?: string;
  limitClientOrderId?: string;
  limitIcebergQty?: string | number;
  stopClientOrderId?: string;
  stopLimitPrice?: string | number;
  stopIcebergQty?: string | number;
  stopLimitTimeInForce?: string | 'GTC' | 'IOC' | 'FOK';
  newOrderRespType?: string;
  sideEffectType?: string | 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY';
};

export type CancelMarginOCOOrderOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
  orderListId?: number;
  listClientOrderId?: string;
  newClientOrderId?: string;
};

export type GetMarginOCOOrderOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
  symbol?: string;
  orderListId?: number;
  origClientOrderId?: number;
};

export type GetMarginOCOOrdersOptions = RecvWindowOption &
  TimeFilterOptions & {
    isIsolated?: string | 'TRUE' | 'FALSE';
    symbol?: string;
    fromId?: number;
  };

export type GetMarginOpenOCOOrdersOptions = RecvWindowOption & {
  isIsolated?: string | 'TRUE' | 'FALSE';
  symbol?: string;
};

export type MarginMyTradesOptions = RecvWindowOption &
  FilterOptions & {
    fromId?: number;
    isIsolated?: string | 'TRUE' | 'FALSE';
  };

export type MarginMaxBorrowableOptions = RecvWindowOption & {
  isolatedSymbol?: string;
};

export type MarginInterestRateHistoryOptions = RecvWindowOption &
  TimeFilterOptions & {
    vipLevel?: number;
  };

export type IsolatedMarginTransferHistoryOptions = RecvWindowOption &
  TimeFilterOptions & {
    asset?: string;
    transFrom?: string | 'SPOT' | 'ISOLATED_MARGIN';
    transTo?: string | 'SPOT' | 'ISOLATED_MARGIN';
    current?: number;
    size?: number;
  };

export type IsolatedMarginAccountInfoOptions = RecvWindowOption & {
  symbols?: string;
};

export type MarginFeeOptions = RecvWindowOption & {
  vipLevel?: number;
  coin?: string;
};

export type IsolatedMarginTierOptions = RecvWindowOption & {
  tier?: string;
};

export type MarginOrderCountOptions = RecvWindowOption & {
  symbol?: string;
  isIsolated?: string | 'TRUE' | 'FALSE';
};
