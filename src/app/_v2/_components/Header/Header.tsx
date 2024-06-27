import s from "./Header.module.scss";
import animation from "../../animations.module.scss";
import { useAnimationTriggerContext } from "../../_contexts/AnimationTriggerContext";
import { useEffect, useState } from "react";

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
		<header className={`${s.header} ${scrollPosition > 100 ? s.alternative_header : null}`}>
			<div className={s.mobile_menu_toggle}>
				<button onClick={OpenSideMenu}>Open</button>
			</div>
			<div>
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
					<li className={!animationTriggered ? animation.nav_waiting : animation.nav_loaded} style={{ animationDelay: "200ms" }}>
						<a href="#projects">
							<span>02.</span>
							<span>Projects</span>
						</a>
					</li>
					<li className={!animationTriggered ? animation.nav_waiting : animation.nav_loaded} style={{ animationDelay: "300ms" }}>
						<span>03.</span>
						<span>Contact</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}
