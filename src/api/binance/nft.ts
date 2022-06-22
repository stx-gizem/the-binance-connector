import { BinanceApi } from './binance-api';
import { validateRequiredParameters } from '../../helpers/validation';
import { ConfigOptions } from '../../@types/config/options';
import { NftAssetOptions, NftHistoryOptions } from '../../@types/nft';

class NftApi extends BinanceApi {
  /**
   * Get NFT Transaction History (USER_DATA)<br>
   *
   * GET /sapi/v1/nft/history/transactions<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-nft-transaction-history-user_data}
   *
   * @param {number} orderType - 0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 50, max 50
   * @param {number} [options.page] - default 1
   * @param {number} [options.recvWindow]
   *
   */
  nftTransactionHistory(
    orderType: number | 0 | 1 | 2 | 3 | 4,
    options: NftHistoryOptions = {},
    config: ConfigOptions,
  ) {
    validateRequiredParameters({ orderType });

    return this.signRequest(
      'GET',
      '/sapi/v1/nft/history/transactions',
      Object.assign(options, { orderType }),
      config,
    );
  }

  /**
   * Get NFT Deposit History(USER_DATA)<br>
   *
   * GET /sapi/v1/nft/history/deposit<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-nft-deposit-history-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 50, max 50
   * @param {number} [options.page] - default 1
   * @param {number} [options.recvWindow]
   *
   */
  nftDepositHistory(options: NftHistoryOptions = {}, config: ConfigOptions) {
    return this.signRequest(
      'GET',
      '/sapi/v1/nft/history/deposit',
      options,
      config,
    );
  }

  /**
   * Get NFT Withdraw History (USER_DATA)<br>
   *
   * GET /sapi/v1/nft/history/withdraw<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-nft-withdraw-history-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 50, max 50
   * @param {number} [options.page] - default 1
   * @param {number} [options.recvWindow]
   *
   */
  nftWithdrawHistory(options: NftHistoryOptions = {}, config: ConfigOptions) {
    return this.signRequest(
      'GET',
      '/sapi/v1/nft/history/withdraw',
      options,
      config,
    );
  }

  /**
   * Get NFT Asset (USER_DATA)<br>
   *
   * GET /sapi/v1/nft/user/getAsset<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-nft-asset-user_data}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.limit] - default 50, max 50
   * @param {number} [options.page] - default 1
   * @param {number} [options.recvWindow]
   *
   */
  nftAsset(options: NftAssetOptions = {}, config: ConfigOptions) {
    return this.signRequest(
      'GET',
      '/sapi/v1/nft/user/getAsset',
      options,
      config,
    );
  }
}

export const Nft = new NftApi();
