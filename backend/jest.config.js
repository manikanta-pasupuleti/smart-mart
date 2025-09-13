module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/'],
  transform: {} // no Babel/ts transform; tests should be CommonJS
};
