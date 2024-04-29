import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
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
