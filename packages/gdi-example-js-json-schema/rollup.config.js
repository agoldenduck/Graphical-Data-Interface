import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  name: 'GDIForm',
  plugins: [
    json(),
    resolve(),
    babel({
      exclude: ['node_modules/**', '**/*.json'],
    }),
  ],
}
