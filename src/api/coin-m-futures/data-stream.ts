import { CoinMFuturesApi } from "./coin-m-futures-api";
import { ConfigOptions } from "../../@types/config/options";

class DataStreamCoinMApi extends CoinMFuturesApi {
  start(config: ConfigOptions = {}) {
    return this.signRequest('POST', '/dapi/v1/listenKey', {}, config);
  }

  keepalive(config: ConfigOptions = {}) {
    return this.signRequest('PUT', '/dapi/v1/listenKey', {}, config);
  }

  close(config: ConfigOptions = {}) {
    return this.signRequest('DELETE', '/dapi/v1/listenKey', {}, config);
  }
}

export const CoinFuturesDataStream = new DataStreamCoinMApi();
