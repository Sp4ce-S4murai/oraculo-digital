import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://oraculodigital.com',
    output: 'static',
    compressHTML: true,
    integrations: [
        mdx(),
        sitemap()
    ],
    vite: {
        css: {
            postcss: './postcss.config.mjs'
        }
    }
});