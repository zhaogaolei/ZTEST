const ISPROD = process.env.NODE_ENV === 'production'
const plugins = []
if (ISPROD) {
  // exclude - An array of console methods to exclude from removal  ['error', 'warn','log']
  plugins.push(['transform-remove-console', { 'exclude': [] }])
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
