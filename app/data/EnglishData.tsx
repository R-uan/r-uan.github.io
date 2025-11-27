import IExperience from "../interfaces/IExperience";
import IProject from "../interfaces/IProject";

export const AboutMe = {
  title: "Software Developer",
  text: "I like to write letters to machines.",
  aboutMe: (
    <>
      <p>
        I’m a back-end developer focused on building reliable, high-performance
        systems. I work primarily with <b>C#</b>, <b>JavaScript</b>,<b>Rust</b>,
        and <b>C++</b>, and I’m experienced with frameworks such as <b>.NET</b>,
        <b>Spring Boot</b>, <b>React</b>, <b>Express</b>, and <b>Prisma</b>. I
        enjoy designing efficient architectures, optimizing data flow, and
        creating well-structured solutions that scale.
      </p>
      <p>
        I’m comfortable working with <b>PostgreSQL</b>, <b>MongoDB</b>, and
        <b>Redis</b>, and I rely on tools like <b>Docker</b>, <b>NixOS</b>, and
        <b>Linux</b> to maintain consistency and strong development workflows. I
        value clean code, clarity, and steady improvement in everything I build.
      </p>
      <p>
        I’m always open to new challenges, especially projects involving complex
        back-end logic, distributed systems, or performance-oriented
        development.
      </p>
    </>
  ),
};

export const ExperienceList: IExperience[] = [
  {
    from: "Jul, 2024",
    to: "Nov, 2024",
    position: ".NET Developer",
    location: "Programador.TV",
    description:
      "Contributed to the development of production code by refactoring existing codebases, implementing unit tests, and addressing warnings and errors using ASP.NET Core and JavaScript.",
  },
];

export const ProjectList: IProject[] = [
  {
    title: "Relay Chat",
    description: `A fast, epoll-driven chat server with a custom binary protocol,
    role-based channels, and a thread-pooled architecture.
    It handles messaging, channel management, and multi-client
    concurrency with strict per-client request sequencing.`,
    stack: ["C++", "CMAKE", "Protocol"],
    image: null,
    url: "https://github.com/R-uan/relay-chat",
  },
  {
    title: "RCON Protocol Implementation",
    description: `
    A lean implementation of Valve’s RCON protocol, built with thread pooling and
    async logging for clean, efficient communication. Still growing with planned
    command extensions, Windows support, and multi-packet handling.`,
    stack: ["C++", "CMAKE"],
    image: null,
    url: "https://github.com/R-uan/rcon-protocol",
  },
  {
    title: "Dota Analysis",
    description: `A data pipeline that analyzes Dota 2 matches with detailed stats
    across heroes, factions, modes, and roles. Delivers insights like pick/win rates,
    KDA, economy metrics, and performance comparisons at every game layer.`,
    stack: ["NodeJS", "Express", "Postgres", "Prisma"],
    image: null,
    url: "https://github.com/R-uan/dota-analytics",
  },
  {
    title: "CCG Microservices",
    description: `A set of focused microservices powering core features of a CCG:
    authentication, card catalog, and deck management. Built in C# with Postgres and MongoDB,
    they handle the essential backend logic that keeps the rest of the game running.`,
    stack: ["C#", ".NET", "Postgres", "MongoDB"],
    image: null,
    url: "https://github.com/R-uan/ccg-microservices",
  },
  {
    title: "Project Manager",
    description: `An educational backend API inspired by GitHub Projects. Lets users create
    teams, manage tasks, and structure project workflows. Built to learn Python, Django, and
    core backend concepts—not to compete with real management tools.`,
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
