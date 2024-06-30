import Link from "next/link";
import { useEffect, useState } from "react";
import s from "./AlternativeHeader.module.scss";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";

export default function AlternativeHeader() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const { DisplayLanguage } = useDisplayLanguageContext();
	const OpenSideMenu = () => (document.getElementById("mobile-menu")!.style.width = "350px");

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
		if (scrollPosition > 300) {
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
			<div>
				<span>hello world</span>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#about">
							<span>01.</span>
							<span>{DisplayLanguage?.heading.about}</span>
						</a>
					</li>
					<li>
						<a href="#projects">
							<span>02.</span>
							<span>{DisplayLanguage?.heading.experience}</span>
						</a>
					</li>
					<li>
						<a href="#contact">
							<span>03.</span>
							<span>{DisplayLanguage?.heading.contact}</span>
						</a>
					</li>
				</ul>
				<div className={s.resume}>
					<Link href={DisplayLanguage?.resume ?? ""} target="_blank" className={`${s.shadow_pop_tr} ${s.link}`}>
						<span>{DisplayLanguage?.heading.resume}</span>
					</Link>
				</div>
			</nav>
		</header>
	);
}
