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
  "title": "Análise Cinemática: Incidente Nimitz (Voo FLIR1)",
  "description": "Avaliação cinemática da aceleração e taxa de giro do alvo aéreo não correlacionado cruzado via sistemas AEGIS em 2004.",
  "pubDate": "2026-03-31T00:00:00.000Z",
  "author": "Analista Chefe Polvolox",
  "category": "Arquivo de Fenômenos Aéreos",
  "coverImage": "/assets/evidence/nimitz-flir.png",
  "tags": ["Nimitz", "FLIR", "Cinemática", "AEGIS"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "extração-telemétrica-do-pod-atflir",
    "text": "Extração Telemétrica do Pod ATFLIR"
  }, {
    "depth": 3,
    "slug": "considerações-operacionais-e-falha-induzida",
    "text": "Considerações Operacionais e Falha Induzida"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NÍVEL DE ACESSO:"
        }), " CÓDIGO NEGRO", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "ORIGEM DOS DADOS:"
        }), " OSINT / SENSOR-INTEGRATION", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "REF:"
        }), " ARQ-UAP-2004-11"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Os registros do radar SPY-1B do cruzador USS Princeton (CG-59) documentaram contatos múltiplos não-padronizados descendendo da altitude LEO (Low Earth Orbit, aprox. 80.000 pés) em velocidade terminal direta até a cota marinha (50 pés) em menos de 0.78 segundos. Isso viola especificações gravitacionais toleráveis a vetores de propulsão biológicos estruturados."
    }), "\n", createVNode(_components.h2, {
      id: "extração-telemétrica-do-pod-atflir",
      children: "Extração Telemétrica do Pod ATFLIR"
    }), "\n", createVNode(_components.p, {
      children: "O vídeo desclassificado (FLIR1) fornece dados insuficientes se analisado visualmente. Todavia, a correlação matemática dos marcadores de enquadramento do F/A-18F Super Hornet exibe a taxa brutal de recuo lateral do alvo na transição temporal 01:14 do clipe original."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Parâmetro"
          }), createVNode(_components.th, {
            children: "Estimativa Conservadora (Mach)"
          }), createVNode(_components.th, {
            children: "Aceleração Computada (Gs)"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Aceleração Inicial (Y-Axis)"
          }), createVNode(_components.td, {
            children: "2.5 M"
          }), createVNode(_components.td, {
            children: "~60 Gs"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Arrancada Terminal (X-Axis)"
          }), createVNode(_components.td, {
            children: "14.8 M"
          }), createVNode(_components.td, {
            children: "~800 Gs"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Assinatura Térmica do Exaustor"
          }), createVNode(_components.td, {
            children: "ZERO KELVIN DELTA"
          }), createVNode(_components.td, {
            children: "INDETECTÁVEL"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "considerações-operacionais-e-falha-induzida",
      children: "Considerações Operacionais e Falha Induzida"
    }), "\n", createVNode(_components.p, {
      children: "A taxa de deslocamento é paradoxal. A ausência de estrondos sônicos (sonic booms) e o coeficiente balístico não registram perturbação no fluxo de ar, indicando que o objeto desloca vácuo em vez de ar direto."
    }), "\n", createVNode(_components.p, {
      children: "Ademais, reportes secundários indicam que a interceptação do Carrier Strike Group 11 resultou em “jamming ativo” intencional dos canais locais (Falhas Tipo A-3 no radar tático da frota). Isso infere que a anomalia não é errática ou acidental: possui sistema autônomo e de inteligência eletromagnética (ELINT) hostil ou reativa superior a qualquer ECM (Electronic Countermeasures) terrestre documentada em fontes OSINT."
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

const url = "src/content/artigos/anomalia-cinematica-nimitz.mdx";
const file = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/content/artigos/anomalia-cinematica-nimitz.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/content/artigos/anomalia-cinematica-nimitz.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
