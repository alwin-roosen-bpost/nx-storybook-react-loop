/// <reference types='vitest' />
import { resolve } from 'path'
import sass from 'rollup-plugin-sass'
import { defineConfig } from 'vite'

import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/css',
  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  build: {
    outDir: '../../dist/libs/css',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      plugins: [sass()],
      // External packages that should not be bundled
      // external: [/^lit/],
      output: {
        // Preserve the module structure for better tree shaking
        preserveModules: false,
        // Map external imports to global variables when used in UMD/IIFE formats
        globals: {
        },
      },
    },
  },
}))
