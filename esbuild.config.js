const {pnpPlugin} = require('@yarnpkg/esbuild-plugin-pnp');
const {build} = require('esbuild');

build({
  plugins: [pnpPlugin()],
  entryPoints: ['./src/app.ts'],
  bundle: true,
  outfile: './bundle/app.js',
  minify: true,
  platform: 'node',
  target: 'es2020',
  define: {},
});
