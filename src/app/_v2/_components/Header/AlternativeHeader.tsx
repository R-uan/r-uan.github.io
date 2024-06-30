import Link from "next/link";
import s from "./AlternativeHeader.module.scss";
import { useEffect, useState } from "react";

export default function AlternativeHeader() {
	const OpenSideMenu = () => (document.getElementById("mobile-menu")!.style.width = "300px");
	const [scrollPosition, setScrollPosition] = useState(0);

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

	useEffect(() => {
		if (scrollPosition > 200) {
			document.getElementById("alternative-header")!.style.height = "80px";
		} else {
			document.getElementById("alternative-header")!.style.height = "0";
		}
	}, [scrollPosition]);

	return (
		<header id="alternative-header" className={s.header}>
			<div className={s.mobile_menu_toggle}>
				<button onClick={OpenSideMenu}>Open</button>
			</div>
			<div style={{ animationDelay: "2s" }}>
				<span>hello world</span>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#about">
							<span>01.</span>
							<span>About</span>
						</a>
					</li>
					<li>
						<a href="#projects">
							<span>02.</span>
							<span>Projects</span>
						</a>
					</li>
					<li>
						<a href="#contact">
							<span>03.</span>
							<span>Contact</span>
						</a>
					</li>
				</ul>
				<div className={s.resume}>
					<Link href={"/resume-portuguese"} target="_blank" className={`${s.shadow_pop_tr} ${s.link}`}>
						<span> My Resume</span>
					</Link>
				</div>
			</nav>{" "}
		</header>
	);
}
