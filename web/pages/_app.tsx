import "../styles/index.css";

import { de, enUS } from "date-fns/locale";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { DependencyContextType, DependencyProvider } from "@/ui/context/Dependency";
import { AppConfig } from "@/web/appConfig";
import { ApiProvider } from "@/web/contexts/ApiContext";

const localeMap: Record<string, Locale> = {
  de,
  en: enUS,
};

const NextLink: DependencyContextType["Link"] = ({ children, className, ...linkProps }) => (
  <Link {...linkProps}>
    <a className={className}>{children}</a>
  </Link>
);

const App: React.FC<NextAppProps> = (props) => {
  const { Component, pageProps } = props;

  const router = useRouter();
  const { locale } = router;
  if (!locale) {
    throw new Error("Configure the locales in next.config.js");
  }

  // You're gonna need this at some point
  const dateLocale = localeMap[locale];
  if (!dateLocale) {
    throw new Error(`Configure the localeMap to include a mapping for "${locale}"`);
  }

  return (
    <>
      <Head>
        <title>{AppConfig.applicationName}</title>
      </Head>
      <ApiProvider basePath="http://localhost:3001">
        <DependencyProvider Link={NextLink} t={(key) => key} dateLocale={dateLocale} router={router}>
          <Component {...pageProps} />
        </DependencyProvider>
      </ApiProvider>
    </>
  );
};

export default App;
