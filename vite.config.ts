import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vite';

export default defineConfig(({command}) => {
	const commonConfig = {
		plugins: [react()],
		resolve: {
			alias: {
				app: '/src/app',
				components: '/src/components',
				pages: '/src/pages',
				shared: '/src/shared'
			}
		}
	};

	if (command === 'serve') {
		// dev
		return {...commonConfig};
	} else {
		// build
		return {
			...commonConfig,
			base: './',
			build: {
				outDir: 'build',
				rollupOptions: {
					output: {
						assetFileNames: '[name]-[hash][extname]',
						chunkFileNames: '[name]-[hash].js',
						entryFileNames: '[name]-[hash].js',
						manualChunks: {
							vendor: ['react', 'react-dom']
						}
					}
				}
			}
		};
	}
});
