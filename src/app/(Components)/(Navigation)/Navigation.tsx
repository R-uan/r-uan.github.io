import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavigationStyled } from "./NavigationStyled";
import { socials } from "@/app/Socials";
import { LiaLinkedin } from "react-icons/lia";

export default function Navigation() {
	return (
		<NavigationStyled>
			<div>
				<span>$ruan_lopes</span>
			</div>
			<div>
				<ul>
					<li>// home</li>
					<li>// repositories</li>
					<li>// about me</li>
					<li>// contact</li>
				</ul>
			</div>
			<div>
				<a href={socials.github} target="_blank" className="icon">
					<FaGithub />
				</a>
				<a href={socials.linkedin} target="_blank" className="icon">
					<FaLinkedin />
				</a>
			</div>
		</NavigationStyled>
	);
}
