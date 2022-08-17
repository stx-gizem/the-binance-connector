import { UsdMFuturesApi } from "./usd-m-futures-api";
import { ConfigOptions } from "../../@types/config/options";

class DataStreamUsdMApi extends UsdMFuturesApi {
  start(config: ConfigOptions = {}) {
    return this.signRequest('POST', '/fapi/v1/listenKey', {}, config);
  }

  keepalive(config: ConfigOptions = {}) {
    return this.signRequest('PUT', '/fapi/v1/listenKey', {}, config);
  }

  close(config: ConfigOptions = {}) {
    return this.signRequest('DELETE', '/fapi/v1/listenKey', {}, config);
  }

}

export const UsdFuturesDataStream = new DataStreamUsdMApi();
