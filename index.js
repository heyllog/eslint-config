module.exports = {
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'filename-rules'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      }
    }
  },
  rules: {
    // Basic
    curly: ['error', 'multi-line'],
    eqeqeq: 'error',
    'no-eq-null': 'error',
    'no-nested-ternary': 'error',
    'no-console': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-param-reassign': 'warn',

    // Style
    'max-len': [
      'error',
      {
        // hard limit for line length. preferred line length is controlled by
        // prettier. this is only for cases when prettier cannot reformat
        // code to preferred length
        code: 160,
        // prettier does not control line length in comments, so enforce it
        // with eslint
        comments: 100,
        // urls in comments cannot be wrapped, so we need to ignore them
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true
      }
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'prefer-template': 'error',
    'key-spacing': 'error',
    'eol-last': ['error', 'always'],

    // Imports
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'no-duplicate-imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/prefer-default-export': 'off',
    'filename-rules/match': ['error', 'kebabcase'],

    // Typescript
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 1,
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['if', 'interface', 'type'], next: ['*']},
      { blankLine: 'always', prev: ['*'], next: ['if', 'return', 'interface', 'type']},
    ],
    'import/no-unresolved': 'error',
    'class-methods-use-this': 'off',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    // warn on unused promises (not await'ed or then'ed).
    // helps to not forget to call await on async function calls with no expected result.
    // add 'void' to explicitly ignore promise in certain cases
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
    'no-void': ['warn', { allowAsStatement: true }],
    'consistent-return': 'warn',

    // override airbnb config to allow for-of/for-in loops.
    // those loops were banned because of "slow performance", which is debatable decision.
    // https://github.com/airbnb/javascript/issues/1271
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
    ],
  },
}
