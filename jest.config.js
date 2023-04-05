module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["node_modules/"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
  },
  modulePaths: ["<rootdir>/src"],
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
