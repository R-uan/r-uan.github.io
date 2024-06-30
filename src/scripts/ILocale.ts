export default interface ILocale {
	heading: {
		home: string;
		about: string;
		experience: string;
		contact: string;
		resume: string;
	};
	landing: {
		title: string;
		introduction: string;
		codeBlock: {
			fields: {
				age: string;
				nationality: string;
				languages: string;
			};
			values: { nationality: string; languages: string[] };
		};
	};
	about: {
		fields: {
			about_me: string;
			technologies: string;
		};
		values: {
			aboutMe: string[];
		};
	};
	resume: string;
	contact: {
		title: string;
		value: string;
	};
}
