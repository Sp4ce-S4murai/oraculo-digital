import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
    site: 'https://oraculodigital.com',
    output: 'server',
    compressHTML: true,
    integrations: [
        mdx(),
        sitemap()
    ],
    adapter: vercel(),
    vite: {
        css: {
            postcss: './postcss.config.mjs'
        }
    }
});