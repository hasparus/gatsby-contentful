module.exports = {
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    graphql: false,
  },
  plugins: ['sonarjs', 'unicorn'],
  extends: [
    'airbnb',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
  ],
  rules: {
    "no-unused-vars": ["error", { 
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
     }],
     "unicorn/filename-case": 0, // This is not needed in React project
  }
};
