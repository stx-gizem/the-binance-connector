import { ApiBase } from "../../api-base";
import { ConfigOptions } from "../../@types/config/options";
import { Method } from "axios";
import { ApiUrl } from "../../api-url";

export class CoinMFuturesApi extends ApiBase {

  protected publicRequest<R = any>(method: Method, path: string, params: {} = {}, config?: ConfigOptions, endpoint: ApiUrl = ApiUrl.DAPI): Promise<R> {
    return super.publicRequest(method, path, params, config, endpoint);
  }

  protected signRequest<R = any>(method: Method, path: string, params: {} = {}, config?: ConfigOptions, endpoint: ApiUrl = ApiUrl.DAPI): Promise<R> {
    return super.signRequest(method, path, params, config, endpoint);
  }
}
