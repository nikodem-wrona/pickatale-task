import axios, { AxiosInstance } from "axios";

export type HttpClient = AxiosInstance;

type Options = {
  baseURL?: string;
};

export const createHttpClient = (options: Options): HttpClient => {
  const { baseURL } = options;
  const httpClient = axios.create({ baseURL });
  return httpClient;
};
