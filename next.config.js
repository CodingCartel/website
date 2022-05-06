module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  sassOptions: {
    includePaths: ['/src/styles/'],
    // prependData: `@import "/src/styles/core/variables.scss"; @import "/src/styles/core/mixins.scss";`
    prependData: `@import "/src/styles/main.scss";`
  }
}
