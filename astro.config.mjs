import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  trailingSlash: 'always',
  redirects: {
    '/lineas/': '/#lineas',
  },
  server: {
    host: true,
    port: 4321,
    // Agrega tu dominio de ngrok aquí:
    allowedHosts: [
      'petroleum-illusion-padlock.ngrok-free.dev'
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
