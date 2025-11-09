import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // This is the line you need to change:
  base: '/', 
  plugins: [react()],
})