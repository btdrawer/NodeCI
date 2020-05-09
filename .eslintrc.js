module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
        es2020: true,
    },
    extends: ["eslint:recommended", "prettier"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
    },
};
