import IProject from "../interfaces/IProject";

export const ProjectList: IProject[] = [
    {
        title: "TCP Server",
        description:
            "A lightweight, async game server built in Rust with a custom binary protocol. Originally designed for a card game that doesn’t exist, this server handles client connections, verifies packets, and broadcasts game state updates with zero fluff and maximum control.",
        stack: ["Rust", "Tokio", "CBOR", "TCP", "Lua"],
        image: null,
        url: "https://github.com/R-uan/ccg-tcp-server",
    },
    {
        title: "Player Auth Server",
        description:
            "The Player Auth Server is a micro-service responsible for the storage and authentication of a player's information. The server was built up from .NET Web API. The database used is PostgreSQL and the ORM is Entity Framework. The authentication token is in JWT format while the password hashing uses BCrypt.",
        stack: ["ASP.NET Core", "C#", "JWT", "Postgres", "gRPC"],
        image: null,
        url: "https://github.com/R-uan/ccg-microservices/tree/main/auth-server",
    },
    {
        title: "lib-synapse-net",
        description: "C++ extern library to be used as a bridge between the client and the TCP Server. This implements the same custom protocol as is intended to be used by a C# client.",
        stack: ["C++", "CBOR", "CMAKE"],
        image: null,
        url: "https://github.com/R-uan/lib-synapse-net/tree/main",
    },
    {
        title: "This Website",
        description: "Portfolio Website for myself :)",
        stack: ["Typescript", "NextJS", "ReactJS", "SCSS"],
        image: null,
        url: "https://github.com/R-uan/r-uan.github.io",
    },
    /* {
        title: "",
        description: "",
        stack: [],
        image: "",
        url: "",
    }, */
];
