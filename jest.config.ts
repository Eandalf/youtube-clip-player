import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src/tests/unit"],
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@main/(.*)$": "<rootDir>/src/main/$1",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "ts-jest",
      { tsconfig: "tsconfig.json" },
    ],
  },
  collectCoverage: true,
  coverageDirectory: "<rootDir>/.jest/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts, tsx, js, jsx}",
  ],
  cacheDirectory: "<rootDir>/.jest/cache",
};

export default config;
