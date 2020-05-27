module.exports = {
  extends: [
    'eslint:recommended',
    // 'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    // 'prettier/@typescript-eslint'
  ],
  ignorePatterns: ["lib/", "node_modules/"],
  plugins: ['import', 'security'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    // typescript
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    // apparently the regular no-unused-vars rule should be turned off for the ts one to work as expected?
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_', 'argsIgnorePattern': '^_' }],

    // eslint rules
    'no-dupe-class-members': 'off',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'dot-notation': 'error',
    'no-extra-boolean-cast': 'off',
    yoda: 'error',
    // eqeqeq: 'error',

    // plugin: import
    'import/first': 'error',
    'import/order': ['error', {
      "groups": [["builtin", "external"], "parent", "sibling", "index"],
      'newlines-between': 'never'
    }],

    // security
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-unsafe-regex': 'error',
  },
  overrides: [
    {
      files: ['**/*.+(test|spec).+(js|jsx|ts|tsx)'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/unbound-method': 'off',

        'security/detect-buffer-noassert': 'off',
        'security/detect-child-process': 'off',
        'security/detect-disable-mustache-escape': 'off',
        'security/detect-eval-with-expression': 'off',
        'security/detect-new-buffer': 'off',
        'security/detect-no-csrf-before-method-override': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        'security/detect-non-literal-regexp': 'off',
        'security/detect-non-literal-require': 'off',
        'security/detect-object-injection': 'off',
        'security/detect-possible-timing-attacks': 'off',
        'security/detect-pseudoRandomBytes': 'off',
        'security/detect-unsafe-regex': 'off',
      },
    },
  ],
};
