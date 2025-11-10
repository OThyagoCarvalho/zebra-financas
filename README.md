# Zebra Finanças

This is a personal finance management application.

## Project Structure

The project is structured as follows:

- **app/**: Contains the application's source code.
- **.husky/**: Contains Git hooks configuration.
- **.eslintignore**: Files and directories to be ignored by ESLint.
- **.gitignore**: Files and directories to be ignored by Git.
- **.prettierignore**: Files and directories to be ignored by Prettier.
- **commitlint.config.js**: Commitlint configuration file.
- **eslint.config.ts**: ESLint configuration file.
- **package-lock.json**: Exact versions of the dependencies.
- **package.json**: Project dependencies and scripts.
- **server.js**: Express server for the application.
- **vite.config.js**: Vite configuration file.

## Commit Rules

This project uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages. This helps to have a clear and descriptive commit history.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

The **header** is mandatory and has a special format that includes a **type**, a **scope** and a **description**.

### Type

The type must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **revert**: Reverts a previous commit

### Scope

The scope is optional and can be anything specifying place of the commit change.

### Description

The description contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

The body is optional and is used to explain what and why vs. how.

### Footer

The footer is optional and should contain information about **Breaking Changes**. It should start with `BREAKING CHANGE:` with a space or two newlines.
