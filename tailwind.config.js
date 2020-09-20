module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.vue'],
    options: {
      whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
    },
  },
}
