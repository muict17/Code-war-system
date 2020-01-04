module.exports = {
  // rootDir: "tests",
  // testMatch: ["**/__tests__/**/*.test.(ts|tsx|js|jsx)"],
  // preset: "@babel/preset-env",
  verbose: false,
  clearMocks: true,
  resetModules: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__fixtures__/",
    "/__tests__/",
    "/(__)?mock(s__)?/",
    "/__jest__/",
    ".?.min.js"
  ],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["js", "jsx", "json", "ts"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      enableTsDiagnostics: true
    }
  },
  moduleNameMapper: {
    "@db": "<rootDir>/src/db.ts",
    "@services": "<rootDir>/src/services",
    "@jwt": "<rootDir>/src/jwt.ts",
    "@interfaces/*": "<rootDir>/src/interfaces/*"
  }
};
