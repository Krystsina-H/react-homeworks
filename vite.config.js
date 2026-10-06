import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/petstore': {
        target: 'https://petstore3.swagger.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/petstore/, '/api/v3'),
      },
    },
  },
})
