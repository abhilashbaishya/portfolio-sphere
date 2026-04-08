import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  publicDir: 'public',
  plugins: [
    ViteImageOptimizer({
      webp: {
        quality: 80,
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
});
