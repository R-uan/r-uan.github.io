import s from "./Landing.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import animation from "../animations.module.scss";
import { useAnimationTriggerContext } from "../_contexts/AnimationTriggerContext";

export default function Landing() {
	const { animationTriggered } = useAnimationTriggerContext();
	return (
		<section id="#landing" className={s.landing}>
			<div className={s.landing_container}>
				<div>
					<div className={!animationTriggered ? animation.text_waiting : animation.text_loaded} style={{ animationDelay: "100ms" }}>
						<h1>Ruan Lopes</h1>
					</div>
					<div className={!animationTriggered ? animation.text_waiting : animation.text_loaded} style={{ animationDelay: "200ms" }}>
						<h1>Full-stack web developer.</h1>
					</div>
				</div>
				<div className={!animationTriggered ? animation.text_waiting : animation.text_loaded} style={{ animationDelay: "300ms" }}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur debitis, eligendi quibusdam non, reiciendis nemo nostrum
						enim quo ipsum eius expedita hic. Saepe velit ipsa ut consequatur quam soluta?
					</p>
				</div>
				<div className={`${s.resume} ${!animationTriggered ? animation.resume_waiting : animation.resume_loaded}`}>
					<button className={s.shadow_pop_tr}>My Resume</button>
				</div>
			</div>
			<div className={`${s.silly} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}>
				<button>
					<IoIosArrowDown size={40} fill="white" className={`${s.icon} animate-bounce`} />
				</button>
			</div>
		</section>
	);
}
