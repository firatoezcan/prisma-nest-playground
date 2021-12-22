module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: true,
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "@/ui(.*)$": "<rootDir>/../ui/src$1",
    "@/web(.*)$": "<rootDir>/../web/src$1",
  },
};
