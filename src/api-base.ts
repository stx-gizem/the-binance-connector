import { ConfigOptions } from './@types/config/options';
import axios, { AxiosResponse, Method } from 'axios';
import { buildQueryString, removeEmptyValue } from './helpers/utils';
import { reqUserAgent } from './helpers/constants';
import * as crypto from 'crypto';
import { ApiUrl } from './api-url';

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

  protected signRequest(
    method: Method,
    path: string,
    params = {},
    config?: ConfigOptions,
    endpoint: ApiUrl = ApiUrl.DEFAULT,
  ): Promise<AxiosResponse> {
    config = config ? config : this.configOptions;
    params = removeEmptyValue(params);
    const timestamp = Date.now();
    const queryString = buildQueryString({ ...params, timestamp });
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
      .request({
        method,
        url: `${path}?${queryString}&signature=${signature}`,
      }).catch((err) => {
        let errorMessage = JSON.stringify(err?.response);
        if (err.response) {
          errorMessage = `Code #${err?.response?.status || '0'} - Message: ${err?.response?.data?.msg || 'network error'}`;
        }
        throw new Error(errorMessage);
      });
  }

  protected publicRequest<R = any>(
    method: Method,
    path: string,
    params = {},
    config?: ConfigOptions,
    endpoint: ApiUrl = ApiUrl.DEFAULT,
  ): Promise<AxiosResponse> {
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
      .request({
        method,
        url: path,
      }).catch((err) => {
        let errorMessage = JSON.stringify(err?.response);
        if (err.response) {
          errorMessage = `Code #${err?.response?.status || '0'} - Message: ${err?.response?.data?.msg || 'network error'}`;
        }
        throw new Error(errorMessage);
      });
  }
}
