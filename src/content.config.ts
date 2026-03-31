import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const artigosCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/artigos" }),
    schema: z.object({
        title: z.string().max(100),
        description: z.string().min(30).max(200),
        pubDate: z.date(),
        author: z.string().default('O.C.T.O.'),
        category: z.string(), // Substituído o enum rígido por string para aceitar os novos Departamentos O.C.T.O.
        evidenceScale: z.string(), 
        dataSources: z.array(z.string().url()).optional(),
        tags: z.array(z.string()).optional(),
        coverImage: z.string().optional(),
        isDraft: z.boolean().default(false),
    }),
});

export const collections = {
    'artigos': artigosCollection,
};
