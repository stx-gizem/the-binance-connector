import { ConfigOptions } from './@types/config/options';
import axios, { Method } from 'axios';
import { buildQueryString, removeEmptyValue } from './helpers/utils';
import { reqUserAgent } from './helpers/constants';
import * as crypto from 'crypto';
import { ApiUrl } from "./api-url";

export abstract class ApiBase {
  private baseUrl = `https://api.binance.com`;
  private configOptions: ConfigOptions;

  protected set url(url: string) {
    this.baseUrl = url;
  }

  protected get url() {
    return this.baseUrl;
  }

  protected setConfigOptions(config: ConfigOptions) {
    this.configOptions = config;
  }

  protected signRequest<R = any>(
    method: Method,
    path: string,
    params = {},
    config?: ConfigOptions,
    endpoint: ApiUrl = ApiUrl.DEFAULT,
  ) {
    config = config ? config : this.configOptions;
    params = removeEmptyValue(params);
    const timestamp = Date.now();
    const queryString = buildQueryString({...params, timestamp});
    const signature = crypto
      .createHmac('sha256', config.apiSecret)
      .update(queryString)
      .digest('hex');
    return axios
      .create({
        baseURL: endpoint,
        headers: {
          'Content-Type': 'application/json',
          'X-MBX-APIKEY': config.apiKey,
          'User-Agent': reqUserAgent,
        },
      })
      .request<any, R>({
        method,
        url: `${path}?${queryString}&signature=${signature}`,
      }).catch((err) => {
        const errBody = {
          status: err?.response?.status,
          data: null,
        };
        if (err.response) {
          errBody.data = err.response.data || null;
        }
        throw err;
      });
  }

  protected publicRequest<R = any>(
    method: Method,
    path: string,
    params = {},
    config?: ConfigOptions,
    endpoint: ApiUrl = ApiUrl.DEFAULT,
  ) {
    params = removeEmptyValue(params);
    params = buildQueryString(params);
    if (params !== '') {
      path = `${path}?${params}`;
    }
    return axios
      .create({
        baseURL: endpoint,
        headers: {
          'Content-Type': 'application/json',
          'X-MBX-APIKEY': config.apiKey || '',
          'User-Agent': reqUserAgent,
        },
      })
      .request<any, R>({
        method,
        url: path,
      }).catch((err) => {
        const errBody = {
          status: err?.response?.status,
          data: null,
        };
        if (err.response) {
          errBody.data = err.response.data || null;
        }
        throw err;
      });
  }
}
