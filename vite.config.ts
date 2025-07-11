import { defineConfig } from 'vite'

export default defineConfig(({command}) => {
  const commonConfig = {};
  
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