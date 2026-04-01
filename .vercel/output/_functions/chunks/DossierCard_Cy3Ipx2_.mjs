import { c as createComponent } from './consts_DU1oNkvI.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_FIAYYDQK.mjs';
import 'clsx';

const $$DossierCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DossierCard;
  const { title, description, pubDate, category, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/artigos/${slug}`, "href")} class="block border-2 border-octo-ink bg-transparent hover:shadow-[4px_4px_0_0_#1C2331] transition-shadow group h-full flex flex-col">  <div class="bg-octo-ink text-octo-paper font-mono text-[10px] md:text-xs uppercase grid grid-cols-2 border-b-2 border-octo-ink"> <div class="p-2 border-r border-octo-paper border-dashed flex flex-col"> <span class="opacity-70 tracking-widest leading-none mb-1">DATA:</span> <span class="font-bold leading-tight">${pubDate ? new Date(pubDate).toLocaleDateString("pt-BR") : "REDACTED"}</span> </div> <div class="p-2 flex flex-col overflow-hidden"> <span class="opacity-70 tracking-widest leading-none mb-1">DEPTO:</span> <span class="font-bold leading-tight truncate">${category}</span> </div> </div>  <div class="p-4 flex-grow flex flex-col"> <h3 class="font-display font-bold uppercase text-xl border-b border-octo-ink pb-2 mb-2 text-octo-ink group-hover:underline decoration-2 underline-offset-4 leading-tight"> ${title} </h3> <p class="font-serif text-sm text-octo-ink mb-6 flex-grow line-clamp-4 leading-relaxed hyphens-auto text-justify"> ${description} </p> </div> </a>`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/components/DossierCard.astro", void 0);

export { $$DossierCard as $ };
