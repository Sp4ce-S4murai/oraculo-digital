import { c as createComponent } from './consts_DU1oNkvI.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_FIAYYDQK.mjs';
import { $ as $$BaseLayout } from './BaseLayout_D-BsIQ8n.mjs';
import { $ as $$DossierCard } from './DossierCard_Cy3Ipx2_.mjs';
import { g as getCollection } from './_astro_content_DPiPh5NV.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("artigos", ({ data }) => {
    return data.isDraft !== true;
  });
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "O.C.T.O. - Arquivo Central" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">  <div class="lg:col-span-8 flex flex-col gap-8"> ${featuredPost && renderTemplate`<article class="border-4 border-octo-ink p-6 bg-octo-paper shadow-[8px_8px_0_0_#1C2331] group relative"> <div class="font-mono font-bold uppercase text-octo-ink text-sm mb-4 border-b-2 border-octo-ink pb-2 tracking-widest">
FEATURED POST
</div> <a${addAttribute(`/artigos/${featuredPost.id}`, "href")} class="block mb-4"> <h2 class="font-display font-bold uppercase text-4xl md:text-5xl leading-tight text-octo-ink group-hover:underline decoration-4 underline-offset-4"> ${featuredPost.data.title} </h2> </a> <div class="font-display text-lg md:text-2xl font-bold uppercase border-b-2 border-octo-ink pb-4 mb-4 text-octo-ink"> ${featuredPost.data.tags?.join(". ")}. ${featuredPost.data.category}.
</div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"> <div class="font-serif text-base md:text-lg leading-relaxed text-justify text-octo-ink hyphens-auto"> ${featuredPost.data.description} <a${addAttribute(`/artigos/${featuredPost.id}`, "href")} class="block mt-6 border-2 border-octo-ink bg-octo-ink text-octo-paper font-mono font-bold uppercase p-3 text-center text-sm md:text-base hover:bg-transparent hover:text-octo-ink transition-colors">
Ler Relatório Completo &raquo;
</a> </div>  ${featuredPost.data.coverImage ? renderTemplate`<div class="border-4 border-octo-ink p-2 bg-white"> <img${addAttribute(featuredPost.data.coverImage, "src")} alt="Gráfico de Exemplo" class="w-full grayscale contrast-125 object-cover aspect-square"> </div>` : renderTemplate`<div class="border-4 border-octo-ink p-2 bg-octo-paper grid grid-cols-10 grid-rows-10 gap-1 aspect-square opacity-60 relative overflow-hidden">  <div class="col-span-12 row-span-12 w-full h-full bg-octo-grid border border-octo-stamp opacity-50 absolute"></div> <div class="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-octo-stamp uppercase rotate-45 border-y border-octo-stamp w-[150%] -left-1/4 origin-center">NO VISUAL DATA</div> </div>`} </div> </article>`}  ${otherPosts.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2"> ${otherPosts.map((post) => renderTemplate`${renderComponent($$result2, "DossierCard", $$DossierCard, { "title": post.data.title, "description": post.data.description, "pubDate": post.data.pubDate, "category": post.data.category, "slug": post.id })}`)} </div>`} </div>  <aside class="lg:col-span-4 flex flex-col gap-8">  <div class="border-4 border-octo-ink bg-octo-paper shadow-[8px_8px_0_0_#1C2331]"> <div class="bg-octo-ink text-octo-paper p-4 md:p-6 pb-4"> <h3 class="font-display font-bold text-3xl uppercase leading-none mb-1">
DIRETÓRIO DO O.C.T.O.
</h3> <span class="font-display font-bold text-lg opacity-80 uppercase tracking-widest">
(CATEGORY FILTER)
</span> </div> <ul class="flex flex-col font-display font-bold text-lg md:text-xl uppercase text-octo-ink"> <li class="border-b-2 border-octo-ink"> <a href="/categorias/Divisão de Sinais Anômalos" class="block p-4 md:px-6 hover:bg-octo-ink hover:text-octo-paper transition-colors">DIVISÃO DE SINAIS ANÔMALOS (SIGINT)</a> </li> <li class="border-b-2 border-octo-ink"> <a href="/categorias/Arquivo de Fenômenos Aéreos" class="block p-4 md:px-6 hover:bg-octo-ink hover:text-octo-paper transition-colors">ARQUIVO DE FENÔMENOS AÉREOS (UAP)</a> </li> <li class="border-b-2 border-octo-ink"> <a href="/categorias/Departamento de Engenharia Reversa" class="block p-4 md:px-6 hover:bg-octo-ink hover:text-octo-paper transition-colors">DEPARTAMENTO DE ENGENHARIA REVERSA</a> </li> <li> <a href="/categorias/Incidentes Críticos" class="block p-4 md:px-6 hover:bg-octo-ink hover:text-octo-paper transition-colors">INCIDENTES CRÍTICOS</a> </li> </ul> </div> </aside> </div> ` })}`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/index.astro", void 0);

const $$file = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
