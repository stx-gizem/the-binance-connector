import { BinanceApi } from './binance-api';
import { validateRequiredParameters } from '../../helpers/validation';
import { ConfigOptions } from '../../@types/config/options';
import { LoanHistoryOptions } from '../../@types/loan';

class LoanApi extends BinanceApi {
  /**
   * Get Crypto Loans Income History (USER_DATA)<br>
   *
   * GET /sapi/v1/loan/income<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-crypto-loans-income-history-user_data}
   *
   * @param {string} asset
   * @param {object} [options]
   * @param config
   * @param {string} [options.type] - All types will be returned by default.<br>
   *     Enum：borrowIn, collateralSpent, repayAmount, collateralReturn(Collateral return after repayment), addCollateral, removeCollateral, collateralReturnAfterLiquidation.
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - default 20, max 100
   * @param {number} [options.recvWindow]
   *
   */
  loanHistory(
    asset: string,
    options: LoanHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset });

    return this.signRequest(
      'GET',
      '/sapi/v1/loan/income',
      Object.assign(options, { asset }),
      config,
    );
  }
}

export const Loan = new LoanApi();
