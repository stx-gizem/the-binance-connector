import { BrokerApi } from "./broker-api";
import { RecvWindowOption } from "../../@types/core";
import { ConfigOptions } from "../../@types/config/options";
import { validateRequiredParameters } from "../../helpers/validation";

class BrokerBlvtApi extends BrokerApi {

  /**
   * Enable Leverage Token for Sub Account
   *
   * POST /sapi/v1/broker/subAccount/blvt
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#enable-leverage-token-for-sub-account}
   *
   * @param {string} subAccountId
   * @param {string} blvt
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  enableLeverageTokenForSub(
    subAccountId: string,
    blvt: string | 'true' | 'false' = "true",
    options: RecvWindowOption = {},
    config: ConfigOptions = this.config
  ) {
    validateRequiredParameters({
      subAccountId,
      blvt
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/broker/subAccount/blvt',
      {
        ...options,
        subAccountId,
        blvt
      },
      config
    );
  }

}

export const BrokerBlvt = new BrokerBlvtApi();
