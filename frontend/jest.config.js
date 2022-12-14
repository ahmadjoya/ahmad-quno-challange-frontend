module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.history/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
