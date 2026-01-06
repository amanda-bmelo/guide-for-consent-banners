// cspell:disable
export const COOKIE_CATEGORIES = [
  {
    id: "functionality",
    name: "Cookies de funcionalidade",
    description:
      "As informações específicas do seu dispositivo serão solicitadas e utilizadas para o distinguir de outros dispositivos para ajustar a nossa interface às necessidades do seu dispositivo.",
    example: {
      source: null,
      text: "Uma pessoa está acessando pelo celular e no sistema de configurações de preferências de fonte, indica que a fonte utilizada é extra larga. Nossa interface seria adaptada para essa especificidade do seu dispositivo.",
    },
    partners: [],
    defaultChecked: true,
  },
  {
    id: "preferences",
    name: "Cookies de preferências",
    description:
      "As informações sobre a sua atividade neste serviço (por exemplo, formulários que envia, conteúdos do site que visualiza) podem ser armazenadas e combinadas com outras, tais como a sua atividade anterior neste serviço ou noutros sites. Isto é então utilizado para criar ou melhorar um perfil sobre si com objetivo de recomendar conteúdos semelhantes a sua preferência.",
    example: {
      source: "El País",
      text: "Lê vários artigos sobre como construir uma casa na árvore. Estas informações podem ser adicionadas a um perfil para assinalar o seu interesse em conteúdos relacionados com o exterior, bem como guias “faça você mesmo”.",
    },
    partners: ["FollowYourCursor SA", "LoveLikes Co."],
    defaultChecked: true,
  },
  {
    id: "performance",
    name: "Cookies de desempenho",
    description:
      "As informações relativas a que conteúdos lhe são apresentados e à forma como interage com os mesmos podem ser utilizadas para determinar se os conteúdos (não publicitários), por exemplo, chegaram ao público-alvo e corresponderam aos respectivos interesses.",
    example: {
      source: "El País",
      text: "Lê vários artigos sobre como construir uma casa na árvore. Estas informações podem ser adicionadas a um perfil para assinalar o seu interesse em conteúdos relacionados com o exterior, bem como guias `faça você mesmo`.",
    },
    partners: ["DataMetrics.com", "UseUserData SA", "FindAnalytics Co."],
    defaultChecked: true,
  },
  {
    id: "advertising",
    name: "Cookies de publicidade",
    description:
      "A publicidade pode basear-se em dados limitados, tais como o site ou a aplicação que está a utilizar, a sua localização não precisa, o seu tipo de dispositivo ou o conteúdo com que está (ou esteve) a interagir (por exemplo, para limitar o número de vezes que um anúncio lhe é apresentado).",
    example: {
      source: "El País",
      text: "Um fabricante de automóveis quer promover  anúncios para aumentar suas vendas. A empresa de publicidade se utiliza do horário das 18h30 e da localização não precisa para promover a campanha para o público adequado.",
    },
    partners: ["AdNetwork", "TargetAds Co."],
    defaultChecked: false,
  },
];
