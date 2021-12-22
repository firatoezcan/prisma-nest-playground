const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@stack/ui"]);
const withSourceMaps = require("@zeit/next-source-maps")();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const i18nConfig = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...i18nConfig,
};

const config = withPlugins([withBundleAnalyzer, withSourceMaps, withTM(nextConfig)]);
module.exports = config;
