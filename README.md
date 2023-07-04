This is a repo with base configuration for production ready nextjs apps

## Code quality

The repository is configure with tools (lint-staged, husky, commitlint) to ensure the code beeing commited follows the best practices defined in code and commit message linters.

### Commit lint

The commit message should follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification

<details>
  <summary>
    <strong>Explaining the types of commits</strong>
  </summary>

- `chore`: is applied to files that doesn't involve production code, for example: add libs, config files, linter, etc;
- `test`: adding missing tests;
- `feat`: to new features;
- `fix`: when have bug fixes;
- `refactor`: changes that involve refactoring in some part of production code;
- `revert`: a commit that revert other commit, like `git revert`;
- `style`: to changes that don't affect the meaning of code, like: white-space, formatting, missing semi-colons, order of imports/exports, etc;
</details>