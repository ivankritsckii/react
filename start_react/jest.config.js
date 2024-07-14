
export default {
    // среда тестирования - браузер
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.jsx'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/test/__mocks__/fileMock.js',
    },
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
    bail: 1,
    verbose: true,
  }

