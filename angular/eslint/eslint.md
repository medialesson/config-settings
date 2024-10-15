# ESLint

[ESLint](https://eslint.org) is a static code analysis tool used to identify and fix problems in JavaScript code. It
helps maintain code quality and consistency by enforcing coding standards and best practices. In an Angular project,
using ESLint ensures that the code adheres to a consistent style, catches potential errors early, and improves overall
maintainability and readability. This is particularly important in large projects with multiple developers, as it helps
prevent common coding issues and promotes a uniform codebase.

## How to use

If you don't have ESLint already installed (e.g. ESLint is included by default in all NX workspaces), you can install it
in your Angular project by using the following command: `ng add @angular-eslint/schematics`.

Once installed use one of our provided files as the base ESLint configuration by placing it in the root of your project
folder, as well as in the application / library folders when working in a monorepo setup.

Note that two different formats are available:

- _Flat_: Newer format defined as `eslint.config.js` files. It is the standard style when working with Nx version 20+
  and ESLint 9+. It offers a streamlined configuration approach, making it easier to manage and understand.

- _eslintrc_: Codebases working on older versions of Nx and ESLint, can instead rely on the legacy _eslintrc_ format,
  specified in `.eslintrc.json`.

Additionally, the repository includes separate ESLint configurations for projects following monorepo and standalone
architectures.

## Recommended rules

The default Nx configurations from `@nx/eslint-plugin` are extended in all our standard ESLint configuration files.
These duckdalready include the standard recommended rulesets from `eslint` and `@typescript-eslint`, so it is not
necessary to extend these rulesets separately.

## Overrides

In addition to the standard rules, the following overrides are defined:

_The autofix column indicates whether the rule can be automatically fixed by ESLint when running `eslint --fix`._

### JS and TS rules

| Rule name                                                             | Rule description                                                | autofix |
| --------------------------------------------------------------------- | --------------------------------------------------------------- | :-----: |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)                 | Require the use of `===` and `!==`.                             |   ❌    |
| [no-console](https://eslint.org/docs/latest/rules/no-console)         | Warn about the use of `console`.                                |   ❌    |
| [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment) | Enforce consistent spacing after the `//` or `/*` in a comment. |   ✅    |

### Typescript rules

| Rule name                                                                                                                             | Rule description                                                                                                                 | autofix |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | :-----: |
| [@typescript-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type/)                 | Require explicit return types on functions and class methods.                                                                    |   ❌    |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)                  | Require explicit accessibility modifiers on class properties and methods.<br/> **Our recommendation:** Disallow use of `public`. |   ✅    |
| [@typescript-eslint/lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)                                  | Require empty lines before and/or after comments.                                                                                |   ✅    |
| [@typescript-eslint/lines-between-class-members](https://typescript-eslint.io/rules/lines-between-class-members)                      | Require or disallow an empty line between class members.                                                                         |   ✅    |
| [@typescript-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering)                                              | Require a consistent member declaration order.                                                                                   |   ❌    |
| [@typescript-eslint/no-empty-function](https://typescript-eslint.io/rules/no-empty-function)                                          | Disallow empty functions.                                                                                                        |   ❌    |
| [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)                                      | Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.                     |   ❌    |
| [@typescript-eslint/no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)                                              | Disallow `this` keywords outside of classes or class-like objects.                                                               |   ❌    |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)                                                | Disallow unused vars.                                                                                                            |   ❌    |
| [import/no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md)                 | Disallow the import of modules using absolute paths.                                                                             |   ✅    |
| [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)                                 | Ensures that there is no resolvable path back to this module via its dependencies.                                               |   ❌    |
| [import/no-self-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md)                     | Forbid a module from importing itself.                                                                                           |   ❌    |
| [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md) | Prevents unnecessary path segments in import and require statements.                                                             |   ✅    |
| [simple-import-sort/imports](https://github.com/lydell/eslint-plugin-simple-import-sort)                                              | Require sorting of imports.                                                                                                      |   ✅    |
| [simple-import-sort/exports](https://github.com/lydell/eslint-plugin-simple-import-sort)                                              | Require sorting of exports.                                                                                                      |   ✅    |

### Angular rules

| Rule name                                                                                                                                                                              | Rule description                                                                                                     | autofix |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | :-----: |
| [@angular-eslint/component-selector](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md)                               | Require components to be kebab-case and to have a specific name (Predefined by Nx when creating an Angular app/lib). |   ❌    |
| [@angular-eslint/directive-selector](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md)                               | Require directives to be camelCase and to have a specific name (Predefined by Nx when creating an Angular app/lib).  |   ❌    |
| [@angular-eslint/template/attributes-order](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/attributes-order.md)                 | Ensures that HTML attributes and Angular bindings are sorted based on an expected order.                             |   ✅    |
| [@angular-eslint/template/eqeqeq](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/eqeqeq.md)                                     | Requires `===` and `!==` in place of `==` and `!=`.                                                                  |   ✅    |
| [@angular-eslint/template/prefer-self-closing-tags](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/prefer-self-closing-tags.md) | Ensures that self-closing tags are used for elements with a closing tag but no content.                              |   ✅    |

### NX specific rules

In the case of Nx workspaces, it is also recommended to enforce boundaries between the different modules (i.e., apps and
libraries) inside the project. By default, the rule `@nx/enforce-module-boundaries` is included in the ESLint
configuration for new projects, but it does not define any constraints. These need to be manually specified with the
help of the [NX documentation](https://nx.dev/features/enforce-module-boundaries) based on the project's architecture.
