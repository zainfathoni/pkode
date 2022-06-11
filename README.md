# pkode

[![Build Status][build-badge]][build] [![MIT License][license-badge]][license]

## Table of Contents

- [pkode](#pkode)
  - [Table of Contents](#table-of-contents)
  - [About `pkode`](#about-pkode)
    - [The problem](#the-problem)
    - [This solution](#this-solution)
  - [Inspiration](#inspiration)
    - [Why `pkode` name?](#why-pkode-name)
  - [Installation](#installation)
  - [Usage](#usage)
  - [More References](#more-references)
    - [Guidelines](#guidelines)
      - [Values](#values)
      - [How to set up a new project](#how-to-set-up-a-new-project)
    - [Contributing](#contributing)

## About `pkode`

### The problem

I open-source projects and want to make it easier to scaffold and maintain them.

### This solution

This package is a CLI that abstracts away all configuration for my open source
projects for linting, testing, building, and more.

## Inspiration

This tool is inspired by `react-scripts` and `kcd-scripts`.

### Why `pkode` name?

`pkode` is a short form of my pen name,
[Pejuang Kode](https://medium.com/pejuang-kode).

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```shell
npm install --save-dev pkode
```

## Usage

This is a CLI and exposes a bin called `pkode`. I don't plan on documenting or
testing it super-duper well because it's really specific to my needs. You'll
find all available scripts in `src/scripts`.

This project tries to dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some of
the things you can do with `pkode`.

## More References

Not all of my implementation standards can be automated through scripts due to
certain reasons, such as
[the deprecation of conventional JS config in husky](https://blog.typicode.com/husky-git-hooks-javascript-config/).

Therefore, complement this repository with some guidelines and how-tos that all
contributors to my open-source projects can follow.

### Guidelines

#### Values

As guidance in making decisions, we hold on to [some values here](values.md)
that we adopted from
[WargaBantuWarga principles](https://github.com/kawalcovid19/wargabantuwarga.com#principles).

#### How to set up a new project

When setting up a new project, please follow
[these guidelines](docs/new-project.md) to ensure that it complies with our
standards of quality.

### Contributing

See our contribution guidelines in these languages:

- [English](CONTRIBUTING.md)
- [Indonesian](CONTRIBUTING_ID.md)

To facilitate healthy and constructive community behavior, we adopt and enforce
[Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)

<!-- prettier-ignore-start -->
[build-badge]: https://img.shields.io/github/workflow/status/zainfathoni/pkode/validate?logo=github&style=flat-square
[build]: https://github.com/zainfathoni/pkode/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-MIT-blue?style=flat-square
[license]: LICENSE
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
<!-- prettier-ignore-end -->
