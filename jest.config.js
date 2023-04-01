module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["node_modules/"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
  testMatch: ["**/__tests__/*.+(ts|tsx|js)", "**/*.test.+(ts|tsx|js)"],
  setupFilesAfterEnv: [
    "./jest.setup.js",
    "@testing-library/jest-dom",
    //"jest-localstorage-mock",
  ],
  collectCoverageFrom: ["<rootDir>/src/**/*.tsx"],
  //coveragePathIgnorePatterns: ["<rootDir>/src/esi-activity-mf.js"],
  coverageReporters: ["html", "text", "text-summary", "cobertura", "lcov"],
  reporters: ["default"],
};
