import { DEFAULT_EXTENSIONS } from '@babel/core';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import banner2 from 'rollup-plugin-banner2';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import tscAlias from 'rollup-plugin-tsc-alias';

export default [
  defineConfig({
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css', '.scss'],
        minimize: true,
        modules: true,
        extract: true,
      }),
      commonjs(),
      svgr(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          rootDir: 'src',
        },
        exclude: ['**/*.stories.tsx'],
        allowImportingTsExtensions: false,
        declaration: true,
        declarationDir: 'types',
        emitDeclarationOnly: true,
      }),
      url({
        include: [],
        exclude: ['**/*.scss'],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
      }),
      tscAlias(),
      banner2(() => `'use client'\n`),
    ],
    external: ['react', 'react-dom', 'prop-types'],
  }),
  defineConfig({
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [
      dts(),
      copy({
        targets: [{ src: 'dist/esm/*.css', dest: 'dist/' }],
      }),
    ],
  }),
];
