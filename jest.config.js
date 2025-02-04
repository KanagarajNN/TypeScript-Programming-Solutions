module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/sorting/**/*.test.ts'], // Only run .ts test files inside sorting/
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files
  },
  moduleFileExtensions: ['ts', 'js'], // Recognize both .ts and .js files
  clearMocks: true,
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore compiled output
};
