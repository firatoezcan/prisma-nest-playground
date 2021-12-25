/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, FC, useContext, useEffect, useMemo, useState } from "react";
import { Configuration, ConfigurationParameters } from "web/openapi";

import * as APIs from "@/web/../openapi/apis";

export type ApiContextType = Omit<ConfigurationParameters, "basePath"> & {
  basePath: string;
};

const ApiContext = createContext<Configuration | undefined>(undefined);

export const ApiProvider: FC<ApiContextType> = (props) => {
  const { children, ...value } = props;
  const config = useMemo(() => new Configuration(value), [value]);

  return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>;
};

type RemoveRaw<T extends string> = T extends `${string}Raw` ? never : T;
type RemoveMiddleware<T extends string> = T extends `${string}Middleware` ? never : T;
type OperationsOnly<T extends string> = RemoveMiddleware<RemoveRaw<T>>;
type RemoveQueries<T extends string> = T extends `find${string}` ? never : T;
type RemoveMutations<T extends string> = T extends `find${string}` ? T : never;
type Queries<T extends string> = RemoveMutations<OperationsOnly<T>>;
type Mutations<T extends string> = RemoveQueries<OperationsOnly<T>>;
type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

const useUser = <T extends OperationsOnly<keyof APIs.UserApi>>(operation: T) => {
  const config = useContext(ApiContext);
  if (config === undefined) {
    throw new Error("useApi must be used within a ApiProvider");
  }
  const client = new APIs.UserApi(config);
  const [result, setResult] = useState<Awaited<ReturnType<APIs.UserApi[T]>> | null>(null);
  const [isLoading, setisLoading] = useState(false);
  const [fetchError, setFetchError] = useState();

  const execute = async (...params: Parameters<APIs.UserApi[T]>) => {
    setisLoading(true);
    try {
      /**
       * Typescript thinks we can combine one operation with the parameters of another operation.
       * We know that this won't compile though, so in a sense we do check for this so we expect this error to be here
       */
      // @ts-expect-error
      const res = await client[operation](...params);
      // @ts-expect-error See above
      setResult(res);
    } catch (error: any) {
      console.error(error);
      setFetchError(error);
    } finally {
      setisLoading(false);
    }
  };

  return [{ isLoading, fetchError, result }, execute] as const;
};

export const useUserMutation = <T extends Mutations<keyof APIs.UserApi>>(operation: T) => {
  return useUser(operation);
};

export const useUserQuery = <T extends Queries<keyof APIs.UserApi>>(operation: T, ...params: Parameters<APIs.UserApi[T]>) => {
  const [data, execute] = useUser(operation);

  useEffect(() => {
    execute(...params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)]);

  return data;
};
