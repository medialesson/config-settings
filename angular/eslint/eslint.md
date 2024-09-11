# ESLint

[ESLint](https://eslint.org) is a static code analysis tool used to identify and fix problems in JavaScript code. It
helps maintain code quality and consistency by enforcing coding standards and best practices. In an Angular project,
using ESLint ensures that the code adheres to a consistent style, catches potential errors early, and improves overall
maintainability and readability. This is particularly important in large projects with multiple developers, as it helps
prevent common coding issues and promotes a uniform codebase.

## How to use

If you don't have ESLint already installed (e.g. ESLint is included by default in all NX workspaces), you can install it
in your Angular project by using the following command: `ng add @angular-eslint/schematics`.

Once installed use our provided [.eslintrc.json](standalone/.eslintrc.json) file as the base ESLint configuration by
placing it in
the root of your project folder.

_Note that file we provide is in JSON format, if your project uses a `eslint.config.js` file, you can update your
configuration to use a JSON file as input or copy the recommended rulesets listed below manually._

## Recommended rules

The following recommended rules are enabled in our standard ESLint configuration:

- [ESLint](https://eslint.org/docs/latest/rules/#suggestions)
- [typescript-eslint](https://typescript-eslint.io/rules/)
- [angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [@nx/eslint](https://nx.dev/nx-api/eslint#nxeslint-configuration)

## Custom enabled rules

In addition to the rule set listed above, the following custom rules are included in the ESLint configuration file.

The autofix column indicates whether the rule can be automatically fixed by ESLint when running `eslint --fix`.

// TODO: Review rules and add to base config file

| Rule name                                                                                                                                                                              | Rule description                                                                                                                 | autofix |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | :-----: |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)                                                                                                                                  | Require the use of `===` and `!==`.                                                                                              |   ❌    |
| [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)                                                                                                                  | Enforce consistent spacing after the `//` or `/*` in a comment.                                                                  |   ✅    |
| [no-console](https://eslint.org/docs/latest/rules/no-console)                                                                                                                          | Warn about the use of `console`.                                                                                                 |   ❌    |
| [@angular-eslint/component-selector](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md)                               | Require components to be kebab-case and to have a specific name (set per app/lib).                                               |   ❌    |
| [@angular-eslint/directive-selector](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md)                               | Require directives to be camelCase and to have a specific name (set per app/lib).                                                |   ❌    |
| [@angular-eslint/template/attributes-order](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/attributes-order.md)                 | Ensures that HTML attributes and Angular bindings are sorted based on an expected order.                                         |   ✅    |
| [@angular-eslint/template/eqeqeq](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/eqeqeq.md)                                     | Requires `===` and `!==` in place of `==` and `!=`.                                                                              |   ✅    |
| [@angular-eslint/template/prefer-self-closing-tags](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/prefer-self-closing-tags.md) | Ensures that self-closing tags are used for elements with a closing tag but no content.                                          |   ✅    |
| [@typescript-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type/)                                                                  | Require explicit return types on functions and class methods.                                                                    |   ❌    |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)                                                                   | Require explicit accessibility modifiers on class properties and methods.<br/> **Our recommendation:** Disallow use of `public`. |   ✅    |
| [@typescript-eslint/lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)                                                                                   | Require empty lines before and/or after comments.                                                                                |   ✅    |
| [@typescript-eslint/lines-between-class-members](https://typescript-eslint.io/rules/lines-between-class-members)                                                                       | Require or disallow an empty line between class members.                                                                         |   ✅    |
| [@typescript-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering)                                                                                               | Require a consistent member declaration order.                                                                                   |   ❌    |
| [@typescript-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)                                                                                       | Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.                     |   ❌    |
| [@typescript-eslint/no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)                                                                                               | Disallow `this` keywords outside of classes or class-like objects.                                                               |   ❌    |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)                                                                                                 | Disallow unused vars.                                                                                                            |   ❌    |
| [import/no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md)                                                                  | Disallow the import of modules using absolute paths.                                                                             |   ✅    |
| [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)                                                                                  | Ensures that there is no resolvable path back to this module via its dependencies.                                               |   ❌    |
| [import/no-self-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md)                                                                      | Forbid a module from importing itself.                                                                                           |   ❌    |
| [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md)                                                  | Prevents unnecessary path segments in import and require statements.                                                             |   ✅    |
| [simple-import-sort/imports](https://github.com/lydell/eslint-plugin-simple-import-sort)                                                                                               | Require sorting of imports.                                                                                                      |   ✅    |
| [simple-import-sort/exports](https://github.com/lydell/eslint-plugin-simple-import-sort)                                                                                               | Require sorting of exports.                                                                                                      |   ✅    |

### NX specific rules

In the case of NX workspaces, it is also recommended to enforce boundaries between the different modules (i.e. apps and
libraries) inside the project. The configuration to achieve this, however, will greatly depend on how the project is
structured, so we suggest reading the [NX documentation](https://nx.dev/features/enforce-module-boundaries) for more
information.
