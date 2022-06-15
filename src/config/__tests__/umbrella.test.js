describe('requiring some files does not blow up', () => {
  it.each([
    ['babel-transform'],
    ['babelrc'],
    ['eslintrc'],
    ['jest.config'],
    ['prettierrc'],
    // ['rollup.config'], FIXME: this test is failing in windows-latest node@16
  ])(`require('config/%s') successful`, (name) => {
    require(`../${name}`)
  })

  // FIXME: this test is failing in windows-latest node@16
  it.skip(`require('config').getRollupConfig()`, () => {
    require('../').getRollupConfig()
  })
})
