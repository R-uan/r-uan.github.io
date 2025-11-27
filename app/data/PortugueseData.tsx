import IExperience from "../interfaces/IExperience";
import IProject from "../interfaces/IProject";

export const Sobre = {
  title: "Desenvolvedor de Software",
  text: "Escrevo cartas para maquinas.",
  aboutMe: (
    <>
      <p>
        Sou desenvolvedor back-end, focado em criar sistemas confiáveis e de
        alto desempenho. Trabalho principalmente com <b>C#</b>,<b>JavaScript</b>
        , <b>Rust</b> e <b>C++</b>, e tenho experiência com frameworks como
        <b>.NET</b>, <b>Spring Boot</b>, <b>React</b>,<b>Next.js</b>,
        <b>Express</b> e <b>Prisma</b>. Gosto de projetar arquiteturas
        eficientes, otimizar fluxos de dados e desenvolver soluções bem
        estruturadas e escaláveis.
      </p>
      <p>
        Tenho experiência com <b>PostgreSQL</b>, <b>MongoDB</b> e <b>Redis</b>,
        além de utilizar ferramentas como <b>Docker</b>, <b>NixOS</b> e
        <b>Linux</b> para garantir consistência e fluxos de desenvolvimento
        sólidos. Valorizo código limpo, clareza e evolução constante em tudo o
        que construo.
      </p>
      <p>
        Estou sempre aberto a novos desafios, especialmente projetos que
        envolvam lógica back-end complexa, sistemas distribuídos ou
        desenvolvimento voltado para desempenho.
      </p>
    </>
  ),
};

export const Experiencia: IExperience[] = [
  {
    from: "Jul, 2024",
    to: "Nov, 2024",
    position: ".NET Developer",
    location: "Programador.TV",
    description:
      "Contributed to the development of production code by refactoring existing codebases, implementing unit tests, and addressing warnings and errors using ASP.NET Core and JavaScript.",
  },
];

export const Projetos: IProject[] = [
  {
    title: "Relay Chat",
    description: `Servidor de chat rápido usando epoll e protocolo binário próprio.
    Suporta canais com funções, mensagens em broadcast e arquitetura com thread pool,
    garantindo concorrência eficiente e processamento sequencial por cliente.`,
    stack: ["C++", "CMAKE", "Protocol"],
    image: null,
    url: "https://github.com/R-uan/relay-chat",
  },
  {
    title: "RCON Protocol Implementation",
    description: `
      Uma implementação enxuta do protocolo RCON da Valve, usando pool de threads
      e logging assíncrono para comunicação eficiente. Em evolução, com planos
      para ampliar comandos, suportar Windows e tratar respostas multi-pacote.
    `,
    stack: ["C++", "CMAKE"],
    image: null,
    url: "https://github.com/R-uan/rcon-protocol",
  },
  {
    title: "Dota Analysis",
    description: `Um pipeline de dados que analisa partidas de Dota 2 com estatísticas
    detalhadas por herói, facção, modo e posição. Traz métricas como taxa de pick/ vitória,
    KDA, economia e comparações de desempenho em todos os níveis do jogo.`,
    stack: ["NodeJS", "Express", "Postgres", "Prisma"],
    image: null,
    url: "https://github.com/R-uan/dota-analytics",
  },
  {
    title: "CCG Microservices",
    description: `Conjunto de microsserviços que sustentam recursos centrais de um CCG:
    autenticação, catálogo de cartas e gerenciamento de decks. Feitos em C# com Postgres e
    MongoDB, lidam com a lógica essencial que mantém o jogo funcionando.`,
    stack: ["C#", ".NET", "Postgres", "MongoDB"],
    image: null,
    url: "https://github.com/R-uan/ccg-microservices",
  },
  {
    title: "Project Manager",
    description: `API backend educacional inspirada no GitHub Projects. Permite criar equipes,
    gerenciar tarefas e organizar fluxos de projetos. Feita para aprender Python, Django e
    conceitos de backend, não para competir com ferramentas reais.`,
    stack: ["Python", "Django", "Postgres"],
    image: null,
    url: "https://github.com/R-uan/project-manager",
  },
  /* {
        title: "",
        description: "",
        stack: [],
        image: "",
        url: "",
    }, */
];
