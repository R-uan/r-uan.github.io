import ILocale from "../../scripts/ILocale";

const pt: ILocale = {
	header: {
		home: "Inicio",
		about: "Sobre",
		contact: "Contato",
		experience: "Experiencia",
		resume: "Curriculo",
	},
	titles: {
		about: "Sobre mim",
		contact: "Contato",
		landing: "Desenvolvedor de Software",
		technologies: "Tecnologias",
		areas: {
			title: "Areas de Interesse",
			backend: "Desenvolvimento Backend",
			frontend: "Desenvolvimento Frontend",
			devops: "Engenharia DevOps",
		},
	},
	paragraphs: {
		areas: {
			backend:
				"Foco em desenvolvimento de APIs (Application Programming Interface) com as ferramentas Node.js (Express.js, Nest.js), C# (ASP.NET Core) e PHP (Laravel).",
			devops: "Planos para me aprofundar em ferramentas de DevOps como Microsoft Azure, Docker, Kubernetes and workflows.",
			frontend:
				"Desenvolvimento de websites responsivos utilizando Next.js(React .js, TailwindCSS, SASS, Styled Components) e Blazor(Razor Components, Bootstrap).",
		},
		landing:
			"Desenvolvedor de software junior com o objetivo de me estabelecer no campo da tecnologia através da criação e aplicações de alta qualidade. Altamente motivado para expandir meu conhecimento.",
		about: [
			"Olá! Meu nome é Ruan, e sou um desenvolvedor de software, trabalhando para construir uma carreira neste campo. Venho desenvolvendo essa paixão por tecnologia desde os 8 anos e decidi seguir uma carreira como desenvolvedor de software, com o objetivo de avançar na escada profissional neste campo empolgante.",
			"Busco me estabelecer no campo da tecnologia e utilizar meus conhecimentos em desenvolvimento de software para criar aplicações de alta qualidade. Estou altamente motivado para contribuir em projetos desafiadores que agreguem valor ao meu conhecimento e me ajudem a me tornar um profissional completo e indispensável.",
		],
		contact: [
			"Se você olhou para o meu currículo e acha que eu me encaixo no seu projeto, não hesite em entra em contato. Estou disposto a trabalhar em qualquer projeto que me permita obter experiências positivas no campo do desenvolvimento de software.",
		],
	},
	misc: {
		resume: "/resume-portuguese.pdf",
		codeBlock: {
			fields: {
				age: "Idade",
				languages: "Idiomas",
				nationality: "Nacionalidade",
			},
			values: {
				languages: ["Português", "Inglês"],
				nationality: "Brasileiro",
			},
		},
	},
};
