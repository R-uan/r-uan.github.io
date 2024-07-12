import { useAnimationTriggerContext } from "@/app/_contexts/AnimationTriggerContext";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";
import animation from "@/app/animations.module.scss";
import s from "./RightMenu.module.scss";

export default function ScrollTracker() {
	const { animationTriggered } = useAnimationTriggerContext();
	const { ChangeDisplayLanguage, SelectedDisplayLanguage } = useDisplayLanguageContext();

	return (
		<div className={`${s.right_bar} ${!animationTriggered ? animation.side_nav_waiting : animation.side_nav_loaded}`}>
			<ul>
				<div>
					<li className={`${SelectedDisplayLanguage == "en" ? s.current : null}`}>
						<button onClick={() => ChangeDisplayLanguage("en")}>en</button>
					</li>
					<li className={`${SelectedDisplayLanguage == "pt" ? s.current : null}`}>
						<button onClick={() => ChangeDisplayLanguage("pt")}>pt</button>
					</li>
				</div>
				<div>
					<li>
						<a href="https://github.com/R-uan">
							<img src="/social-icons/github.svg" className={s.icons} />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/rpo-lopes/">
							<img src="/social-icons/linkedin.svg" className={s.icons} />
						</a>
					</li>
					<li>
						<a href="mailto:rpo.lopes.dev@gmail.com">
							<img src="/social-icons/mail.svg" className={s.icons} />
						</a>
					</li>
				</div>
			</ul>
		</div>
	);
}
