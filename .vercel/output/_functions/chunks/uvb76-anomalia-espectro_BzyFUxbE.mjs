import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './entrypoint_FIAYYDQK.mjs';
import { $ as $$PostLayout } from './PostLayout_BICyeAHI.mjs';
import 'clsx';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$PostLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/PostLayout.astro",
  "title": "Interceptação UVB-76: Anomalia de Espectro e Marcações de Tempo",
  "description": "Avaliação paramétrica da rádio russa 'The Buzzer' em 4625 kHz face ao decaimento temporal de transmissões e micro-flutuações magnéticas.",
  "pubDate": "2026-03-31T00:00:00.000Z",
  "author": "Analista Chefe Polvolox",
  "category": "Divisão de Sinais Anômalos",
  "coverImage": "/assets/evidence/uvb-espectro.png",
  "tags": ["UVB-76", "Onda Curta", "SIGINT", "Anomalia Ionosférica"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "a-flutuação-temporal",
    "text": "A Flutuação Temporal"
  }, {
    "depth": 3,
    "slug": "transcrição-recuperada-logs-críticos",
    "text": "Transcrição Recuperada (Logs Críticos)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NÍVEL DE ACESSO:"
        }), " CÓDIGO NEGRO", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "ORIGEM DOS DADOS:"
        }), " OSINT / ENCRYPTED-COMMS", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "REF:"
        }), " SIGINT-UVB-4625"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["As transmissões da repetidora UVB-76 (The Buzzer) são objeto primário de interceptadores civis. A narrativa oficial da inteligência russa postula a rádio como sinalizador da “Dead Hand” (Perímetro de Retaliação Nuclear Automatizada) ou simples sincronizador atmosférico. Contudo, nossa triangulação baseada no Array do O.C.T.O revela assinaturas anômalas não-humanas carreadas sob a portadora de ", createVNode(_components.em, {
        children: "white noise"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "a-flutuação-temporal",
      children: "A Flutuação Temporal"
    }), "\n", createVNode(_components.p, {
      children: ["Transcrições fonéticas clássicas falham em revelar a real intenção da estação. O marcador ", createVNode(_components.code, {
        children: "UZB-76"
      }), " alterou-se para ", createVNode(_components.code, {
        children: "MDZhB"
      }), " e subsequentes, o que na literatura pública reflete apenas indicativos militares. Nossa telemetria indica algo mais perverso:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "1400h Zulu | Registro 04A:"
        }), " Uma micro-compressão espectral ocorreu na frequência 4625 kHz."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "1401h Zulu | Registro 04B:"
        }), " A agulha de transmissão pausou em assimetria perfeita com a anomalia geomagnética G5 registrada pelo satélite DSCOVR no Ponto de Lagrange L1."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["As vozes numéricas (", createVNode(_components.em, {
        children: "“Zhenya, Ulyana, Anna…”"
      }), ") que ocasionalmente irrompem na frequência carregam tons harmônicos inconsistentes com geradores de áudio analógicos da era soviética e modernos síntetizadores digitais militares. A tessitura vocal sobrepõe-se a uma onda de choque de infra-som."]
    }), "\n", createVNode(_components.h3, {
      id: "transcrição-recuperada-logs-críticos",
      children: "Transcrição Recuperada (Logs Críticos)"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[04:21:19] [BUZZER NORMAL]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[04:21:20] [SILÊNCIO DE PORTADORA]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[04:21:24] 9 3 8 8 2 NAIMINA 74 14 35 74"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[04:21:30] [BUZZER RETORNA COMODULADO A +0.2Hz]"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Há estrita correlação matemática de regressão linear determinando que as transmissões da estação respondem a perturbações não da OTAN, mas da densidade de fluxo de partículas solares. Alguém, ou algum automatismo profundo, usa a ionosfera terrestre inteira como um tambor ressonante."
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "src/content/artigos/uvb76-anomalia-espectro.mdx";
const file = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/content/artigos/uvb76-anomalia-espectro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/content/artigos/uvb76-anomalia-espectro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
