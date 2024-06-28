import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface IAnimationTriggerContext {
	animationTriggered: boolean;
	setTriggered: React.Dispatch<SetStateAction<boolean>>;
}

export const AnimationTriggerContext = createContext<IAnimationTriggerContext | null>(null);

export default function AnimationTriggerProvider({ children }: { children: ReactNode }) {
	const [animationTriggered, setTriggered] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setTriggered(true);
		}, 1000);
	});

	return <AnimationTriggerContext.Provider value={{ animationTriggered, setTriggered }}>{children}</AnimationTriggerContext.Provider>;
}

export function useAnimationTriggerContext() {
	const context = useContext(AnimationTriggerContext);
	if (context == null) throw new Error("AnimationTriggerContext is null. Fix it!");
	return context;
}
