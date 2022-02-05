module.exports = {
  globals: {
    Java: true
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  ignorePatterns: ['common/java-types**']
}
