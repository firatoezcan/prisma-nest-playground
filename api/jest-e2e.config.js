module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: true,
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".e2e-spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "node",
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
  moduleNameMapper: {
    "@/ui(.*)$": "<rootDir>/../ui/src$1",
    "@/web(.*)$": "<rootDir>/../web/src$1",
    "@/api(.*)$": "<rootDir>/../api/src$1",
  },
};
