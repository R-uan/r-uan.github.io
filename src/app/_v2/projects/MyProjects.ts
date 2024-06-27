interface IProjects {
	title: string;
	tags: string[];
	description: string;
	image: string | null;
	links: { github: string; url: string | null };
}

export const MyProjects: IProjects[] = [
	{
		title: "Art Gallery Api",
		description:
			"Web Application using ASP.NET Core. Started as just an API but I decided to learn Blazor and create an admin panel on the existing application. Uses PostgreSQL as the main database, redis as caching database and JWT for admin authentication",
		image: null,
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
		image: null,
		links: { github: "", url: null },
		tags: ["PHP", "Laravel", "API", "Postgres", "Redis", "JWT"],
	},
];
