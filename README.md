# <a name="coding-cartel-front-end">CODING CARTEL FRONT-END</a>

This is the front-end of the coding cartel project made with next-js.
Please read the [project structure](#project-structure) before you start to edit.

# Table of Contents

- [CODING CARTEL FRONT-END](#coding-cartel-front-end)
- [Getting started](#getting-started)
- [Project configuration](#project-config)
  - [Pre-commit](#pre-commit)
  - [linting](#linting)
  - [formatting](#formatting)
- [Stying](#stying)
  - [style components](#style-components)
  - [Variables](#variables)
  - [Mixins](#mixins)
  - [Fonts](#fonts)
  - [functions](#functions)
  - [Media queries](#media-queries)
  - [Normalizer](#normalizer)
  - [Global styles](#global-styles)
- [Contributors](#contributors)

# <a name="getting-started">Getting started</a>

To run the project, you need to clone the project and run the following command:

```bash
git clone https://github.com/CodingCartel/website.git
# or
git clone git@github.com:CodingCartel/website.git

cd website

npm install
# or
yarn
```

Then you can run the project with the following command:

```bash
npm run dev
# or
yarn start
```

# <a name="project-config">Project configuration</a>

The project have specific organisation.

## <a name="pre-commit">Pre-commit</a>

The pre-commit hook is used to check the project before it is commited.
the hook is checking **[the linting](#linting), [the style guide](#style-guide)** and **[build](#build)**.

### Husky

To pre-commit, we're using the [husky](https://typicode.github.io/husky/) tool.

Pre-commit script is located in the `.husky/pre-commit` file.

Because sometime on linux, the script is not executed because it do not have right authorisations. There is a script `scripts/prepare_husky.js` that change chmod only for linux.
This script is executed at the `npm install` command execution.

## <a name="linting">Linting</a>

The linting is checking the code with eslint.
The project is mostly respecting the [airbnb style guide](https://github.com/airbnb/javascript).
But without **semincolons** and **arrow function**.
Check configuration file `.eslintrc.js`

## <a name="formatting">Formatting</a>

The formatting is checking the code with prettier.
there are basics rules for the code.

```
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
  bracketSpacing: true,
  jsxSingleQuote: false,
  semi: false,
```

Make sure to install the prettier extension for your editor.
You might configure your editor to auto-format the code at save.

Check configuration file `.prettierrc.json`

# <a name="styling">Stying</a>

On that project we're using Scss with no styling library or framework.

The project has a style organisation.
in the style folder, we have:
main.scss and core folder.

all the content of styles folder is globally imported in the project.

## <a name="style-components">Style components</a>

next to a component, add a scss file with the same name as the component.
Then import it in your component.

## <a name="variables">Variables</a>

The variables are used to define the project's variables.
If you want to use global variables, add them in the `styles/core/variables.scss` file.

## <a name="mixins">Mixins</a>

As variables, if you want to use global mixins, add them in the `styles/core/mixins.scss` file.

## <a name="fonts">Fonts</a>

If you want to use global fonts, add them in the `styles/core/fonts.scss` file.

## <a name="functions">Functions</a>

If you want to use global functions, add them in the `styles/core/functions.scss` file.

## <a name="media-queries">Media queries</a>

To respect the project styling organization, please use mixins media query that already exist in the `styles/core/media_querys.scss` file.
It is based on the mobile first approach.

## <a name="normalizer">Normalizer</a>

The normalizer is used to normalize the project's styles.
You might not need to update it.

It is based on [that repo](github.com/necolas/normalize.css)

## <a name="global-styles">Global styles</a>

There is a global styles in the `styles/core/global.scss` file.

If you want to update it go ahead, but take care of side effects.

# <a name="contributors">Contributors</a>

- Basile LECOUTUIRER [@bolex222](https://github.com/bolex222)
- Mathéo NOEL [@iKeaght](https://github.com/iKeaght)
