import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import viteCompression from 'vite-plugin-compression';
export default defineConfig({
  resolve: {
    alias: {
      '/images': 'src/assets/images',
    },
  },
  plugins: [
    vue(),
    viteCompression(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  server:{
    port:3001,
    proxy:{
      '/management': {
        target: "http://10.1.30.36:9288",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/management/, '/management')
      },
    },
  },
  build:{
    brotliSize:false,
    rollupOptions:{
      output:{
        manualChunks:{
          'vant':['vant'],
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
