module.exports = {
    "env": {
        "browser": true
    },
    "globals": {

    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint"],
    "extends": [
        // Fix for "Unable to resolve path to module..."
        // See https://github.com/benmosher/eslint-plugin-import#typescript
        "plugin:import/typescript"
    ],
    "overrides": [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/no-unused-vars": [2, { args: "none" }]
            }
        }
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
        "quotes": ["warn", "double"],
        "comma-dangle": ["warn", "never"],
        // https://eslint.org/docs/rules/prefer-template
        "prefer-template": "off",
        // https://eslint.org/docs/rules/no-useless-concat
        "no-useless-concat": "warn",
        // https://eslint.org/docs/rules/max-len
        "max-len": ["warn", 160, 2],
        // https://eslint.org/docs/rules/no-plusplus
        "no-plusplus": "off",
        // https://eslint.org/docs/1.10.3/rules/no-unused-expressions
        "no-unused-expressions": ["warn", { allowShortCircuit: true }],
        // https://eslint.org/docs/rules/indent
        "indent": ["warn", 4],
        "react/jsx-indent": ["warn", 4],
        // Rule options needed to allow destructuring syntax
        // See https://github.com/eslint/eslint/issues/9259
        // https://eslint.org/docs/rules/object-curly-newline
        "object-curly-newline": ["warn", {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        }],
    }
}