module.exports = async () => {
  return {
    moduleNameMapper: {
      "\\.(css|sass|less|scss)$": "identity-obj-proxy",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "ts-jest",
    setupFilesAfterEnv: [
      "<rootDir>/tests/jest/jest.setup.ts",
    ],
    transform: {
      "^.+\\.tsx$": "ts-jest"
    },
    testEnvironment: 'jest-environment-jsdom',
    verbose: true,
  };
};
