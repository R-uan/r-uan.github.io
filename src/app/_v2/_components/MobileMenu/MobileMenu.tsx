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
							<span>01.</span>
							<span>Home</span>
						</li>
						<li>
							<span>02.</span>
							<span>About</span>
						</li>
						<li>
							<span>03.</span>
							<span>Experience</span>
						</li>
						<li>
							<span>04.</span>
							<span>Contact</span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
