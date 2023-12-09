import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://[::1]:3000',
        // changeOrigin: true,
        secure: false,
  
      },
    },
  },
  plugins: [react()],
});
