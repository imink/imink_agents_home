// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://imink.github.io',
	base: '/imink_agents_home',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
});
