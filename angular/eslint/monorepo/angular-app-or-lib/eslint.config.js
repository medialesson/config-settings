import nx from "@nx/eslint-plugin";
import baseConfig from "../eslint.config.js";

export default [
  ...baseConfig,
  ...nx.configs["flat/angular"],
  ...nx.configs["flat/angular-template"],
  {
    files: ["**/*.ts"],
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    rules: {
      "@angular-eslint/template/attributes-order": [
        "warn",
        {
          alphabetical: true,
        },
      ],
      "@angular-eslint/template/eqeqeq": [
        "error",
        {
          allowNullOrUndefined: true,
        },
      ],
      "@angular-eslint/template/prefer-self-closing-tags": ["warn"],
    },
  },
];
