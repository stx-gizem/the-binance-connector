import { ApiBase } from '../../api-base';
import { ConfigOptions } from '../../@types/config/options';

export class BinanceApi extends ApiBase {
  private api = '/api/v3';

  protected get apiUrl() {
    return this.api;
  }

  protected set apiUrl(url: string) {
    this.api = url;
  }

  set config(configOptions: ConfigOptions) {
    this.setConfigOptions(configOptions);
  }
}
