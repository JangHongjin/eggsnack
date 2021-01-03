import path from 'path';

const rootDir = path.resolve(__dirname, '..');
const resolvePath = (...args) => path.resolve(rootDir, ...args);

export default {
  rootDir,
  buildDir: resolvePath('build'),
  publicDir: resolvePath('public'),
  srcDir: resolvePath('src'),

  indexHtml: resolvePath('public/index.html'),
};
