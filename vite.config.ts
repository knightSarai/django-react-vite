import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  root: resolve(__dirname, 'src'),
  base: process.env.NODE_ENV === 'production' ? '/static/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    manifest: true,
  },
  plugins: [react()],
});
