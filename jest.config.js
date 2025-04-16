module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript support
    testEnvironment: 'node', // Use Node.js environment
    testMatch: ['\*\*/\*.test.ts'], // Find test files with .test.ts extension
    verbose: true,
    moduleNameMapper: {
      '^sequelize$': '<rootDir>/tests/__mocks__/sequelize.js',
    },
};