describe('requiring some files does not blow up', () => {
  it.each([
    ['babel-transform'],
    ['babelrc'],
    ['eslintrc'],
    ['jest.config'],
    ['prettierrc'],
    ['rollup.config'],
  ])(`require('config/%s') successful`, (name) => {
    require(`../${name}`)
  })

  it(`require('config').getRollupConfig()`, () => {
    require('..').getRollupConfig()
  })
})
