/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";

import * as APIs from "@/web/../openapi/apis";

import { __ApiContext } from "./ApiContext";

type Resources<T extends string> = T extends `${infer Prefix}Api` ? Prefix : never;

type RemoveRaw<T extends string> = T extends `${string}Raw` ? never : T;
type RemoveMiddleware<T extends string> = T extends `${string}Middleware` ? never : T;

type OperationsOnly<T extends any> = RemoveMiddleware<RemoveRaw<OnlyStrings<T>>>;
type OnlyStrings<T extends any> = T extends string ? T : never;
type RemoveQueries<T extends string> = T extends `find${string}` ? never : T;
type RemoveMutations<T extends string> = T extends `find${string}` ? T : never;
type Queries<T extends any> = RemoveMutations<OperationsOnly<T>>;
type Mutations<T extends any> = RemoveQueries<OperationsOnly<T>>;

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export const createApiHooks = <ResourceName extends Resources<keyof typeof APIs>>(name: ResourceName) => {
  type ApiType = typeof APIs[`${ResourceName}Api`];

  type Instance = InstanceType<ApiType>;

  const createClient = () => {
    const config = useContext(__ApiContext);
    if (config === undefined) {
      throw new Error("useApi must be used within a ApiProvider");
    }
    return new APIs[name + "Api"](config);
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
