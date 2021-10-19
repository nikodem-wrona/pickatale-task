import React, { ComponentType, createContext, FC, useContext } from "react";
import { ApiClient } from "./ApiClient";

const ApiClientContext = createContext<ApiClient | null>(null);

export const useApiClient = (): ApiClient => {
  const apiClient = useContext(ApiClientContext);

  if (!apiClient) {
    throw new Error("ApiClient has not been configured");
  }

  return apiClient;
};

export function withApiClient() {
  return function <T>(Component: ComponentType<T>): ComponentType<T> {
    const WithDietitianApiClient: FC<T> = (props) => {
      const client = new ApiClient();

      return (
        <ApiClientContext.Provider value={client}>
          <Component {...props} />
        </ApiClientContext.Provider>
      );
    };

    return WithDietitianApiClient;
  };
}
