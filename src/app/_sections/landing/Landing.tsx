import s from "./Landing.module.scss";
import { CodeBlock } from "@/app/exports";
import { IoIosArrowDown } from "react-icons/io";
import animation from "@/app/animations.module.scss";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";
import { useAnimationTriggerContext } from "@/app/_contexts/AnimationTriggerContext";

export default function Landing() {
	const { animationTriggered } = useAnimationTriggerContext();
	const { DisplayLanguage } = useDisplayLanguageContext();
	return (
		<section id="#landing" className={s.landing}>
			<div className={s.landing_container}>
				<div>
					<div className={!animationTriggered ? animation.text_waiting : animation.text_loaded} style={{ animationDelay: "100ms" }}>
						<h1>Ruan Lopes</h1>
					</div>
					<div className={!animationTriggered ? animation.text_waiting : animation.text_loaded} style={{ animationDelay: "200ms" }}>
						<h1>{DisplayLanguage?.landing.title}</h1>
					</div>
				</div>
				<div className={!animationTriggered ? animation.text_waiting : animation.text_loaded} style={{ animationDelay: "300ms" }}>
					<p>{DisplayLanguage?.landing.introduction}</p>
				</div>
				<div>
					<CodeBlock />
				</div>
			</div>
			<div className={`${s.silly} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}>
				<a href="#about">
					<IoIosArrowDown size={40} fill="white" className={`${s.icon} animate-bounce`} />
				</a>
			</div>
		</section>
	);
}
