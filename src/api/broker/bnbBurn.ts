import { BrokerApi } from "./broker-api";
import { RecvWindowOption } from "../../@types/core";
import { ConfigOptions } from "../../@types/config/options";
import { validateRequiredParameters } from "../../helpers/validation";

class BnbBurnApi extends BrokerApi {

  /**
   * Enable Or Disable BNB Burn for Sub Account SPOT and MARGIN
   *
   * POST /sapi/v1/broker/subAccount/bnbBurn/spot
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#enable-or-disable-bnb-burn-for-sub-account-spot-and-margin}
   *
   * @param {string} subAccountId
   * @param {string} spotBNBBurn - "true" or "false", spot and margin whether use BNB to pay for transaction fees or not
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  changeBnbBurnStatusForSub(
    subAccountId: string,
    spotBNBBurn: string | 'true' | 'false',
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      spotBNBBurn
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccount/bnbBurn/spot',
      {
        ...options,
        subAccountId,
        spotBNBBurn
      },
      config
    );
  }

  /**
   * Enable Or Disable BNB Burn for Sub Account Margin Interest
   *
   * POST /sapi/v1/broker/subAccount/bnbBurn/marginInterest
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#enable-or-disable-bnb-burn-for-sub-account-margin-interest}
   *
   * @param {string} subAccountId
   * @param {string} interestBNBBurn - "true" or "false", margin loan whether uses BNB to pay for margin interest or not
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  changeBnbBurnMarginInterestStatusForSub(
    subAccountId: string,
    interestBNBBurn: string | 'true' | 'false',
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      interestBNBBurn
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccount/bnbBurn/marginInterest',
      {
        ...options,
        subAccountId,
        interestBNBBurn
      },
      config
    );
  }

  /**
   * Get BNB Burn Status for Sub Account
   *
   * GET /sapi/v1/broker/subAccount/bnbBurn/status
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#get-bnb-burn-status-for-sub-account}
   *
   * @param {string} subAccountId
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  getBnbBurnStatusForSub(
    subAccountId: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId
    });

    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccount/bnbBurn/status',
      {
        ...options,
        subAccountId
      },
      config
    );
  }


}

export const BnbBurn = new BnbBurnApi();
