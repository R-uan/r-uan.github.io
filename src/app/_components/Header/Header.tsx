import Link from "next/link";
import s from "./Header.module.scss";
import animation from "@/app/animations.module.scss";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";
import { useAnimationTriggerContext } from "@/app/_contexts/AnimationTriggerContext";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Header() {
	const { DisplayLanguage } = useDisplayLanguageContext();
	const { animationTriggered } = useAnimationTriggerContext();
	const OpenSideMenu = () => (document.getElementById("mobile-menu")!.style.width = "300px");

	return (
		<header className={s.header}>
			<div className={s.mobile_menu_toggle}>
				<button onClick={OpenSideMenu}>
					<HiOutlineMenuAlt2 size={30} />
				</button>
			</div>
			<div className={`${s.logo} ${!animationTriggered ? animation.nav_waiting : animation.bounce_in_top}`} style={{ animationDelay: "2s" }}>
				<span>hello world</span>
			</div>
			<nav>
				<ul>
					<li className={!animationTriggered ? animation.nav_waiting : animation.nav_loaded} style={{ animationDelay: "100ms" }}>
						<a href="#about">
							<span>01.</span>
							<span>{DisplayLanguage?.heading.about}</span>
						</a>
					</li>
					<li className={!animationTriggered ? animation.nav_waiting : animation.nav_loaded} style={{ animationDelay: "250ms" }}>
						<a href="#projects">
							<span>02.</span>
							<span>{DisplayLanguage?.heading.experience}</span>
						</a>
					</li>
					<li className={!animationTriggered ? animation.nav_waiting : animation.nav_loaded} style={{ animationDelay: "400ms" }}>
						<a href="#contact">
							<span>03.</span>
							<span>{DisplayLanguage?.heading.contact}</span>
						</a>
					</li>
				</ul>
				<div
					className={`${s.resume} ${!animationTriggered ? animation.nav_waiting : animation.nav_loaded}`}
					style={{ animationDelay: "550ms" }}>
					<Link href={DisplayLanguage?.resume ?? ""} target="_blank" className={`${s.shadow_pop_tr} ${s.link}`}>
						<span>{DisplayLanguage?.heading.resume}</span>
					</Link>
				</div>
			</nav>
		</header>
	);
}
