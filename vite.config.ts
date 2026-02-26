import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      global: 'window',
    },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(process.cwd(), 'src') },
        { find: 'node-fetch', replacement: path.resolve(process.cwd(), 'src/safe-fetch.js') },
        { find: 'cross-fetch', replacement: path.resolve(process.cwd(), 'src/empty-module.js') },
        { find: 'isomorphic-fetch', replacement: path.resolve(process.cwd(), 'src/empty-module.js') },
        { find: 'whatwg-fetch', replacement: path.resolve(process.cwd(), 'src/empty-module.js') },
        { find: 'formdata-polyfill', replacement: path.resolve(process.cwd(), 'src/empty-module.js') },
      ],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
