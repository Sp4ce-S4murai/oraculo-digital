import { c as createComponent } from './consts_DU1oNkvI.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_FIAYYDQK.mjs';
import { $ as $$BaseLayout } from './BaseLayout_D-BsIQ8n.mjs';
import { $ as $$DossierCard } from './DossierCard_Cy3Ipx2_.mjs';
import { g as getCollection } from './_astro_content_DPiPh5NV.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("artigos", ({ data }) => {
    return data.isDraft !== true;
  });
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "O.C.T.O. - Registro de Eventos (Blog)" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="mb-12"> <div class="font-mono text-xs font-bold text-octo-stamp uppercase tracking-widest mb-2 border-l-4 border-octo-stamp pl-2">
[ ARQUIVO CRONOLÓGICO - LISTAGEM BRUTA DO TERMINAL ]
</div> <h1 class="font-display font-bold uppercase text-4xl md:text-6xl text-octo-ink border-b-4 border-octo-ink pb-4">
Arquivo de Incidentes (Blog)
</h1> <p class="mt-4 font-mono text-sm md:text-base uppercase font-bold text-octo-ink opacity-80 border-2 border-octo-ink p-4 bg-octo-paper shadow-[4px_4px_0_0_#1C2331]">
Esta divisória consolida o registro linear de todos os pacotes submetidos pelo quadro de analistas O.C.T.O. Classificação mantida em ordem paramétrica de extração.
</p> </header> <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "DossierCard", $$DossierCard, { "title": post.data.title, "description": post.data.description, "pubDate": post.data.pubDate, "category": post.data.category, "slug": post.id })}`)} </section> ` })}`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/blog.astro", void 0);

const $$file = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
