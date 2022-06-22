import { RecvWindowOption } from "../core";

export type BrokerCreateSubAccountOptions = RecvWindowOption & {
  tag?: string;
}

export type CreateApiKeyOptions = RecvWindowOption & {
  marginTrade?: string | "true" | "false";
  futuresTrade?: string | "true" | "false";
}

export type QuerySubAccountApiKeyOptions = RecvWindowOption & {
  subAccountApiKey?: string;
  page?: number;
  size?: number;
}

export type QuerySubAccountOptions = RecvWindowOption & {
  subAccountId?: string;
  page?: number;
  size?: number;
};
