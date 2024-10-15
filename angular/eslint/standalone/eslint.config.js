import nx from "@nx/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginImport from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  {
    ignores: ["**/dist"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@stylistic": stylistic,
    },
    rules: {
      eqeqeq: ["error", "smart"],
      "no-console": ["warn"],
      "@stylistic/lines-around-comment": [
        "error",
        {
          allowArrayStart: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowEnumStart: true,
          allowInterfaceStart: true,
          allowModuleStart: true,
          allowObjectStart: true,
          allowTypeStart: true,
        },
      ],
      "@stylistic/lines-between-class-members": [
        "error",
        "always",
        {
          exceptAfterSingleLine: true,
        },
      ],
      "@stylistic/spaced-comment": [
        "error",
        "always",
        {
          markers: ["/"],
        },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        { accessibility: "no-public" },
      ],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "signature",
            ["decorated-field", "get", "set"],
            "field",
            "constructor",
            "decorated-method",
            "method",
          ],
        },
      ],
      "@typescript-eslint/no-inferrable-types": [
        "warn",
        { ignoreParameters: true },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowTernary: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "import/no-absolute-path": "error",
      "import/no-cycle": "error",
      "import/no-self-import": "error",
      "import/no-useless-path-segments": "error",
    },
    settings: {
      "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.base.json",
        },
      },
    },
  },
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
