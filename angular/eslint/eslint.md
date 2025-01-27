# ESLint

[ESLint](https://eslint.org) is a static code analysis tool used to identify and fix problems in JavaScript code. It
helps maintain code quality and consistency by enforcing coding standards and best practices.

Our recommended ESLint configuration includes strict rules designed to catch potential errors early and improve overall
maintainability and readability. These benefits are particularly valuable in larger projects with multiple developers,
as they help maintain a uniform codebase and prevent common coding issues. However, we understand that not all projects
have the same requirements. Therefore, these rules can be modified, removed, or simplified to meet your specific needs.

## How to use

If you are working outside a Nx workspace (and you don't have ESLint already installed), you can install it in your
Angular project by running: `ng add @angular-eslint/schematics`. Otherwise, ESLint is included by out of the box when
generating a new Nx project.

### Dependencies

Our recommended configuration contains the following dependencies:

- [ESLint Stylistic](https://eslint.style/)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

Which can be installed by using the command:

`npm i -D @stylistic/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-simple-import-sort`

### Copy configuration

Use one of our provided files as the base ESLint configuration by placing it in the root of your project
folder, as well as in the application / library folders when working in a monorepo setup.

Two different formats are available:

- _Flat_: Newer format defined as `eslint.config.js` files. It is the standard style when working with Nx version 20+
  and ESLint 9+. It offers a streamlined configuration approach, making it easier to manage and understand.

- _eslintrc_: Codebases working on older versions of Nx and ESLint can instead rely on the legacy _eslintrc_ format,
  specified in `.eslintrc.json`.

Additionally, the repository includes separate ESLint configurations for projects following monorepo and standalone
architectures.

These variations result in 4 possible combinations, all of which are available in the following locations:

- Flat + Monorepo
  - [Root configuration](monorepo/eslint.config.cjs)
  - [App or lib configuration](monorepo/angular-app-or-lib/eslint.config.js)
- [Flat + Standalone](standalone/eslint.config.js)
- eslintrc + Monorepo
  - [Root configuration](standalone/.eslintrc.json)
  - [App or lib configuration](monorepo/angular-app-or-lib/.eslintrc.json)
- [eslintrc + Standalone](standalone/.eslintrc.json)

Note that all configurations are based on Nx workspaces. If you are not using Nx, you adjust the ESLint configuration
files created during the installation steps by manually setting the extended rules and overrides.

## Extended rules

The default Nx configurations from `@nx/eslint-plugin` are extended in all our standard ESLint configuration files.
These already include the standard recommended rulesets from `eslint` and `@typescript-eslint`, so it is not
necessary to extend these rulesets separately.

## Overrides

In addition to the standard ones, the following rules are defined:

_The autofix column indicates whether the rule can be automatically fixed by ESLint when running `eslint --fix`._

### JS and TS rules

| Rule name                                                                                           | Rule description                                                | Our custom configuration                                                                                                                     | autofix |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | :-----: |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)                                               | Require the use of `===` and `!==`.                             | Allow the following cases: </br> 1. Comparing two literal values </br> 2. Evaluating the value of `typeof` </br> 3. Comparing against `null` |   ❌    |
| [no-console](https://eslint.org/docs/latest/rules/no-console)                                       | Warn about the use of `console`.                                |                                                                                                                                              |   ❌    |
| [@stylistic/lines-around-comment](https://eslint.style/rules/js/lines-around-comment)               | Require empty lines before comments.                            | Allow comments to appear at the start of any type.                                                                                           |   ✅    |
| [@stylistic/lines-between-class-members](https://eslint.style/rules/js/lines-between-class-members) | Enforce lines between class members.                            | Skip checking empty lines after single-line class members.                                                                                   |   ✅    |
| [@stylistic/spaced-comment](https://eslint.style/rules/js/spaced-comment)                           | Enforce consistent spacing after the `//` or `/*` in a comment. |                                                                                                                                              |   ✅    |
| [simple-import-sort/imports](https://github.com/lydell/eslint-plugin-simple-import-sort)            | Require sorting of imports.                                     |                                                                                                                                              |   ✅    |
| [simple-import-sort/exports](https://github.com/lydell/eslint-plugin-simple-import-sort)            | Require sorting of exports.                                     |                                                                                                                                              |   ✅    |

### Typescript rules

| Rule name                                                                                                                             | Rule description                                                                                             | Our custom configuration                                                                    | autofix |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | :-----: |
| [@typescript-eslint/consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions/)                       | Enforce consistent usage of type assertions.                                                                 | Disallow any type assertions.                                                               |   ❌    |
| [@typescript-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type/)                 | Require explicit return types on functions and class methods.                                                |                                                                                             |   ❌    |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)                  | Require explicit accessibility modifiers on class properties and methods.<br/>                               | Disallow use of `public`.                                                                   |   ✅    |
| [@typescript-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering)                                              | Require a consistent member declaration order.                                                               | Custom order specifically tailored for Angular applications.                                |   ❌    |
| [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)                                      | Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean. | Ignore function parameters.                                                                 |   ❌    |
| [@typescript-eslint/no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access/)                             | Disallow member access on a value with type any.                                                             |                                                                                             |   ❌    |
| [@typescript-eslint/no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)                                  | Disallow unused expressions.                                                                                 | Allow use of ternary operators in expressions similarly to short circuit evaluations.       |   ❌    |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)                                                | Disallow unused vars.                                                                                        | Allow unused arguments and variables, as long as their name is prefixed with an underscore. |   ❌    |
| [import/first](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md)                                       | Report any imports that come after non-import statements.                                                    |                                                                                             |   ✅    |
| [import/newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md)         | Enforce having one or more empty lines after the last top-level import statement or require call.            |                                                                                             |   ✅    |
| [import/no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md)                 | Disallow the import of modules using absolute paths.                                                         |                                                                                             |   ✅    |
| [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)                                 | Ensure that there is no resolvable path back to this module via its dependencies.                            |                                                                                             |   ❌    |
| [import/no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md)                       | Report if a resolved path is imported more than once.                                                        |                                                                                             |   ✅    |
| [import/no-self-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md)                     | Forbid a module from importing itself.                                                                       |                                                                                             |   ❌    |
| [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md) | Prevent unnecessary path segments in import and require statements.                                          |                                                                                             |   ✅    |

### Angular rules

| Rule name                                                                                                                                                                              | Rule description                                                                                                     | Our custom configuration                                              | autofix |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | :-----: |
| [@angular-eslint/component-selector](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md)                               | Require components to be kebab-case and to have a specific name (Predefined by Nx when creating an Angular app/lib). |                                                                       |   ❌    |
| [@angular-eslint/directive-selector](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md)                               | Require directives to be camelCase and to have a specific name (Predefined by Nx when creating an Angular app/lib).  |                                                                       |   ❌    |
| [@angular-eslint/template/attributes-order](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/attributes-order.md)                 | Ensures that HTML attributes and Angular bindings are sorted based on an expected order.                             | Alphabetical order.                                                   |   ✅    |
| [@angular-eslint/template/eqeqeq](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/eqeqeq.md)                                     | Requires `===` and `!==` in place of `==` and `!=`.                                                                  | Allow null or undefined juggling check, i.e. `== null` and `!= null`. |   ✅    |
| [@angular-eslint/template/prefer-self-closing-tags](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/prefer-self-closing-tags.md) | Ensures that self-closing tags are used for elements with a closing tag but no content.                              |                                                                       |   ✅    |

### NX specific rules

In the case of Nx workspaces, it is also recommended to enforce boundaries between the different modules (i.e., apps and
libraries) inside the project. By default, the rule `@nx/enforce-module-boundaries` is included in the ESLint
configuration for new projects, but it does not define any constraints. These need to be manually specified with the
help of the [NX documentation](https://nx.dev/features/enforce-module-boundaries) based on the project's architecture.
