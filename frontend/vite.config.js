import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  // Add this server configuration
  server: {
    sourcemap: 'inline-source-map',
  },
});