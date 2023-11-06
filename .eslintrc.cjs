module.exports = {
  root: true,
  env: { browser: true, es2023: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended"
  ],
  ignorePatterns: [
    "dist",
    "node_modules",
    "assets",
    ".eslintrc.cjs",
    "*.config.*"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "import/prefer-default-export": "off"
  }
}
