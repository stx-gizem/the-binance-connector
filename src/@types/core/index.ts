export interface LimitOptions {
  limit?: number;
}

export interface TimeFilterOptions {
  startTime?: number;
  endTime?: number;
}

export interface FilterOptions extends LimitOptions, TimeFilterOptions {}

export interface RecvWindowOption {
  recvWindow?: number;
}
