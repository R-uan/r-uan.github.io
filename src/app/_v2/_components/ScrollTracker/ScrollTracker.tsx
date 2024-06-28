import s from "./ScrollTracker.module.scss";
import animation from "../../animations.module.scss";
import { useAnimationTriggerContext } from "../../_contexts/AnimationTriggerContext";

// This is a temporary name for the component (hopefully I can think of something better)
export default function ScrollTracker() {
	const { animationTriggered } = useAnimationTriggerContext();
	return (
		<div className={`${s.tracker} ${!animationTriggered ? animation.side_nav_waiting : animation.side_nav_loaded}`}>
			<div>*</div>
			<div>*</div>
			<div>*</div>
			<div>*</div>
		</div>
	);
}
