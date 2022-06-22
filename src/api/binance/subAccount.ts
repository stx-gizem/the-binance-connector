import { BinanceApi } from './binance-api';
import { validateRequiredParameters } from '../../helpers/validation';
import { ConfigOptions } from '../../@types/config/options';
import {
  ManagedSubAccountSnapshotOptions,
  ManagedSubAccountWithdrawOptions,
  SubAccountDepositAddressOptions,
  SubAccountDepositHistoryOptions,
  SubAccountFuturesAccountSummaryV2Options,
  SubAccountFuturesAssetTransferHistoryOptions,
  SubAccountListOptions,
  SubAccountSpotSummaryOptions,
  SubAccountStatusOptions,
  SubAccountTransferHistoryOptions,
  SubAccountTransferSubAccountHistoryOptions,
  SubAccountUniversalTransferHistoryOptions,
  SubAccountUniversalTransferOptions,
} from '../../@types/subAccount';
import { RecvWindowOption } from '../../@types/core';

class SubAccountApi extends BinanceApi {
  /**
   * Query Sub-account List(For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/list<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-list-sapi-for-master-account}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.email]
   * @param {string} [options.isFreeze] - true or false
   * @param {number} [options.page]
   * @param {number} [options.limit]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountList(
    options: SubAccountListOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/list',
      options,
      config,
    );
  }

  /**
   * Query Sub-account Transfer History(For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/sub/transfer/history<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-spot-asset-transfer-history-sapi-for-master-account}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.fromEmail]
   * @param {string} [options.toEmail]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.page]
   * @param {number} [options.limit]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountTransferHistory(
    options: SubAccountTransferHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/sub/transfer/history',
      options,
      config,
    );
  }

  /**
   * Query Sub-account Assets(For Master Account)<br>
   *
   * GET /sapi/v3/sub-account/assets<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-assets-for-master-account}
   *
   * @param {string} email
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountAssets(
    email: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email });

    return this.signRequest(
      'GET',
      '/sapi/v3/sub-account/assets',
      Object.assign(options, { email }),
      config,
    );
  }

  /**
   * Get Sub-account Deposit Address (For Master Account)<br>
   *
   * GET /sapi/v1/capital/deposit/subAddress<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-sub-account-deposit-address-for-master-account}
   *
   * @param {string} email
   * @param {string} coin
   * @param {object} [options]
   * @param config
   * @param {string} [options.network]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountDepositAddress(
    email: string,
    coin: string,
    options: SubAccountDepositAddressOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, coin });

    return this.signRequest(
      'GET',
      '/sapi/v1/capital/deposit/subAddress',
      Object.assign(options, {
        email,
        coin,
      }),
      config,
    );
  }

  /**
   * Get Sub-account Deposit History (For Master Account)<br>
   *
   * GET /sapi/v1/capital/deposit/subHisrec<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-sub-account-deposit-address-for-master-account}
   *
   * @param {string} email
   * @param {object} [options]
   * @param config
   * @param {string} [options.coin]
   * @param {number} [options.status]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit]
   * @param {number} [options.offset]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountDepositHistory(
    email: string,
    options: SubAccountDepositHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email });

    return this.signRequest(
      'GET',
      '/sapi/v1/capital/deposit/subHisrec',
      Object.assign(options, { email }),
      config,
    );
  }

  /**
   * Get Sub-account's Status on Margin/Futures(For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/status<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-sub-account-39-s-status-on-margin-futures-for-master-account}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.email]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountStatus(
    options: SubAccountStatusOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/status',
      options,
      config,
    );
  }

  /**
   * Enable Margin for Sub-account (For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/margin/enable<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#enable-margin-for-sub-account-for-master-account}
   *
   * @param {string} email - Sub-account email
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountEnableMargin(
    email: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email });

    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/margin/enable',
      Object.assign(options, {
        email,
      }),
      config,
    );
  }

  /**
   * Get Detail on Sub-account's Margin Account (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/margin/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-detail-on-sub-account-39-s-margin-account-for-master-account}
   *
   * @param {string} email
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountMarginAccount(
    email: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email });

    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/margin/account',
      Object.assign(options, {
        email,
      }),
      config,
    );
  }

  /**
   * Get Summary of Sub-account's Margin Account (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/margin/accountSummary<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-detail-on-sub-account-39-s-margin-account-for-master-account}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountMarginAccountSummary(
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/margin/accountSummary',
      options,
      config,
    );
  }

  /**
   * Enable Futures for Sub-account (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/futures/enable<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#enable-futures-for-sub-account-for-master-account}
   *
   * @param {string} email
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountEnableFutures(
    email: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email });

    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/futures/enable',
      Object.assign(options, {
        email,
      }),
      config,
    );
  }

  /**
   * Get Detail on Sub-account's Futures Account (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/futures/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-detail-on-sub-account-39-s-futures-account-for-master-account}
   *
   * @param {string} email
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountFuturesAccount(
    email: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email });

    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/futures/account',
      Object.assign(options, {
        email,
      }),
      config,
    );
  }

  /**
   * Get Summary of Sub-account's Futures Account (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/futures/accountSummary<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-summary-of-sub-account-39-s-futures-account-for-master-account}
   *
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountFuturesAccountSummary(
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/futures/accountSummary',
      options,
      config,
    );
  }

  /**
   * Get Futures Postion-Risk of Sub-account (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/futures/positionRisk<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-futures-postion-risk-of-sub-account-for-master-account}
   *
   * @param {string} email
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountFuturesPositionRisk(
    email: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email });

    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/futures/positionRisk',
      Object.assign(options, {
        email,
      }),
      config,
    );
  }

  /**
   * Futures Transfer for Sub-account(For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/futures/transfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#futures-transfer-for-sub-account-for-master-account}
   *
   * @param {string} email
   * @param {string} asset
   * @param {number} amount
   * @param {number} type - 1: transfer from subaccount's spot account to its USDT-margined futures account
   * <br>2: transfer from subaccount's USDT-margined futures account to its spot account
   * <br>3: transfer from subaccount's spot account to its COIN-margined futures account
   * <br>4: transfer from subaccount's COIN-margined futures account to its spot account
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountFuturesTransfer(
    email: string,
    asset: string,
    amount: string | number,
    type: number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, asset, amount, type });

    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/futures/transfer',
      Object.assign(options, {
        email,
        asset,
        amount,
        type,
      }),
      config,
    );
  }

  /**
   * Margin Transfer for Sub-account(For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/margin/transfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-transfer-for-sub-account-for-master-account}
   *
   * @param {string} email
   * @param {string} asset
   * @param {number} amount
   * @param {number} type - 1: transfer from subaccount's spot account to margin account
   * <br>2: transfer from subaccount's margin account to its spot account
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000

   */
  subAccountMarginTransfer(
    email: string,
    asset: string,
    amount: string | number,
    type: number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, asset, amount, type });

    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/margin/transfer',
      Object.assign(options, {
        email,
        asset,
        amount,
        type,
      }),
      config,
    );
  }

  /**
   * Transfer to Sub-account of Same Master（For Sub-account）<br>
   *
   * POST /sapi/v1/sub-account/transfer/subToSub<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#transfer-to-sub-account-of-same-master-for-sub-account}
   *
   * @param {string} toEmail
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountTransferToSub(
    toEmail: string,
    asset: string,
    amount: string | number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ toEmail, asset, amount });

    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/transfer/subToSub',
      Object.assign(options, {
        toEmail,
        asset,
        amount,
      }),
      config,
    );
  }

  /**
   * Transfer to Master（For Sub-account）<br>
   *
   * POST /sapi/v1/sub-account/transfer/subToMaster<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#transfer-to-master-for-sub-account}
   *
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountTransferToMaster(
    asset: string,
    amount: string | number,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ asset, amount });

    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/transfer/subToMaster',
      Object.assign(options, {
        asset,
        amount,
      }),
      config,
    );
  }

  /**
   * Sub-account Transfer History (For Sub-account)<br>
   *
   * GET /sapi/v1/sub-account/transfer/subUserHistory<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#sub-account-transfer-history-for-sub-account}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.asset] - If not sent, result of all assets will be returned
   * @param {number} [options.type] - 1: transfer in, 2: transfer out
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] - Default 500
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000

   */
  subAccountTransferSubAccountHistory(
    options: SubAccountTransferSubAccountHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/transfer/subUserHistory',
      options,
      config,
    );
  }

  /**
   * Query Sub-account Futures Asset Transfer History(For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/futures/internalTransfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-futures-asset-transfer-history-for-master-account}
   *
   * @param {string} email - Sub-account email
   * @param {number} futuresType - 1: USDT-margined Futures，2: Coin-margined Futures
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime] - Default return the history with in 100 days
   * @param {number} [options.endTime] - Default return the history with in 100 days
   * @param {number} [options.page] - Default value: 1
   * @param {number} [options.limit] - Default value: 50, Max value: 500
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountFuturesAssetTransferHistory(
    email: string,
    futuresType: number | 1 | 2,
    options: SubAccountFuturesAssetTransferHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, futuresType });
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/futures/internalTransfer',
      Object.assign(options, {
        email,
        futuresType,
      }),
      config,
    );
  }

  /**
   * Sub-account Futures Asset Transfer(For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/futures/internalTransfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#sub-account-futures-asset-transfer-for-master-account}
   *
   * @param {string} fromEmail - Sender email
   * @param {string} toEmail - Recipient email
   * @param {number} futuresType - 1: USDT-margined Futures，2: Coin-margined Futures
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000

   */
  subAccountFuturesAssetTransfer(
    fromEmail: string,
    toEmail: string,
    futuresType: number | 1 | 2,
    asset: string,
    amount,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({
      fromEmail,
      toEmail,
      futuresType,
      asset,
      amount,
    });

    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/futures/internalTransfer',
      Object.assign(options, {
        fromEmail,
        toEmail,
        futuresType,
        asset,
        amount,
      }),
      config,
    );
  }

  /**
   * Query Sub-account Spot Assets Summary (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/spotSummary<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-sub-account-spot-assets-summary-for-master-account}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.email] - Sub account email
   * @param {number} [options.page] - default 1
   * @param {number} [options.size] - default 10, max 20
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountSpotSummary(
    options: SubAccountSpotSummaryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/spotSummary',
      options,
      config,
    );
  }

  /**
   * Create a Virtual Sub-account(For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/virtualSubAccount<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#create-a-virtual-sub-account-for-master-account}
   *
   * @param {string} subAccountString
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountCreation(
    subAccountString: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ subAccountString });
    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/virtualSubAccount',
      Object.assign(options, { subAccountString }),
      config,
    );
  }

  /**
   * Enable Leverage Token for Sub-account (For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/blvt/enable<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#enable-leverage-token-for-sub-account-for-master-account}
   *
   * @param {string} email
   * @param {boolean} enableBlvt
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  subAccountLeverageToken(
    email: string,
    enableBlvt: boolean,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, enableBlvt });
    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/blvt/enable',
      Object.assign(options, { email, enableBlvt }),
      config,
    );
  }

  /**
   * Deposit assets into the managed sub-account（For Investor Master Account)<br>
   *
   * POST /sapi/v1/managed-subaccount/deposit<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#deposit-assets-into-the-managed-sub-account-for-investor-master-account}
   *
   * @param {string} toEmail
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  managedSubAccountDeposit(
    toEmail: string,
    asset: string,
    amount: number | string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ toEmail, asset, amount });
    return this.signRequest(
      'POST',
      '/sapi/v1/managed-subaccount/deposit',
      Object.assign(options, { toEmail, asset, amount }),
      config,
    );
  }

  /**
   * Query managed sub-account asset details（For Investor Master Account)<br>
   *
   * GET /sapi/v1/managed-subaccount/asset<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-asset-details-for-investor-master-account}
   *
   * @param {string} email
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  managedSubAccountAssets(
    email: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email });
    return this.signRequest(
      'GET',
      '/sapi/v1/managed-subaccount/asset',
      Object.assign(options, { email }),
      config,
    );
  }

  /**
   * Withdrawl assets from the managed sub-account（For Investor Master Account)<br>
   *
   * POST /sapi/v1/managed-subaccount/withdraw<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#withdrawl-assets-from-the-managed-sub-account-for-investor-master-account}
   *
   * @param {string} fromEmail
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {number} [options.transferDate] - Withdrawals is automatically occur on the transfer date(UTC0).
   * <br>If a date is not selected, the withdrawal occurs right now
   * @param {number} [options.recvWindow]
   */
  managedSubAccountWithdraw(
    fromEmail: string,
    asset: string,
    amount: string | number,
    options: ManagedSubAccountWithdrawOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ fromEmail, asset, amount });
    return this.signRequest(
      'POST',
      '/sapi/v1/managed-subaccount/withdraw',
      Object.assign(options, { fromEmail, asset, amount }),
      config,
    );
  }

  /**
   * Query Managed Sub-account Snapshot（For Investor Master Account)<br>
   *
   * GET /sapi/v1/managed-subaccount/accountSnapshot<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-managed-sub-account-snapshot-for-investor-master-account}
   *
   * @param {string} email
   * @param {string} type "SPOT", "MARGIN"（cross）, "FUTURES"（UM）
   * @param {object} [options]
   * @param config
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit] min 7, max 30, default 7
   * @param {number} [options.recvWindow]
   */
  managedSubAccountSnapshot(
    email: string,
    type: string | 'SPOT' | 'MARGIN' | 'FUTURES',
    options: ManagedSubAccountSnapshotOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, type });
    return this.signRequest(
      'GET',
      '/sapi/v1/managed-subaccount/accountSnapshot',
      Object.assign(options, { email, type }),
      config,
    );
  }

  /**
   * Enable or Disable IP Restriction for a Sub-account API Key (For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/subAccountApi/ipRestriction<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#enable-or-disable-ip-restriction-for-a-sub-account-api-key-for-master-account}
   *
   * @param {string} email - Sub-account email
   * @param {string} subAccountApiKey
   * @param {boolean} ipRestrict - true or false
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  subAccountApiToggleIpRestriction(
    email: string,
    subAccountApiKey: string,
    ipRestrict: boolean,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, subAccountApiKey, ipRestrict });
    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/subAccountApi/ipRestriction',
      Object.assign(options, { email, subAccountApiKey, ipRestrict }),
      config,
    );
  }

  /**
   * Add IP List for a Sub-account API Key (For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/subAccountApi/ipRestriction/ipList<br>
   *
   * Before the usage of this endpoint, please ensure POST /sapi/v1/sub-account/subAccountApi/ipRestriction was used to enable the IP restriction.<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#add-ip-list-for-a-sub-account-api-key-for-master-account}
   *
   * @param {string} email - Sub-account email
   * @param {string} subAccountApiKey
   * @param {string} ipAddress - Can be added in batches, separated by commas
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  subAccountApiAddIp(
    email: string,
    subAccountApiKey: string,
    ipAddress: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, subAccountApiKey, ipAddress });
    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList',
      Object.assign(options, { email, subAccountApiKey, ipAddress }),
      config,
    );
  }

  /**
   * Get IP Restriction for a Sub-account API Key (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/subAccountApi/ipRestriction<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-ip-restriction-for-a-sub-account-api-key-for-master-account}
   *
   * @param {string} email - Sub-account email
   * @param {string} subAccountApiKey
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  subAccountApiGetIpRestriction(
    email: string,
    subAccountApiKey: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, subAccountApiKey });
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/subAccountApi/ipRestriction',
      Object.assign(options, { email, subAccountApiKey }),
      config,
    );
  }

  /**
   * Delete IP List for a Sub-account API Key (For Master Account)<br>
   *
   * DELETE /sapi/v1/sub-account/subAccountApi/ipRestriction/ipList<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#delete-ip-list-for-a-sub-account-api-key-for-master-account}
   *
   * @param {string} email - Sub-account email
   * @param {string} subAccountApiKey
   * @param {string} ipAddress - Can be added in batches, separated by commas
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  subAccountApiDeleteIp(
    email: string,
    subAccountApiKey: string,
    ipAddress: string,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, subAccountApiKey, ipAddress });
    return this.signRequest(
      'DELETE',
      '/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList',
      Object.assign(options, { email, subAccountApiKey, ipAddress }),
      config,
    );
  }

  /**
   * Universal Transfer (For Master Account)<br>
   *
   * POST /sapi/v1/sub-account/universalTransfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#universal-transfer-for-master-account}
   *
   * @param {string} fromAccountType - "SPOT", "USDT_FUTURE", "COIN_FUTURE", "MARGIN"(Cross), "ISOLATED_MARGIN"
   * @param {string} toAccountType - "SPOT", "USDT_FUTURE", "COIN_FUTURE", "MARGIN"(Cross), "ISOLATED_MARGIN"
   * @param {string} asset
   * @param {number} amount
   * @param {object} [options]
   * @param config
   * @param {string} [options.fromEmail]
   * @param {string} [options.toEmail]
   * @param {string} [options.clientTranId] - Must be unique
   * @param {string} [options.symbol] - Only supported under ISOLATED_MARGIN type
   * @param {number} [options.recvWindow]
   */
  subAccountUniversalTransfer(
    fromAccountType:
      | string
      | 'SPOT'
      | 'USDT_FUTURE'
      | 'COIN_FUTURE'
      | 'MARGIN'
      | 'ISOLATED_MARGIN',
    toAccountType:
      | string
      | 'SPOT'
      | 'USDT_FUTURE'
      | 'COIN_FUTURE'
      | 'MARGIN'
      | 'ISOLATED_MARGIN',
    asset: string,
    amount: string | number,
    options: SubAccountUniversalTransferOptions = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({
      fromAccountType,
      toAccountType,
      asset,
      amount,
    });
    return this.signRequest(
      'POST',
      '/sapi/v1/sub-account/universalTransfer',
      Object.assign(options, { fromAccountType, toAccountType, asset, amount }),
      config,
    );
  }

  /**
   * Query Universal Transfer History (For Master Account)<br>
   *
   * GET /sapi/v1/sub-account/universalTransfer<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-universal-transfer-history-for-master-account}
   *
   * @param {object} [options]
   * @param config
   * @param {string} [options.fromEmail]
   * @param {string} [options.toEmail]
   * @param {string} [options.clientTranId]
   * @param {string} [options.startTime]
   * @param {string} [options.endTime]
   * @param {string} [options.page] - Default 1
   * @param {string} [options.limit] - Default 500, Max 500
   * @param {number} [options.recvWindow]
   */
  subAccountUniversalTransferHistory(
    options: SubAccountUniversalTransferHistoryOptions = {},
    config: ConfigOptions = {},
  ) {
    return this.signRequest(
      'GET',
      '/sapi/v1/sub-account/universalTransfer',
      options,
      config,
    );
  }

  /**
   * Get Detail on Sub-account's Futures Account V2 (For Master Account)<br>
   *
   * GET /sapi/v2/sub-account/futures/account<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-detail-on-sub-account-39-s-futures-account-v2-for-master-account}
   *
   * @param {string} email - Sub-account email
   * @param {number} futuresType - 1:USDT Margined Futures, 2:COIN Margined Futures
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  subAccountFuturesAccountV2(
    email: string,
    futuresType: number | 1 | 2,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, futuresType });
    return this.signRequest(
      'GET',
      '/sapi/v2/sub-account/futures/account',
      Object.assign(options, { email, futuresType }),
      config,
    );
  }

  /**
   * Get Summary of Sub-account's Futures Account V2 (For Master Account)<br>
   *
   * GET /sapi/v2/sub-account/futures/accountSummary<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-summary-of-sub-account-39-s-futures-account-v2-for-master-account}
   *
   * @param {number} futuresType - 1:USDT Margined Futures, 2:COIN Margined Futures
   * @param {object} [options]
   * @param config
   * @param {number} [options.page] - default:1
   * @param {number} [options.limit] - default:10, max:20
   * @param {number} [options.recvWindow]
   */
  subAccountFuturesAccountSummaryV2(
    futuresType: number | 1 | 2,
    options: SubAccountFuturesAccountSummaryV2Options = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ futuresType });
    return this.signRequest(
      'GET',
      '/sapi/v2/sub-account/futures/accountSummary',
      Object.assign(options, { futuresType }),
      config,
    );
  }

  /**
   * Get Futures Position-Risk of Sub-account V2 (For Master Account)<br>
   *
   * GET /sapi/v2/sub-account/futures/positionRisk<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-futures-position-risk-of-sub-account-v2-for-master-account}
   *
   * @param {string} email - Sub-account email
   * @param {number} futuresType - 1:USDT Margined Futures, 2:COIN Margined Futures
   * @param {object} [options]
   * @param config
   * @param {number} [options.recvWindow]
   */
  subAccountFuturesPositionRiskV2(
    email: string,
    futuresType: number | 1 | 2,
    options: RecvWindowOption = {},
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ email, futuresType });
    return this.signRequest(
      'GET',
      '/sapi/v2/sub-account/futures/positionRisk',
      Object.assign(options, { email, futuresType }),
      config,
    );
  }
}

export const SubAccount = new SubAccountApi();
