import { c as createComponent } from './consts_DU1oNkvI.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as renderTemplate, r as renderComponent, j as renderSlot } from './entrypoint_FIAYYDQK.mjs';
import { $ as $$BaseLayout } from './BaseLayout_D-BsIQ8n.mjs';
import 'clsx';

const $$TentacleDivider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative my-16 border-t-2 border-dashed border-octo-ink before:content-[''] before:w-full before:h-0.5 before:border-b-2 before:border-dashed before:border-octo-ink before:block before:mt-1"> <div class="absolute inset-0 flex items-center justify-center -top-1" aria-hidden="true"> <span class="bg-octo-paper px-4 font-mono font-bold text-sm text-octo-ink uppercase tracking-widest border-2 border-octo-ink shadow-[2px_2px_0_0_rgba(28,35,49,1)]">
FIM DO ARQUIVO
</span> </div> </div>`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/content/tentacle-divider.astro", void 0);

const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose prose-octo max-w-none"> <header class="mb-12 border-b-4 border-octo-ink pb-8"> <div class="font-mono text-sm font-bold text-octo-stamp uppercase tracking-widest mb-4">
[ REGISTRO DE ANÁLISE COMPILADA ]
</div> <h1 class="text-3xl md:text-5xl font-display font-bold uppercase text-octo-ink mb-8 leading-none pb-4 border-b-2 border-dashed border-octo-ink"> ${frontmatter.title} </h1>  <div class="grid grid-cols-2 md:grid-cols-4 border-2 border-octo-ink bg-octo-paper shadow-[4px_4px_0_0_rgba(28,35,49,1)]"> <div class="flex flex-col border-b md:border-b-0 border-r border-octo-ink p-3"> <span class="font-mono text-[10px] sm:text-xs font-bold text-octo-stamp mb-1 uppercase tracking-wider">Data Intcpt</span> <span class="font-mono text-xs sm:text-sm font-bold text-octo-ink uppercase">${frontmatter.pubDate ? new Date(frontmatter.pubDate).toLocaleDateString("pt-BR") : "CLASSIFIED"}</span> </div> <div class="flex flex-col border-b md:border-b-0 border-octo-ink md:border-r p-3"> <span class="font-mono text-[10px] sm:text-xs font-bold text-octo-stamp mb-1 uppercase tracking-wider">Depto.</span> <span class="font-mono text-xs sm:text-sm font-bold text-octo-ink uppercase">${frontmatter.category}</span> </div> <div class="flex flex-col border-r border-octo-ink p-3 col-span-2 md:col-span-2 bg-octo-ink text-octo-paper justify-center"> <span class="font-mono text-[10px] font-bold mb-1 uppercase tracking-wider opacity-80">Agente Responsável</span> <span class="font-mono text-xs sm:text-sm font-bold uppercase">${frontmatter.author || "REDACTED"}</span> </div> </div> ${frontmatter.tags && renderTemplate`<div class="mt-8 flex flex-wrap gap-2 items-center"> <span class="font-mono text-xs font-bold text-octo-stamp uppercase mr-2. border-b-2 border-octo-ink">Índices (Tags):</span> ${frontmatter.tags.map((tag) => renderTemplate`<span class="px-2 py-1 font-mono text-xs font-bold border-2 border-octo-ink text-octo-ink uppercase bg-octo-paper hover:bg-octo-ink hover:text-octo-paper transition-colors shadow-[2px_2px_0_0_rgba(28,35,49,1)]"> ${tag} </span>`)} </div>`} </header> <div class="font-serif text-lg leading-relaxed text-justify hyphens-auto mt-8"> ${renderSlot($$result2, $$slots["default"])} </div> ${renderComponent($$result2, "TentacleDivider", $$TentacleDivider, {})} </article> ` })}`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
