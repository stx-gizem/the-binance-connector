import { BrokerApi } from "./broker-api";
import { GetSubDepositHistoryOptions } from "../../@types/broker/deposit";
import { ConfigOptions } from "../../@types/config/options";

class BrokerDepositApi extends BrokerApi {

  /**
   * Get Sub Account Deposit History
   *
   * GET /sapi/v1/broker/subAccount/depositHist
   *
   * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#get-sub-account-deposit-history}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime] - Default: 7 days from current timestamp
   * @param {number} [options.endTime] - Default: present timestamp
   * @param {number} [options.limit] - Default：500
   * @param {number} [options.offest] - Default：0
   * @param {number} [options.recvWindow]
   * @param {string} [options.coin]
   * @param {string} [options.subAccountId]
   * @param {number} [options.status] - 0(0:pending,6: credited but cannot withdraw, 1:success)
   */
  getSubDepositHistory(options: GetSubDepositHistoryOptions = {}, config: ConfigOptions = this.config) {
    return this.signRequest(
      'GET',
      '/sapi/v1/broker/subAccount/depositHist',
      options,
      config
    );
  }


}

export const BrokerDeposit = new BrokerDepositApi();
