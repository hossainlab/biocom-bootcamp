import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['./src/utils/performance.js'],
        },
      },
    },
    // Target modern browsers for better performance
    target: 'esnext',
    // Enable source maps for debugging in production
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  // Enable CSS code splitting
  css: {
    devSourcemap: false
  },
  // Optimize server for faster development
  server: {
    hmr: {
      overlay: false
    }
  }
})
