module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "no-type-assertion"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "prefer-const": "error",
    "no-console": "error",
    "no-type-assertion/no-type-assertion": "error",
  },
};
