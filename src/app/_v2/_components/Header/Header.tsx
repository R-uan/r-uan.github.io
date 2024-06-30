import s from "./Header.module.scss";
import animation from "../../animations.module.scss";
import { useAnimationTriggerContext } from "../../_contexts/AnimationTriggerContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const { animationTriggered } = useAnimationTriggerContext();
	const OpenSideMenu = () => (document.getElementById("mobile-menu")!.style.width = "300px");

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

	return (
		<header className={s.header}>
			<div className={s.mobile_menu_toggle}>
				<button onClick={OpenSideMenu}>Open</button>
			</div>
			<div className={`${!animationTriggered ? animation.nav_waiting : animation.bounce_in_top}`} style={{ animationDelay: "2s" }}>
				<span>hello world</span>
			</div>
			<nav>
				<ul>
					<li className={!animationTriggered ? animation.nav_waiting : animation.nav_loaded} style={{ animationDelay: "100ms" }}>
						<a href="#about">
							<span>01.</span>
							<span>About</span>
						</a>
					</li>
					<li className={!animationTriggered ? animation.nav_waiting : animation.nav_loaded} style={{ animationDelay: "250ms" }}>
						<a href="#projects">
							<span>02.</span>
							<span>Projects</span>
						</a>
					</li>
					<li className={!animationTriggered ? animation.nav_waiting : animation.nav_loaded} style={{ animationDelay: "400ms" }}>
						<a href="#contact">
							<span>03.</span>
							<span>Contact</span>
						</a>
					</li>
				</ul>
				<div
					className={`${s.resume} ${!animationTriggered ? animation.nav_waiting : animation.nav_loaded}`}
					style={{ animationDelay: "550ms" }}>
					<Link href={"/resume-portuguese"} target="_blank" className={`${s.shadow_pop_tr} ${s.link}`}>
						<span> My Resume</span>
					</Link>
				</div>
			</nav>
		</header>
	);
}
