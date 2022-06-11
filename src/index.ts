#!/usr/bin/env node
console.log(`✓ pkode at your service.`)

let shouldThrow = false

try {
  const [major, minor] = process.version.slice(1).split('.').map(Number)
  shouldThrow =
    require(`${process.cwd()}/package.json`).name === 'pkode' &&
    (major < 12 || (major === 12 && minor < 22))
} catch (error) {
  // ignore
}

if (shouldThrow) {
  throw new Error(
    'You must use Node version 12.22 or greater to run the scripts within pkode, because we dogfood the untranspiled version of the scripts.'
  )
}

require('./run-script')
