const {pnpPlugin} = require('@yarnpkg/esbuild-plugin-pnp');
const {build} = require('esbuild');

build({
  plugins: [pnpPlugin()],
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './build/bundle.js',
  minify: true,
  platform: 'node',
  target: 'es2020',
  define: {},
});
