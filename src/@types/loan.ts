import { FilterOptions, RecvWindowOption } from './core';

export type LoanHistoryOptions = RecvWindowOption &
  FilterOptions & {
    type?:
      | string
      | 'borrowIn'
      | 'collateralSpent'
      | 'repayAmount'
      | 'collateralRetu'
      | 'addCollateral'
      | 'removeCollateral'
      | 'collateralReturnAfterLiquidation';
  };
