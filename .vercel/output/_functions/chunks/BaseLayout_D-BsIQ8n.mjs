import { c as createComponent } from './consts_DU1oNkvI.mjs';
import 'piccolore';
import { c as addAttribute, b as renderTemplate, r as renderComponent, k as renderHead, j as renderSlot } from './entrypoint_FIAYYDQK.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_BJZuS2Cm.mjs';

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title,
    description,
    image = "/assets/og-tentacle-default.png"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><title>${title} | Oráculo Digital</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/content/BaseHead.astro", void 0);

const logoOcto = new Proxy({"src":"/_astro/logo-octo.DHdZUTxZ.png","width":720,"height":720,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/assets/logo-octo.png";
							}
							
							return target[name];
						}
					});

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Dossiê O.C.T.O. - Acesso Restrito", image } = Astro2.props;
  return renderTemplate`<html lang="pt-BR" class="bg-octo-paper text-octo-ink font-serif antialiased"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Oswald:wght@400;500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-octo-grid selection:bg-octo-ink selection:text-octo-paper py-8 px-4 md:px-8"> <div class="max-w-6xl mx-auto">  <main class="border-4 border-octo-ink bg-octo-paper p-6 md:p-12 shadow-[12px_12px_0_0_rgba(28,35,49,1)]">  <header class="mb-10 border-b-4 border-octo-ink pb-2"> <div class="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6"> <div class="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": logoOcto, "alt": "Logotipo do O.C.T.O - Observação e Coleta de Transmissões e Objetos", "class": "w-full h-full object-contain mix-blend-multiply drop-shadow-none" })} </div> <div class="flex flex-col justify-center text-center md:text-left mt-0 md:mt-8"> <a href="/" class="text-octo-ink font-display font-bold text-5xl md:text-[5rem] tracking-tighter uppercase leading-[0.8] hover:opacity-80 transition-opacity">
Oráculo Digital
</a> <span class="font-display text-xl md:text-4xl font-bold tracking-widest uppercase mt-4 block">
Uma Publicação do O.C.T.O.
</span> </div> </div>  <nav class="border-t-4 border-b-4 border-octo-ink py-2"> <ul class="flex flex-wrap items-center justify-center md:justify-around w-full gap-y-4 gap-x-4 md:gap-x-8 lg:gap-x-16 font-display font-bold uppercase text-octo-ink text-sm lg:text-lg tracking-widest"> <li><a href="/" class="hover:underline decoration-2 underline-offset-4">INÍCIO</a></li> <li class="hidden md:inline">/</li> <li><a href="/blog" class="hover:underline decoration-2 underline-offset-4">BLOG</a></li> <li class="hidden md:inline">/</li> <li><a href="/galeria" class="hover:underline decoration-2 underline-offset-4">GALERIA</a></li> <li class="hidden md:inline">/</li> <li><a href="/sobre" class="hover:underline decoration-2 underline-offset-4">SOBRE</a></li> </ul> </nav> </header> <section class="min-h-[50vh]"> ${renderSlot($$result, $$slots["default"])} </section>  <footer class="mt-16 pt-8 border-t-4 border-octo-ink flex flex-col items-center text-center gap-4 text-xs font-mono font-bold text-octo-ink"> <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-4"> <div class="w-24 h-24"> ${renderComponent($$result, "Image", $$Image, { "src": logoOcto, "alt": "O.C.T.O. Selo Menor", "class": "w-full h-full object-contain mix-blend-multiply drop-shadow-none" })} </div> <div class="flex flex-col items-center md:items-start border-t-2 md:border-t-0 md:border-l-2 border-octo-ink pt-4 md:pt-0 pl-0 md:pl-6 max-w-xl"> <span class="font-display text-3xl font-bold tracking-widest text-octo-ink mb-1 uppercase">O.C.T.O.</span> <span class="text-[10px] md:text-xs opacity-90 uppercase tracking-widest leading-relaxed">
OFFICIAL REPOSITORY OF DATA EXTRACTION DESCRIBING UNUSUAL DESFONTS.<br>
DEPARTMENT OF ANOMALOUS INCIDENTS & VITAL INVESTIGATION OPERATIONS.
</span> </div> </div> <p class="opacity-90 mt-2 border-t-2 border-octo-ink pt-4 w-full uppercase tracking-widest">
Copyright &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ORÁCULO DIGITAL. All rights reserved.
</p> </footer> </main> </div> </body></html>`;
}, "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
