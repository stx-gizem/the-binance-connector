import { BinanceApi } from './binance-api';
import { validateRequiredParameters } from '../../helpers/validation';
import { ConfigOptions } from '../../@types/config/options';

class StreamApi extends BinanceApi {
  /**
   * Create a ListenKey (USER_STREAM)<br>
   *
   * POST /api/v3/userDataStream<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-spot}
   */
  createListenKey(config: ConfigOptions = {}) {
    return this.publicRequest('POST', '/api/v3/userDataStream', {}, config);
  }

  /**
   * Ping/Keep-alive a ListenKey (USER_STREAM)<br>
   *
   * PUT /api/v3/userDataStream<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-spot}
   *
   * @param {string} listenKey
   * @param config
   */
  renewListenKey(listenKey: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ listenKey });
    return this.publicRequest(
      'PUT',
      '/api/v3/userDataStream',
      { listenKey },
      config,
    );
  }

  /**
   * Close a ListenKey (USER_STREAM)<br>
   *
   * DELETE /api/v3/userDataStream<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-spot}
   *
   * @param {string} listenKey
   * @param config
   */
  closeListenKey(listenKey: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ listenKey });
    return this.publicRequest(
      'DELETE',
      '/api/v3/userDataStream',
      { listenKey },
      config,
    );
  }

  /**
   * Create a Margin ListenKey (USER_STREAM)<br>
   *
   * POST /sapi/v1/userDataStream<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-margin}
   *
   */
  createMarginListenKey(config: ConfigOptions = {}) {
    return this.publicRequest('POST', '/sapi/v1/userDataStream', {}, config);
  }

  /**
   * Ping/Keep-alive a Margin ListenKey (USER_STREAM)<br>
   *
   * PUT /sapi/v1/userDataStream<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-margin}
   *
   * @param {string} listenKey
   * @param config
   */
  renewMarginListenKey(listenKey: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ listenKey });
    return this.publicRequest(
      'PUT',
      '/sapi/v1/userDataStream',
      { listenKey },
      config,
    );
  }

  /**
   * Close a Margin ListenKey (USER_STREAM)<br>
   *
   * DELETE /sapi/v1/userDataStream<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-margin}
   *
   * @param {string} listenKey
   * @param config
   */
  closeMarginListenKey(listenKey: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ listenKey });
    return this.publicRequest(
      'DELETE',
      '/sapi/v1/userDataStream',
      { listenKey },
      config,
    );
  }

  /**
   * Create an Isolated Margin ListenKey (USER_STREAM)<br>
   *
   * POST /sapi/v1/userDataStream/isolated<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-isolated-margin}
   *
   * @param {string} symbol
   * @param config
   */
  createIsolatedMarginListenKey(symbol: string, config: ConfigOptions = {}) {
    validateRequiredParameters({ symbol });
    return this.publicRequest(
      'POST',
      '/sapi/v1/userDataStream/isolated',
      { symbol },
      config,
    );
  }

  /**
   * Ping/Keep-alive an Isolated Margin ListenKey (USER_STREAM)<br>
   *
   * PUT /sapi/v1/userDataStream/isolated<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-isolated-margin}
   *
   * @param {string} symbol
   * @param {string} listenKey
   * @param config
   */
  renewIsolatedMarginListenKey(
    symbol: string,
    listenKey: string,
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol, listenKey });
    return this.publicRequest(
      'PUT',
      '/sapi/v1/userDataStream/isolated',
      { symbol, listenKey },
      config,
    );
  }

  /**
   * Close an Isolated Margin ListenKey (USER_STREAM)<br>
   *
   * DELETE /sapi/v1/userDataStream/isolated<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-isolated-margin}
   *
   * @param {string} symbol
   * @param {string} listenKey
   * @param config
   */
  closeIsolatedMarginListenKey(
    symbol: string,
    listenKey: string,
    config: ConfigOptions = {},
  ) {
    validateRequiredParameters({ symbol, listenKey });
    return this.publicRequest(
      'DELETE',
      '/sapi/v1/userDataStream/isolated',
      { symbol, listenKey },
      config,
    );
  }
}

export const Stream = new StreamApi();
