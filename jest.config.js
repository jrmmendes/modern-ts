module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
  ],
};
