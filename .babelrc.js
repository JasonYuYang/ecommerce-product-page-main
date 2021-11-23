var isDev = false
if (process.env.NODE_ENV === 'development') {
  isDev = true
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        regenerator: true,
      },
    ],
  ],
}

if (isDev) {
  plugins.push([
    'react-refresh/babel',
    {
      skipEnvCheck: true,
    },
  ])
}
