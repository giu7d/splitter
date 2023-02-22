module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts}', '!**/*.test.{js,ts}'],
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.ts'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['ts', 'js', 'json']
}
