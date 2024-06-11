import { socials } from "@/app/Socials";
import s from "./Navigation.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation() {
	return (
		<nav className={s.navigation}>
			<div>
				<span>$ruan_lopes</span>
			</div>
			<div>
				<a href={socials.github} aria-label="github" target="_blank" className={s.icon}>
					<FaGithub />
				</a>
				<a href={socials.linkedin} aria-label="linkedin" target="_blank" className={s.icon}>
					<FaLinkedin />
				</a>
			</div>
		</nav>
	);
}
