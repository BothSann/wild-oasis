module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    // Original rule
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Common rules set to warning level
    "no-unused-vars": "warn", // Unused variables
    "react/prop-types": "warn", // Missing prop validations
    "react-hooks/exhaustive-deps": "warn", // Dependencies in hooks
    "no-debugger": "warn", // Debugger statements
    "prefer-const": "warn", // Let that could be const
    "no-empty": "warn", // Empty block statements
    semi: ["warn", "always"], // Missing semicolons
    "no-extra-semi": "warn", // Extra semicolons
  },
};
