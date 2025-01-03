import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		hmr: {
			host: '35.221.99.204',
		},
		watch: {
			usePolling: true,
		},
	},
});
