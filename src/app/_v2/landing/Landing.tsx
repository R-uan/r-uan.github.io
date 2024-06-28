import s from "./Landing.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import animation from "../animations.module.scss";
import { useAnimationTriggerContext } from "../_contexts/AnimationTriggerContext";
import Link from "next/link";

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
						Aspiring software developer aiming to establish myself in the tech field by creating high-quality applications. Highly
						motivated to contribute to challenging projects and enhancing my knowledge
					</p>
				</div>
				<div className={`${s.resume} ${!animationTriggered ? animation.resume_waiting : animation.resume_loaded}`}>
					<Link href={"/resume-portuguese"} target="_blank" className={`${s.shadow_pop_tr} ${s.link}`}>
						<span> My Resume</span>
					</Link>
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
