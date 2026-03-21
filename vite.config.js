import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Multi-page: add HTML entry points here once pages are known
    // rollupOptions: {
    //   input: {
    //     main: 'index.html',
    //     speisekarte: 'speisekarte.html',
    //   },
    // },
  },
  css: {
    devSourcemap: true,
  },
});
