import { ApiBase } from "../../api-base";
import { ConfigOptions } from "../../@types/config/options";
import { AxiosResponse, Method } from "axios";
import { ApiUrl } from "../../api-url";

export class CoinMFuturesApi extends ApiBase {

  protected publicRequest<R = any>(method: Method, path: string, params: {} = {}, config?: ConfigOptions, endpoint: ApiUrl = ApiUrl.DAPI): Promise<AxiosResponse> {
    return super.publicRequest(method, path, params, config, endpoint);
  }

  protected signRequest<R = any>(method: Method, path: string, params: {} = {}, config?: ConfigOptions, endpoint: ApiUrl = ApiUrl.DAPI): Promise<AxiosResponse> {
    return super.signRequest(method, path, params, config, endpoint);
  }
}
