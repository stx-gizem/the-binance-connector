import { RecvWindowOption } from "../core";

export type GetSubSpotAssetInfoOptions = RecvWindowOption & {
  subAccountId?: string;
  page?: number;
  size?: number;
}
