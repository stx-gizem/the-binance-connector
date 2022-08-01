import { ApiBase } from "../../api-base";
import { ConfigOptions } from "../../@types/config/options";
import { Method } from "axios";
import { ApiUrl } from "../../api-url";

export class UsdMFuturesApi extends ApiBase {
  private configOpt: ConfigOptions = {};

  protected get config() {
    return this.configOpt;
  }

  setConfig(apiKey: string, apiSecret: string) {
    this.configOpt = {
      apiKey,
      apiSecret
    };
    return this;
  }

  protected publicRequest<R = any>(method: Method, path: string, params: {} = {}, config?: ConfigOptions, endpoint: ApiUrl = ApiUrl.FAPI): Promise<R> {
    return super.publicRequest(method, path, params, config, endpoint);
  }

  protected signRequest<R = any>(method: Method, path: string, params: {} = {}, config?: ConfigOptions, endpoint: ApiUrl = ApiUrl.FAPI): Promise<R> {
    return super.signRequest(method, path, params, config, endpoint);
  }
}
