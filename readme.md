# Cypress Automation tool
> Use to implement test script both in UI and API tests.

[![NPM Version][npm-image]][npm-url]

## Overview

The automation tool is based on Cypress, written in JS, and very easy to use, it can run End to End test, integration test, and unit test.

## Prerequisites

Before you continue, ensure you meet the following requirement:

* You have a basic understanding of Cypress.

_For more details and usage, please refer to the:_

1. _[cypress.io][cypress.io]_
2. _[cypress-tutorial][cypress-tutorial]_
3. _[advantages-Cypress-io][advantages-Cypress-io]_
4. _[api-testing-with-cypress][api-testing-with-cypress]_


## Installation Prerequisite

* Make Sure NodeJS is Installed.

> If you haven’t installed NodeJS yet, now is the time to do so. Please install NodeJS from the _[nodejs.org][nodejs.org]_. You can find the link down in the references.

If you already have NodeJS installed, ensure that the version is equal or greater than v8.

```sh
node --version
```

* We’ll also need an editor or IDE.

> I’ll be using Visual Studio Code from the _[code.visualstudio][code.visualstudio]_, as it is my favorite editor, and has excellent support for JavaScript.

* Setup environment.

After cloning the project, we perform the setup of the following steps:

* Download & Upgrade library:

> cd to this project folder and open terminal.

```sh
npm install
```

* Build

```sh
npm run cy:build
```

* Open Cypress

> After the Cypress model is displayed, you can choose the specific test case to run.

```sh
npm run cy:open
```

* Run all test

```sh
npm run cy:run
```

_For more details and usage, please refer to the Cypress-Automation-tool/package.json file. View in the "scripts" section._

## Demo

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[nodejs.org]: https://nodejs.org/en/
[code.visualstudio]: https://code.visualstudio.com/
[cypress.io]: https://www.cypress.io/
[cypress-tutorial]: https://testautomationu.applitools.com/cypress-tutorial/
[advantages-Cypress-io]: https://www.lynda.com/Developer-tutorials/Advantages-Cypress-io/2814152/2937461-4.html
[api-testing-with-cypress]: https://www.mariedrake.com/post/api-testing-with-cypress