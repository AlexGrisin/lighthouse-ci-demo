# lighthouse-ci-demo

The purpose of this project is to demo the [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

## Why we want to do it?

- Get a Lighthouse report alongside every PR
- Track performance metrics and Lighthouse scores over time

## What we will cover on our workshop session?

- Collect
- Assert
- LHCI Server
  - Deployment
  - Configuration
- Setting up CI integration (Jenkins)

## Web application under test

We use React [Todo Application](https://github.com/drehimself/todo-react) purely for demonstration and educational purposes.

### Start Web application

```shell
yarn web:start
```

## Lighthouse

**Lighthouse** analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

Extensive documentation can be found [here](https://github.com/GoogleChrome/lighthouse)

### Execute Lighthouse audit

```shell
yarn web:lighthouse
```

## LHCI Server

**LHCI server** saves historical Lighthouse data, displays trends in a dashboard, and offers an in-depth build comparison UI to uncover differences between builds.

Extensive documentation can be found [here](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/server.md)

### Configure LHCI server

Take a note of the build token provided

```shell
yarn lhci:wizard
```

### Start LHCI server

```shell
yarn lhci:start
```

### Upload lighthouse results to LHCI Server

Use build token from `lhci:wizard` run

```shell
yarn web:lighthouse
yarn web:lighthouse:lhci
```
