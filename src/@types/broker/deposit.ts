import { FilterOptions, RecvWindowOption } from "../core";

export type GetSubDepositHistoryOptions = RecvWindowOption & FilterOptions & {
  offest?: number;
  subAccountId?: string;
  coin?: string;
  status?: number | 0 | 6 | 1;
}
