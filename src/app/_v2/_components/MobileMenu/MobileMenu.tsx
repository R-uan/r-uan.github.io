import Link from "next/link";
import s from "./MobileMenu.module.scss";
import { IoCloseSharp } from "react-icons/io5";

export default function MobileMenu() {
	const CloseMenu = () => {
		document.getElementById("mobile-menu")!.style.width = "0px";
	};
	return (
		<div id="mobile-menu" className={s.menu}>
			<div className={s.menu_header}>
				<div></div>
				<div className="h-[40px]">
					<button onClick={CloseMenu}>
						<IoCloseSharp fill="white" className="h-fit leading-snug" size={40} />
					</button>
				</div>
			</div>
			<div className={s.menu_content}>
				<nav>
					<ul>
						<li>
							<a href="#landing">
								<span>01.</span>
								<span>Home</span>
							</a>
						</li>
						<li>
							<a href="#about">
								<span>02.</span>
								<span>About</span>
							</a>
						</li>
						<li>
							<a href="#projects">
								<span>03.</span>
								<span>Experience</span>
							</a>
						</li>
						<li>
							<a href="#contact">
								<span>04.</span>
								<span>Contact</span>
							</a>
						</li>
					</ul>
					<div className={s.resume}>
						<Link className={s.link} href={"/resume-portuguese"}>
							<span>My Resume</span>
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
}
