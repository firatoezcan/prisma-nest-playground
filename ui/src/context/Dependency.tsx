import { Locale } from "date-fns";
import type { ParsedUrlQuery } from "querystring";
import React, { createContext, FC, useContext } from "react";
import { UrlObject } from "url";

type Url = string | UrlObject;

export type LinkProps = {
  href: Url;
  as?: Url;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  className?: string;
};

export type Router = {
  route: string;
  pathname: string;
  query: ParsedUrlQuery;
  asPath: string;
  basePath: string;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
};

export type DependencyContextType = {
  Link: React.FC<LinkProps>;
  t: (key: string) => string;
  dateLocale: Locale;
  router: Router;
};

const DependencyContext = createContext<DependencyContextType | undefined>(undefined);

export const DependencyProvider: FC<DependencyContextType> = (props) => {
  const { children, ...value } = props;

  return <DependencyContext.Provider value={value}>{children}</DependencyContext.Provider>;
};

export const useDependency = () => {
  const context = useContext(DependencyContext);
  if (context === undefined) {
    throw new Error("useDependency must be used within a DependencyProvider");
  }
  return context;
};
