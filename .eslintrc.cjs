module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended', 'plugin:import/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/default': 'off',
    'import/no-unresolved': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': [
          'warn',
          {
            groups: [
              ['builtin', 'external', 'internal'],
              ['parent', 'sibling', 'index'],
            ],
            pathGroups: [
              {
                pattern: '*.css',
                patternOptions: { matchBase: true },
                group: 'sibling',
                position: 'after',
              },
              {
                pattern: '@*',
                patternOptions: { matchBase: true },
                group: 'internal',
                position: 'after',
              },
            ],
            'newlines-between': 'always',
          },
        ],
      },
    },
    {
      files: ['*.stories.tsx', 'index.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/order': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
}
