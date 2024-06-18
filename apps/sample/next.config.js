const path = require('node:path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  output: 'standalone',
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/styles'),
      path.join(__dirname, 'src/app'),
      path.join(__dirname, 'src/ components'),
    ],
  },
};
