import { ApiBase } from '../../api-base';
import { ConfigOptions } from "../../@types/config/options";

export class BrokerApi extends ApiBase {
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
}
