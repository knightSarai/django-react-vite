import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';

const root = resolve(__dirname, 'src')
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  root,
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
