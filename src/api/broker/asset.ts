import { BrokerApi } from "./broker-api";
import { GetSubSpotAssetInfoOptions } from "../../@types/broker/asset";
import { ConfigOptions } from "../../@types/config/options";
import { hasOneOfParameters, validateRequiredParameters } from "../../helpers/validation";

class BrokerAssetApi extends BrokerApi {

  /**
   * Query Sub Account Spot Asset info
   *
   * GET /sapi/v1/broker/subAccount/spotSummary
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-sub-account-spot-asset-info}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   * @param {number} [options.page] - default 1
   * @param {number} [options.size] - default 10, max 20
   * @param {string} [options.subAccountId]
   */
  getSubSpotAssetInfo(options: GetSubSpotAssetInfoOptions = {}, config: ConfigOptions = this.config) {
    hasOneOfParameters({
      subAccountId: options.subAccountId,
      size: options.size
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccount/spotSummary',
      options,
      config
    );
  }

  /**
   * Query Subaccount Margin Asset info
   *
   * GET /sapi/v1/broker/subAccount/marginSummary
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-subaccount-margin-asset-info}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   * @param {number} [options.page] - default 1
   * @param {number} [options.size] - default 10, max 20
   * @param {string} [options.subAccountId]
   */
  getSubMarginAssetInfo(options: GetSubSpotAssetInfoOptions = {}, config: ConfigOptions = this.config) {
    hasOneOfParameters({
      subAccountId: options.subAccountId,
      size: options.size
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccount/marginSummary',
      options,
      config
    );
  }

  /**
   * Query Subaccount Futures Asset info
   *
   * GET /sapi/v1/broker/subAccount/futuresSummary
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-subaccount-futures-asset-info}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   * @param {number} [options.page] - default 1
   * @param {number} [options.size] - default 10, max 20
   * @param {string} [options.subAccountId]
   */
  getSubFuturesAssetInfo(options: GetSubSpotAssetInfoOptions = {}, config: ConfigOptions = this.config) {
    hasOneOfParameters({
      subAccountId: options.subAccountId,
      size: options.size
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccount/futuresSummary',
      options,
      config
    );
  }

  /**
   * Query Subaccount Futures Asset info (V2)
   *
   * GET /sapi/v2/broker/subAccount/futuresSummary
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-subaccount-futures-asset-info-v2}
   *
   * @param {number} futuresType - 1:USDT Margined Futures, 2:COIN Margined Futures
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   * @param {number} [options.page] - default 1
   * @param {number} [options.size] - default 10, max 20
   * @param {string} [options.subAccountId]
   */
  getSubFuturesAssetInfoV2(futuresType: number | 1 | 2, options: GetSubSpotAssetInfoOptions = {}, config: ConfigOptions = this.config) {
    validateRequiredParameters({
      futuresType
    })
    return this.signRequest(
      'GET',
      '/sapi/v2/broker/subAccount/futuresSummary',
      {
        ...options,
        futuresType
      },
      config
    );
  }
}

export const BrokerAsset = new BrokerAssetApi();
