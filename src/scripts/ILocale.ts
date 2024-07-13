export default interface ILocale {
	header: {
		home: string;
		about: string;
		experience: string;
		contact: string;
		resume: string;
	};

	titles: {
		landing: string;
		about: string;
		technologies: string;
		contact: string;
		areas: {
			title: string;
			frontend: string;
			backend: string;
			devops: string;
		};
	};

	paragraphs: {
		landing: string;
		about: string[];
		contact: string[];
		areas: {
			frontend: string;
			backend: string;
			devops: string;
		};
	};

	misc: {
		resume: string;
		codeBlock: {
			fields: {
				age: string;
				nationality: string;
				languages: string;
			};
			values: {
				nationality: string;
				languages: string[];
			};
		};
	};
}
