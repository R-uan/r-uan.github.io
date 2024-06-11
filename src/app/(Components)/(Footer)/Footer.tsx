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
					<li>
						<a href={socials.github}>Github</a>
					</li>
					<li>
						<a href={socials.linkedin}>Linkedin</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
