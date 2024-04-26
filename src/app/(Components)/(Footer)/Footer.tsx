import { socials } from "@/app/Socials";
import s from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={s.footer}>
			<div>
				<span>Designed && Developed by</span>
				<span>Ruan Lopes - 2024</span>
			</div>
			<div>
				<ul>
					<a href={socials.github}>
						<li>Github</li>
					</a>
					<a href={socials.linkedin}>
						<li>Linkedin</li>
					</a>
					<a href={socials.steam}>
						<li>Steam</li>
					</a>
				</ul>
			</div>
		</footer>
	);
}
