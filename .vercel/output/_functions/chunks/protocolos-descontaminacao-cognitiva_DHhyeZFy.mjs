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
  "title": "Memorando Interno #104: Protocolos de Descontaminação Cognitiva",
  "description": "Regra operacional para atenuamento do trauma psicológico residual proveniente do contato com artefatos de engenharia não sancionada.",
  "pubDate": "2026-03-31T00:00:00.000Z",
  "author": "Analista Chefe Polvolox",
  "category": "Departamento de Engenharia Reversa",
  "coverImage": "/assets/evidence/lab-cognitivo.png",
  "tags": ["Memética", "Contenção", "Psicologia Operacional", "Protocolo"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "diretrizes-mandatórias-de-isenção",
    "text": "Diretrizes Mandatórias de Isenção"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NÍVEL DE ACESSO:"
        }), " APENAS FUNCIONÁRIOS DA INSTALAÇÃO", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "ORIGEM DOS DADOS:"
        }), " RECURSOS HUMANOS / SEGURANÇA INTERNA", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
          children: "A DISTRIBUIÇÃO FÍSICA DESTE ARQUIVO É MANDATÓRIA APÓS ACIDENTES CLASSE D"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "O processamento prolongado de dados originários da recuperação tecnológica (Crash Retrievals) demonstrou causar degradação profunda e mensurável nos sistemas neurais da equipe de pesquisa. O incidente de Março de 2024 (Referência: “Fratura do Setor Silício”) exigiu o desativamento compulsório de quatro agentes expostos a campos magnéticos anômalos originários das cascas de meta-materiais do Voo 01-A."
    }), "\n", createVNode(_components.p, {
      children: ["Pela presente, os protocolos de descontaminação cognitiva passam a ser obrigatórios após turnos excedentes a quarenta e cinco (", createVNode(_components.code, {
        children: "45"
      }), ") minutos de manuseio ou análise espectral direta dos artefatos arquivados."]
    }), "\n", createVNode(_components.h2, {
      id: "diretrizes-mandatórias-de-isenção",
      children: "Diretrizes Mandatórias de Isenção"
    }), "\n", createVNode(_components.p, {
      children: "A exposição direta à Geometria Não-Euclidiana presente no maquinário interno dos drones táticos UAP resulta em reações que emulam a Síndrome de Havana e despersonalização crônica. Todos os laboratórios subterrâneos do O.C.T.O devem cumprir:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Observação Diferida:"
        }), " Avaliações de carcaça e motores balísticos só devem operar via feeds estereoscópicos na câmara de chumbo, nunca a olho nu."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ciclos de Descompressão Neural:"
        }), " Para cada 15 minutos adicionais em presença das ligas isotópicas recuperadas, são exigidas duas (2) horas de imersão somática na unidade de isolamento sonoro."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Monitoramento de Comportamento Errático:"
        }), " O consumo obsessivo de padrões fractais por parte de engenheiros estruturais é sintoma inicial grave de contaminação memética primária."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "ADVERTÊNCIA DE SEGURANÇA OPERACIONAL:"
      }), " A sede não tolerará outra quebra reativa nos laudos psiquiátricos. Empregados percebendo zumbido tático de baixa frequência (", createVNode(_components.code, {
        children: "hum"
      }), ") ou alucinações ligadas a correntes de Fibonacci devem se reportar imediatamente à ala hospitalar do subsolo. A omissão resultará em suspensão terminativa para proteção do perímetro da Divisão G."]
    }), "\n", createVNode(_components.p, {
      children: "Mantenham a ciência rigorosa. Não se deixem assimilar pela abstração do desconhecido."
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

const url = "src/content/artigos/protocolos-descontaminacao-cognitiva.mdx";
const file = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/content/artigos/protocolos-descontaminacao-cognitiva.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/pedro/Documents/IniciativaOcto/oraculo-digital/src/content/artigos/protocolos-descontaminacao-cognitiva.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
