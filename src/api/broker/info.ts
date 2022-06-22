import { BrokerApi } from "./broker-api";
import { RecvWindowOption } from "../../@types/core";
import { ConfigOptions } from "../../@types/config/options";

class BrokerInfoApi extends BrokerApi {
  /**
   * Broker Account Information
   *
   * Get /sapi/v1/broker/info
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#broker-account-information}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  account(options: RecvWindowOption = {}, config: ConfigOptions = this.config) {
    return this.signRequest(
      'GET',
      '/sapi/v1/broker/info',
      options,
      config
    );
  }
}

export const BrokerInfo = new BrokerInfoApi();
