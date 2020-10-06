module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: [
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.css'
  ],
  theme: {
    extend: {
      height: {
        'v-72': '72vh',
        'v-85': '85vh'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        think: '0 4px 6px -1px rgba(0,0,0,.4),0 2px 4px -1px rgba(0,0,0,.06)'
      },
      gridTemplateColumns: {
        chat: '1fr 200px'
      }
    }
  }
}
