module.exports = {
  root: true,
  env: { browser: true, es2023: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier"
  ],
  ignorePatterns: [
    "dist",
    "node_modules",
    "assets",
    ".eslintrc.cjs",
    "*.config.*",
    "ui"
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
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off"
  }
}
