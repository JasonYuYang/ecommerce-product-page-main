module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    worker: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.*', 'webpack', 'public', 'node_modules', 'dist'], // 忽略指定文件夹或文件
  rules: {
    // 在这里添加需要覆盖的规则
    'react/function-component-definition': 0,
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
