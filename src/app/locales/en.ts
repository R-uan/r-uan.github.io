import ILocale from "../../scripts/ILocale";

const en: ILocale = {
	header: {
		home: "Home",
		about: "About",
		contact: "Contact",
		experience: "Experience",
		resume: "Resume",
	},
	titles: {
		about: "About myself",
		contact: "Contact",
		landing: "Software Developer",
		technologies: "Technologies",
		areas: {
			title: "Areas of Interest",
			backend: "Backend development",
			frontend: "Frontend development",
			devops: "DevOps Engineering",
		},
	},

	paragraphs: {
		areas: {
			backend: "Focus in building APIs with Node.js (Express.js, Nest.js), C# (ASP.NET Core) and PHP (Laravel).",
			devops: "Deeper learning into DevOps tools and plataforms such as: Microsoft Azure, Amazon Web Services, Docker, Kubernetes and workflows.",
			frontend:
				"Developing responsive websites using Next.js(React.js, TailwindCSS, SASS, Styled Components) and Blazor (Razor Components, Bootstrap).",
		},
		landing:
			"Software developer aiming to establish myself in the tech field by creating high-quality applications. Highly motivated to contribute to challenging projects and enhancing my knowledge",
		about: [
			"Hi! My name is Ruan, and I am an aspiring software developer working towards a career in the field. I found myself passionate about technology since 8yo and decided to pursue a career as a software developer, aiming to climb the professional ladder in this exciting field.",
			"I seek to establish myself in the technology field and utilize my experience in software development to create high-quality applications. I am highly motivated to contribute to challenging projects that add value to my knowledge and help me become a well-rounded and indispensable professional.",
		],
		contact: [
			"If you looked at my resume and though I fitting for your project do not be afraid to hit me up. I am willing to work on any project that will allow me to receive positive experiences in the software development field.",
		],
	},
	misc: {
		resume: "/resume-english.pdf",
		codeBlock: {
			fields: {
				age: "Age",
				languages: "Languages",
				nationality: "Nationality",
			},
			values: {
				languages: ["Portuguese", "English"],
				nationality: "Brazilian",
			},
		},
	},
};
