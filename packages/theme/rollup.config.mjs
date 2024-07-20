import { DEFAULT_EXTENSIONS } from '@babel/core';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import banner2 from 'rollup-plugin-banner2';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
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
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          rootDir: 'src',
          paths: {
            '@/*': ['./src/*'],
            '@/components/*': ['./src/components/*'],
            '@/styles/*': ['./src/styles/*'],
            '@/libs/*': ['./src/libs/*'],
          },
        },
        exclude: ['**/*.stories.tsx'],
        allowImportingTsExtensions: false,
        declaration: true,
        declarationDir: 'types',
        emitDeclarationOnly: true,
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
    plugins: [dts()],
  }),
];
