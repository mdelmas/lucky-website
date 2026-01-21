// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@sections': path.resolve('./src/components/sections'),
        '@ui': path.resolve('./src/components/ui'),
        '@layouts': path.resolve('./src/layouts'),
        '@assets': path.resolve('./src/assets'),
        '@styles': path.resolve('./src/styles'),
      },
    },
  },
});
