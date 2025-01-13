import IProject from "../interfaces/IProject";

export const ProjectList: IProject[] = [
	{
		title: "Weather Monitoring",
		description:
			"Application that periodically requests weather data from selected cities and stores said data into a SQL database as well as CSV files. This project was made to understand the concept of message brookers and task scheduling.",
		stack: ["ASP.NET Core", "C#", "RabbitMQ", "Redis", "Postgres", "Golang"],
		image: "/projects/weatherapi.webp",
		url: "https://github.com/R-uan/WeatherMonitoring",
	},
	{
		title: "Art Gallery API",
		description:
			"Web API using ASP.NET Core for an digital art gallery. Has authentication with JWT, Caching with Redis and uses PostgreSQL as the database.",
		stack: ["ASP.NET Core", "C#", "Redis", "JWT", "Postgres"],
		image: "/projects/artgallery.webp",
		url: "https://github.com/R-uan/ArtGalleryWebApi",
	},
	{
		title: "Gopress",
		description: "HTTP Wrapper for Golang inspired on Expressjs.",
		stack: ["Golang", "HTTP"],
		image: "/projects/server.webp",
		url: "https://github.com/R-uan/Gopress",
	},
	{
		title: "create-gitignore",
		description: "An interactive CLI tool that creates a .gitignore file ",
		stack: ["Rust"],
		image: "",
		url: "https://github.com/R-uan/create-gitignore",
	},
	/* {
		title: "",
		description: "",
		stack: [],
		image: "",
		url: "",
	}, */
];
