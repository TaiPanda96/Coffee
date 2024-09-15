// @ts-check
import 'dotenv/config'

import next from '@next/eslint-plugin-next'
import eslintConfigPrettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default [
    ...tseslint.configs.strictTypeChecked,
    eslintConfigPrettier,

    {
        // global ignore patterns
        ignores: [
            '**/node_modules/**',
            '**/.next/**',
            '**/src/gen/**',
            '**/*.config.js',
            '**/.jobs-dist/**',
        ],
    },
    {
        // inform eslint where to find tsconfig
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            react: react,
            'react-hooks': hooks,
            '@next/next': next,
        },
        settings: { react: { version: 'detect' } },
        rules: {
            // MERGE recommended rules from plugins
            ...react.configs['jsx-runtime'].rules,
            ...hooks.configs.recommended.rules,
            ...next.configs.recommended.rules,
            ...next.configs['core-web-vitals'].rules,

            // ADJUST select rules
            // These are opinionated to enforce consistency.
            '@next/next/no-img-element': 'error', // Use <Image> from next instead for optimized images
            '@typescript-eslint/semi': ['error', 'never'], // Do NOT allow semi-colons
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '^_', // Allow unused variables starting with _
                    args: 'none', // Allow unused arguments for clarity of what's available to functions
                },
            ],
            // Enforce use of enums for comparison (i.e. no direct number/string value comparison)
            '@typescript-eslint/no-unsafe-enum-comparison': 'error',
            // Numbers can reliably be used in template strings, so allow them.
            // Other types should be explicitly converted to strings.
            '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],

            // REDUCE the level of select rules.
            // These are made to accommodate the current state of the codebase, and should
            // be removed or increased to error as the codebase improves.
            'max-len': [
                'warn',
                {
                    code: 100, // Matches .prettierrc printWidth
                    ignoreUrls: true, // URLs can't really be broken up
                    ignorePattern: '^(import\\s.+\\sfrom\\s.+|\\} from)', // imports are sometimes long
                },
            ],

            // We don't rely on `this`
            '@typescript-eslint/unbound-method': 'off',

            // Following this rule creates some very awkward typing situations that feel suboptimal
            '@typescript-eslint/unified-signatures': 'off',

            '@typescript-eslint/no-unnecessary-condition': [
                'warn',
                { allowConstantLoopConditions: true }, // e.g. while(true)
            ],
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
            '@typescript-eslint/no-redundant-type-constituents': 'warn',
            '@typescript-eslint/no-confusing-void-expression': 'warn',
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/require-await': 'warn',
            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: { attributes: false }, // e.g. for passing async onSubmit handlers to forms
                },
            ],
        },
    },
]