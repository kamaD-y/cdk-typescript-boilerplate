# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

# About This Boilerplate
## Overview
This boilerplate comes pre-configured with the following setup:

### Lint/Format
For linting and formatting, we use [Biome](https://biomejs.dev/), a fast formatter written in Rust.

To customize settings, modify the `biome.jsonc` file.

#### Commands

* `npm run lint`      fixes errors detected by static analysis
* `npm run lint:ci`   reports static analysis results
* `npm run format`    checks code and applies formatting changes
* `npm run format:ci` checks code and reports formatting differences

### CDK Template Validation
[SnapshotTest](https://docs.aws.amazon.com/cdk/v2/guide/testing.html#testing-snapshot) compares synthesized CloudFormation templates with previously saved templates to detect differences.

[cdk-nag](https://github.com/cdklabs/cdk-nag) validates security and compliance of AWS CDK resources based on predefined rules.

#### Commands

* `npm run test:cdk`

### VSCode Settings

Automatic formatting on save using Biome is configured.

## Usage Example

1. Update all packages to their latest versions when starting:
  ```sh
  # e.g. using npm-check-updates
  $ npm install -g npm-check-updates
  $ ncu -u
  $ npm i
  ```
2. Modify lambda/example_function/ as needed for your actual Lambda functions.

