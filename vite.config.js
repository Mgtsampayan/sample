import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      // transformESModules: true,
      // transformCJS: true,
      // transformAMD: true,
      // transformTypes: true,
      // transformTypesOnly: true,
      // transformIgnore: ['node_modules/(?!@babel/runtime)'],
    }
  },
  resolve: {
    alias: {
      find: /^~.+/,
      replacement: (val) => {
        return val.replace(/^~/, "");
      },
    },
  },
  base: './'
})
