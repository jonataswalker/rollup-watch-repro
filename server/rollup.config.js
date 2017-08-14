import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const external = Object.keys(pkg.dependencies).concat([
  'path', 'fs', 'url', 'net', 'dns', 'browser-sync', 'util', 'crypto'
]);

export default {
  external,
  format: 'cjs',
  entry: './server/src/entry.js',
  dest: './dist/server.js'
};
