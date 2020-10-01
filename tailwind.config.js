module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: [
    './src/**/*.js',
    './src/**/*.css'
  ],
  theme: {
    extend: {
      height: {
        'v-75': '75vh'
      }
    }
  }
}
