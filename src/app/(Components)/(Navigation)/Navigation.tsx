import { FaGithub } from "react-icons/fa";
import { NavigationStyled } from "./NavigationStyled";

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
				<div className="github">
					<FaGithub />
				</div>
			</div>
		</NavigationStyled>
	);
}
