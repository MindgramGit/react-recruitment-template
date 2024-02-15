/* eslint-env node */

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    env: {
        browser: true,
        es2020: true,
    },
    extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
    plugins: ["@typescript-eslint", "react", "react-hooks", "simple-import-sort"],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/no-floating-promises": [
            "error",
            {
                ignoreVoid: true,
            },
        ],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: {
                    arguments: false,
                    attributes: false,
                },
            },
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: ["src/config/tests/**/*", "**/*.spec.*"],
            },
        ],
        "import/prefer-default-export": "off",
        "import/no-default-export": "warn",
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [
                    // Side effect imports.
                    ["^\\u0000"],
                    // React and react-* libs and other packages
                    ["^react$", "^react-.*", ".*react$", "^@.*", "^"],
                    // app imports
                    ["^config.*"],
                    ["^api.*"],
                    ["^models.*"],
                    ["^layouts.*"],
                    ["^pages.*"],
                    ["^shared.*"],
                    ["^features.*"],
                    ["^styles.*"],
                    ["^hooks.*"],
                    ["^utils.*"],
                    ["^assets.*"],
                    // Anything that starts with a dot.
                    ["^\\..+", "^\\.$"],
                ],
            },
        ],
        "react/display-name": "off",
        "react/jsx-key": "error",
        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                ignoreCase: true,
                multiline: "last",
                reservedFirst: true,
                shorthandLast: true,
            },
        ],
        "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "no-underscore-dangle": [
            "error",
            {
                allow: ["__env"],
            },
        ],
        "max-lines": "warn",
        "no-alert": "warn",
        "no-console": "warn",
        "no-void": [
            "error",
            {
                allowAsStatement: true,
            },
        ],
    },
    overrides: [
        // Apply type aware linting only to source files
        {
            files: ["src/**/*.{ts,tsx}"],
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
        },
    ],
}
