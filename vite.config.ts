import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({command}) => {
  const commonConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        app: '/src/app',
        pages: '/src/pages',
        shared: '/src/shared'
      }
    }
  };
  
  if (command === "serve") {
    // dev
    return {...commonConfig};
  } else {
    // build
    return {
      ...commonConfig,
      build: {
        outDir: 'build'
      }
    };
  }
})