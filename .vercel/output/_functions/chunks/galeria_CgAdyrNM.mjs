import { c as createComponent } from './consts_DU1oNkvI.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_FIAYYDQK.mjs';
import { $ as $$BaseLayout } from './BaseLayout_D-BsIQ8n.mjs';
import { g as getCollection } from './_astro_content_DPiPh5NV.mjs';

const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("artigos", ({ data }) => {
    return data.isDraft !== true;
  });
  const postsWithImages = allPosts.filter((post) => post.data.coverImage);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "O.C.T.O. - Galeria de Evidências Visual" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="mb-12"> <div class="font-mono text-xs font-bold text-octo-stamp uppercase tracking-widest mb-2 border-l-4 border-octo-stamp pl-2">
[ EVIDÊNCIAS MATERIAIS - GALERIA CLASSIFICADA ]
</div> <h1 class="font-display font-bold uppercase text-4xl md:text-6xl text-octo-ink border-b-4 border-octo-ink pb-4">
Galeria Fotográfica Tática
</h1> <p class="mt-4 font-mono text-sm uppercase font-bold text-octo-ink opacity-80 border-2 border-octo-ink p-4 bg-octo-paper shadow-[4px_4px_0_0_#1C2331]">
AVISO: O acervo fotográfico contido nesta seção foi submetido pelo crivo paramilitar. O O.C.T.O não se responsabiliza por vertigens meméticas induzidas por observação focada. Imagens linkadas remetem aos seus respectivos Laudos (Dossiês).
</p> </header> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${postsWithImages.map((post) => renderTemplate`<a${addAttribute(`/artigos/${post.id}`, "href")} class="border-4 border-octo-ink p-2 bg-octo-paper shadow-[4px_4px_0_0_#1C2331] relative group flex flex-col hover:-translate-y-1 transition-transform cursor-pointer"> <div class="w-full aspect-square relative overflow-hidden bg-octo-ink/10 mb-2 border-2 border-octo-ink"> <img${addAttribute(post.data.coverImage, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply group-hover:grayscale-0 transition-all duration-500">  <div class="absolute inset-0 bg-octo-grid opacity-20 pointer-events-none mix-blend-overlay"></div> </div> <div class="flex-grow flex flex-col justify-end"> <span class="font-display font-bold text-sm md:text-base uppercase text-octo-ink leading-tight line-clamp-2">${post.data.title}</span> <span class="font-mono text-[10px] text-octo-stamp uppercase mt-1">[${post.data.category}]</span> </div> <div class="absolute inset-x-2 top-2 h-1 bg-octo-paper opacity-50 shadow-[0_2px_4px_rgba(255,255,255,0.5)] z-10 hidden group-hover:block transition-all"></div> </a>`)}  <div class="border-4 border-octo-ink p-2 bg-octo-paper shadow-[4px_4px_0_0_#1C2331] relative group aspect-video sm:aspect-auto sm:h-full flex flex-col items-center justify-center opacity-70"> <div class="absolute inset-2 border-2 border-octo-ink flex items-center justify-center border-dashed"></div> <span class="font-mono font-bold text-sm uppercase z-10 text-octo-ink text-center max-w-[80%]">MAIS DADOS SENDO DECRIPTADOS...</span> <span class="font-mono text-[10px] z-10 opacity-70 mt-2">[ AGUARDE ]</span> </div> </div> ` })}`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
