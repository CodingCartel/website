module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  sassOptions: {
    includePaths: ['/src/styles/'],
    prependData: `@import "main.scss";`
  }
}
