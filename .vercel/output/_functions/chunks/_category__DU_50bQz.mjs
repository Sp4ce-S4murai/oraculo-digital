import { c as createComponent } from './consts_DU1oNkvI.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_FIAYYDQK.mjs';
import { g as getCollection } from './_astro_content_DPiPh5NV.mjs';
import { $ as $$BaseLayout } from './BaseLayout_D-BsIQ8n.mjs';
import { $ as $$DossierCard } from './DossierCard_Cy3Ipx2_.mjs';

async function getStaticPaths() {
  const allPosts = await getCollection("artigos");
  const uniqueCategories = [
    ...new Set(allPosts.map((post) => post.data.category))
  ];
  return uniqueCategories.map((category) => {
    const filteredPosts = allPosts.filter((post) => post.data.category === category);
    return {
      params: { category },
      props: { posts: filteredPosts }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Classificação Departamental: ${category}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="border-b-4 border-octo-ink mb-8 pb-4"> <div class="font-mono text-xs font-bold text-octo-stamp uppercase tracking-widest mb-2 border-l-4 border-octo-stamp pl-2">
Catálogo de Evidências por Departamento
</div> <h1 class="text-octo-ink font-display font-bold text-3xl md:text-5xl uppercase leading-none">
Diretório Relacional:
<span class="inline-block mt-2 font-mono text-base md:text-3xl border-2 border-octo-ink p-2 shadow-[4px_4px_0_0_rgba(28,35,49,1)] bg-octo-paper text-octo-ink"> ${category} </span> </h1> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "DossierCard", $$DossierCard, { "title": post.data.title, "description": post.data.description, "pubDate": post.data.pubDate, "category": post.data.category, "slug": post.id })}`)} </div> ` })}`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/categorias/[category].astro", void 0);

const $$file = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/categorias/[category].astro";
const $$url = "/categorias/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$category,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
