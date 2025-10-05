<!-- markdownlint-disable MD041 -->

[![Unit Tests](https://github.com/lmProgramming/testing-course/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/lmProgramming/testing-course/actions/workflows/unit-tests.yml)
[![React Basic Tests](https://github.com/lmProgramming/testing-course/actions/workflows/react-basic-tests.yml/badge.svg)](https://github.com/lmProgramming/testing-course/actions/workflows/react-basic-tests.yml)
[![React Mocking Tests](https://github.com/lmProgramming/testing-course/actions/workflows/react-mocking-tests.yml/badge.svg)](https://github.com/lmProgramming/testing-course/actions/workflows/react-mocking-tests.yml)
[![React Advanced Tests](https://github.com/lmProgramming/testing-course/actions/workflows/react-advanced-tests.yml/badge.svg)](https://github.com/lmProgramming/testing-course/actions/workflows/react-advanced-tests.yml)
[![E2E Tests](https://github.com/lmProgramming/testing-course/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/lmProgramming/testing-course/actions/workflows/e2e-tests.yml)

# Testing Course

This repository contains my solutions for the exercises in the Solvro Testing Course - <https://github.com/Solvro/testing-course>.

## Structure

The repository is structured into three main directories, each corresponding to a specific exercise:

1. "1. Unit testing" with basic unit tests and mocking
2. "2a. React" with unit tests for React components, mocking API calls, and msw and React routing
3. "3. E2E testing" with end-to-end tests using Playwright

## Running the tests

To run the tests, you need to have [Node.js](https://nodejs.org/) installed. Then, go to one of the directories in order to:

1. Install the dependencies:

   ```bash
   npm install
   ```

   And for "3. E2E testing" exercise, you also need to install Playwright browsers:

   ```bash
   npx playwright install --with-deps
   ```

2. Run the tests:

   ```bash
   npm test
   ```
