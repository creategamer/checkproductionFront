import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://productioncheckback-4.onrender.com/',
    },
  },
  plugins: [react()],
})
