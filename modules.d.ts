declare module '*.css' {
  const asset: string
  export default asset
}

declare module '*.json' {
  const value: unknown
  export default value
}
