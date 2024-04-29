import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from "path"

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'uikit': path.resolve(__dirname, 'src/stories'),
		},
	},
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'uikit',
			fileName: (format) => `uikit.${format}.ts`,
		},
		rollupOptions: {
			external: ['svelte'],
			output: {
				globals: {
					svelte: 'svelte',
				},
			},
		},
	},
});
