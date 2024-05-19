// jest.config.js

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Ambiente de teste Node.js
  testMatch: ['**/*.test.ts'], // Padroniza os arquivos de teste
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./src/tests/utils/jest.setup.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/src/tests/*', '<rootDir>/src/external/http/*'],
  collectCoverageFrom: [
    "**/*.ts",
    "!**/node_modules/**", "!**src/controllers/**","!**/prisma/**", "!**src/server.ts", "!**src/api/**", '!**/external/database/**', '!**/entities/**'
]
};
