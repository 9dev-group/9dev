import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true
    })
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8080,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vuetify'],
          animations: ['gsap']
        }
      }
    }
  }
})