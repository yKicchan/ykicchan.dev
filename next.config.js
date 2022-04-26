/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  swcMinify: true,
})
