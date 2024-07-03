interface IProjects {
	title: string;
	tags: string[];
	description: string;
	image: string;
	links: { github: string; url: string | null };
}

export const MyProjects: IProjects[] = [
	{
		title: "Art Gallery Api",
		description:
			"Developed a comprehensive web application using ASP.NET Core. Initially designed as an API, the project evolved to include an admin panel built with Blazor, showcasing my ability to learn and integrate new technologies. Utilized PostgreSQL as the primary database, implemented Redis for caching to improve performance, and secured admin authentication with JWT.",
		image: "/projects/dotnet.png",
		tags: ["C#", "ASP.NET Core", "PostgreSQL", "Redis", "API", "JWT", "Blazor"],
		links: {
			github: "https://github.com/R-uan/ArtGalleryWebApi",
			url: null,
		},
	},
	{
		title: "Virtual Store Api",
		description:
			"Web API for a online store using Laravel as the base framework. Contains user authentication using Json Web Tokens, caching using Redis, main database using Postgres and is test covered.",
		image: "/projects/laravel.png",
		links: { github: "", url: null },
		tags: ["PHP", "Laravel", "API", "Postgres", "Redis", "JWT"],
	},
];
