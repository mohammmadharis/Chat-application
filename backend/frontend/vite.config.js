import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "https://chat-application-acdj.onrender.com",
        changeOrigin: true,
      },

      // "/api/message": {       
      //   target: "http://localhost:4002",
      //   changeOrigin: true,
      // } ,
      // "/api/auth": {           // 👈 Auth
      //   target: "http://localhost:4002",
      //   changeOrigin: true,
      // },
    },
  },
})
