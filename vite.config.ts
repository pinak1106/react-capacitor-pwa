import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Your App Name Capacitor demo',
        short_name: 'Short Name',
        description: 'Description of your app',
        start_url: './index.html',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
        icons: [
          {
            src: '/path-to-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      includeAssets: ['react.svg', 'robots.txt', 'apple-touch-icon.png'],
    }),
  ],
});
