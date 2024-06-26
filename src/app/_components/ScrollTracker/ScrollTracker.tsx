import s from "./ScrollTracker.module.scss";
import animation from "@/app/animations.module.scss";
import { useAnimationTriggerContext } from "@/app/_contexts/AnimationTriggerContext";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";

// This is a temporary name for the component (hopefully I can think of something better)
export default function ScrollTracker() {
	const { animationTriggered } = useAnimationTriggerContext();
	const { ChangeDisplayLanguage } = useDisplayLanguageContext();
	return (
		<div className={`${s.tracker} ${!animationTriggered ? animation.side_nav_waiting : animation.side_nav_loaded}`}>
			<div>
				<button onClick={() => ChangeDisplayLanguage("en")}>en</button>
			</div>
			<div>
				<button onClick={() => ChangeDisplayLanguage("pt")}>pt</button>
			</div>
			<div>*</div>
			<div>*</div>
			<div>*</div>
		</div>
	);
}
