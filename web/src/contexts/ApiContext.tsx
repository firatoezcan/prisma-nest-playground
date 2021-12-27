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

type OperationsOnly<T extends any> = RemoveMiddleware<RemoveRaw<OnlyStrings<T>>>;
type OnlyStrings<T extends any> = T extends string ? T : never;
type RemoveQueries<T extends string> = T extends `find${string}` ? never : T;
type RemoveMutations<T extends string> = T extends `find${string}` ? T : never;
type Queries<T extends any> = RemoveMutations<OperationsOnly<T>>;
type Mutations<T extends any> = RemoveQueries<OperationsOnly<T>>;

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

const createApi = <ApiType extends typeof APIs[keyof typeof APIs]>(api: ApiType) => {
  type Instance = InstanceType<ApiType>;

  const createClient = () => {
    const config = useContext(ApiContext);
    if (config === undefined) {
      throw new Error("useApi must be used within a ApiProvider");
    }
    return new api(config);
  };

  let resourceClient: ReturnType<typeof createClient> | undefined;
  const getClient = () => {
    if (!resourceClient) {
      resourceClient = createClient();
    }
    return resourceClient;
  };

  const BaseHandler = <T extends OperationsOnly<keyof Instance>>(operation: T) => {
    type Operation = Instance[typeof operation];

    const client = getClient();
    // @ts-expect-error We know better
    const [result, setResult] = useState<Awaited<ReturnType<Operation>> | null>(null);
    const [isLoading, setisLoading] = useState(false);
    const [fetchError, setFetchError] = useState();

    // @ts-expect-error We know better
    const execute = async (...params: Parameters<Operation>) => {
      setisLoading(true);
      try {
        /**
         * Typescript thinks we can combine one operation with the parameters of another operation.
         * We know that this won't compile though, so in a sense we do check for this so we expect this error to be here
         */
        // @ts-expect-error
        const res = await client[operation](...params);
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

  const mutate = <T extends Mutations<keyof Instance>>(operation: T) => {
    return BaseHandler(operation);
  };

  // @ts-expect-error We know better
  const query = <T extends Queries<keyof Instance>>(operation: T, ...params: Parameters<Instance[T]>) => {
    const [data, execute] = BaseHandler(operation);

    useEffect(() => {
      execute(...params);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(params)]);

    return data;
  };
  return { query, mutate };
};

const userHooks = createApi(APIs.UserApi);
// const findManyResponse = userHooks.query("findManyUser");
// const findOneResponse = userHooks.query("findOneUser", { id: "5" });
// const createFunc = userHooks.mutate("createUser");
// const deleteFunc = userHooks.mutate("deleteUser");
// const updateFunc = userHooks.mutate("updateUser");

export const useUserMutation = userHooks.mutate;
export const useUserQuery = userHooks.query;
