# pkode

[![Build Status][build-badge]][build] [![MIT License][license-badge]][license]

## The problem

I open-source projects and want to make it easier to scaffold and maintain them.

## This solution

This package is a CLI that abstracts away all configuration for my open source projects
for linting, testing, building, and more.

## Why `pkode` name?

`pkode` is a short form of my pen name, [Pejuang Kode](https://medium.com/pejuang-kode).

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```shell
npm install --save-dev pkode
```

## Usage

This is a CLI and exposes a bin called `pkode`. I don't plan on
documenting or testing it super-duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project tries to dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some of
the things you can do with `pkode`.

<!-- prettier-ignore-start -->
[build-badge]: https://img.shields.io/github/workflow/status/zainfathoni/pkode/CI?logo=github&style=flat-square
[build]: https://github.com/zainfathoni/kelas.rumahberbagi.com/actions?query=workflow%3ACI
[license-badge]: https://img.shields.io/badge/license-MIT-blue?style=flat-square
[license]: LICENSE
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
<!-- prettier-ignore-end -->
