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
    project: ['./client/tsconfig.json', './server/tsconfig,json'],
  },
  ignorePatterns: ['.*', 'webpack', 'public', 'node_modules', 'dist'], // 忽略指定文件夹或文件
  rules: {
    // 在这里添加需要覆盖的规则
    'react/function-component-definition': 0,
    'react/self-closing-comp': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/require-default-props': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    //在require裡面可以用template literals
    'import/no-dynamic-require': 0,
    '@typescript-eslint/no-shadow': 0,
    'prefer-const': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
