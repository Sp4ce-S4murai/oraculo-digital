import { c as createComponent } from './consts_DU1oNkvI.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate } from './entrypoint_FIAYYDQK.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DPiPh5NV.mjs';

async function getStaticPaths() {
  const posts = await getCollection("artigos");
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/artigos/[id].astro", void 0);

const $$file = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/pages/artigos/[id].astro";
const $$url = "/artigos/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
