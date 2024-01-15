import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'POS',
			customCss: [
				'./src/styles/custom.css',
			  ],
			sidebar: [
				{
					label: 'Tareas',
					autogenerate: { directory: 'tareas' },
				},
				{
					label: 'Examenes',
					autogenerate: { directory: 'examenes' },
				},
			],
		}),
	],
});
