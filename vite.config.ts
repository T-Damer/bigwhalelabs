import { defineConfig, Plugin } from 'vite'
import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [preact(), tsconfigPaths()],
  base: '/bigwhalelabs/',
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          gzipSize: true,
          brotliSize: true,
        }) as unknown as Plugin,
      ],
    },
    outDir: 'dist',
  },
})
