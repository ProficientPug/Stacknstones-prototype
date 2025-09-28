import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // This is the line that fixes the 404 errors
  base: '/Stacknstones-prototype/', 
  plugins: [react()],
})