import Link from "next/link";
import { useEffect } from "react";
import s from "./AlternativeHeader.module.scss";
import { useWindowScrollContext } from "@/app/_contexts/WindowScrollContext";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function AlternativeHeader() {
	const { scrollPosition } = useWindowScrollContext();
	const { DisplayLanguage } = useDisplayLanguageContext();
	const OpenSideMenu = () => (document.getElementById("mobile-menu")!.style.width = "350px");

	useEffect(() => {
		if (scrollPosition > 300) {
			document.getElementById("alternative-header")!.style.height = "70px";
		} else {
			document.getElementById("alternative-header")!.style.height = "0";
		}
	}, [scrollPosition]);

	return (
		<header id="alternative-header" className={s.header}>
			<div className={s.mobile_menu_toggle}>
				<button onClick={OpenSideMenu}>
					<HiOutlineMenuAlt2 />
				</button>
			</div>
			<div>
				<span>hello world</span>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#about">
							<span>01.</span>
							<span>{DisplayLanguage?.header.about}</span>
						</a>
					</li>
					<li>
						<a href="#projects">
							<span>02.</span>
							<span>{DisplayLanguage?.header.experience}</span>
						</a>
					</li>
					<li>
						<a href="#contact">
							<span>03.</span>
							<span>{DisplayLanguage?.header.contact}</span>
						</a>
					</li>
				</ul>
				<div className={s.resume}>
					<Link href={DisplayLanguage?.misc.resume ?? ""} target="_blank" className={`${s.shadow_pop_tr} ${s.link}`}>
						<span>{DisplayLanguage?.header.resume}</span>
					</Link>
				</div>
			</nav>
		</header>
	);
}
