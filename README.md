# Introduction

This repository provides a framework for end-to-end UI testing using [Playwright](https://playwright.dev/) with [TypeScript](https://www.typescriptlang.org/). It is structured around the Page Object Model (PoM) pattern, promoting clean and maintainable test code. Designed for QE engineers, this setup ensures efficient test automation and seamless integration with CI pipelines.

# Installation

First, clone the repo and navigate inside the directory:

```terminal
git clone <repo-url>
cd <your-repo-directory>
```

Second, install dependencies:

```terminal
npm install
# or
yarn install
```

# Running Tests

```terminal
env USERNAME="harunjonuzi@outlook.com" PASSWORD="vythnmwhaz1" npm run test tests/HomePage/createPostAndComment.spec.ts
```

# Additional Tools

- [Prettier](https://prettier.io/docs/en/install)
- [Husky](https://github.com/typicode/husky)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [CommitLint](https://commitlint.js.org/)
