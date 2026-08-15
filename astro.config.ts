import node from '@astrojs/node';
import react from '@astrojs/react';
import { defineConfig, envField } from 'astro/config';

export default defineConfig({
  site: 'https://naobi.dev',
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react()],
  session: false,
  env: {
    schema: {
      COLLABORATION_RECIPIENT: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
  server: {
    host: true,
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
});
