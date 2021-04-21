module.exports = {
  roots: ["<rootDir>/src"],

  preset: "ts-jest",
  testEnvironment: "node",

  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
