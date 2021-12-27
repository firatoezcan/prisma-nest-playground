/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, FC, useMemo } from "react";
import { Configuration, ConfigurationParameters } from "web/openapi";

export type ApiContextType = Omit<ConfigurationParameters, "basePath"> & {
  basePath: string;
};

// Double underscore since we dont want it to be used directly
// eslint-disable-next-line @typescript-eslint/naming-convention
export const __ApiContext = createContext<Configuration | undefined>(undefined);

export const ApiProvider: FC<ApiContextType> = (props) => {
  const { children, ...value } = props;
  const config = useMemo(() => new Configuration(value), [value]);

  return <__ApiContext.Provider value={config}>{children}</__ApiContext.Provider>;
};
