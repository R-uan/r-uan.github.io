import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import ILocale from "../../scripts/ILocale";

interface IDisplayLanguageContext {
	SelectedDisplayLanguage: string;
	DisplayLanguage: ILocale | null;
	SetDisplayLanguage: React.Dispatch<SetStateAction<ILocale | null>>;
	ChangeDisplayLanguage: (language: string) => void;
}
const DisplayLanguageContext = createContext<IDisplayLanguageContext | null>(null);

export default function DisplayLanguageProvider({ children }: { children: ReactNode }) {
	const [SelectedDisplayLanguage, SetSelectedDisplayLanguage] = useState<string>("en");
	const [DisplayLanguage, SetDisplayLanguage] = useState<ILocale | null>(null);
	const locales = {
		en: () => import("@/app/locales/en.json").then((module) => module.default),
		pt: () => import("@/app/locales/pt.json").then((module) => module.default),
	};

	async function VerifyLanguageChoice() {
		const language = localStorage.getItem("language");
		if (language == "pt") {
			const pt: ILocale = await locales.pt();
			SetDisplayLanguage(pt);
		} else {
			const en: ILocale = await locales.en();
			SetDisplayLanguage(en);
		}
	}

	const ChangeDisplayLanguage = (language: string) => {
		localStorage.setItem("language", language);
		SetSelectedDisplayLanguage(language);
	};

	useEffect(() => {
		VerifyLanguageChoice();
	}, [SelectedDisplayLanguage, VerifyLanguageChoice]);

	return (
		<DisplayLanguageContext.Provider value={{ DisplayLanguage, SelectedDisplayLanguage, SetDisplayLanguage, ChangeDisplayLanguage }}>
			{children}
		</DisplayLanguageContext.Provider>
	);
}

export const useDisplayLanguageContext = () => {
	const context = useContext(DisplayLanguageContext);
	if (context == null) throw new Error("Display language context not found.");
	return context;
};
