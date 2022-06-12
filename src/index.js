#!/usr/bin/env node
let shouldThrow = false

try {
  const [major, minor] = process.version.slice(1).split('.').map(Number)
  shouldThrow =
    require(`${process.cwd()}/package.json`).name === 'pkode' &&
    (major < 14 || (major === 14 && minor < 17))
} catch (error) {
  // ignore
}

if (shouldThrow) {
  throw new Error(
    'You must use Node version 14.17 or greater to run the scripts within pkode, because we dogfood the untranspiled version of the scripts.'
  )
}

require('./run-script')
