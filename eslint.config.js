// eslint.config.js
import js from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

export default [
  {

    ignores: [
      '**/node_modules/**',
      '.serverless/**',
      'tests/**'
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    files: ['src/**/*.ts'],
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: './tsconfig.json', // Make sure this path is correct
      },
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules, // Start with TypeScript recommendations
      ...typescriptEslintPlugin.configs['recommended-type-checked'].rules, // Add type-aware rules

      // Strict JSLint-like rules for TypeScript (adapt as needed)
      '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
      '@typescript-eslint/no-explicit-any': 'off', // Consider 'warn' or stricter
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-require-imports': 'off',

      // Disable JS-specific rules that TypeScript handles better
      'no-undef': 'off',
      'no-redeclare': 'off',
    }
  }
];
