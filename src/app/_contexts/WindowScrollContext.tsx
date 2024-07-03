import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface IWindowScrollContext {
	scrollPosition: number;
	setScrollPosition: React.Dispatch<SetStateAction<number>> | null;
}

const WindowScrollContext = createContext<IWindowScrollContext | null>(null);

export default function WindowScrollProvider({ children }: { children: ReactNode }) {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	function HandleScroll() {
		const position = window.scrollY;
		setScrollPosition(position);
	}

	useEffect(() => {
		window.addEventListener("scroll", HandleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", HandleScroll);
		};
	}, []);

	return <WindowScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>{children}</WindowScrollContext.Provider>;
}

export function useWindowScrollContext() {
	const context = useContext(WindowScrollContext);
	if (context == null) throw new Error("Window Scroll Context is null. Fix it.");
	return context;
}
