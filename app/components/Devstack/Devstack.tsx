import Image from "next/image";
import { useState } from "react";
import { DevstackStyled } from "./DevstackStyled";
import { DevstackList } from "@/app/data/DevstackList";

export default function Devstack() {
	const [hover, setHover] = useState<string>("");

	const onHover = (name: string) => setHover(name);
	const onUnhover = () => setHover("");

	return (
		<DevstackStyled>
			<div className="skills">
				{/* {DevstackList.map((skill, index) => {
					return (
						<div key={skill.name} className="skill" onMouseEnter={() => onHover(skill.name)} onMouseLeave={() => onUnhover()}>
							<Image className="icon" alt={`${skill.name} icon`} src={skill.icon} width={60} height={60} />
						</div>
					);
				})} */}
				<div className="tech">
					<ul>
						<li>C#</li>
						<li>Javascript</li>
						<li>Typescript</li>
						<li>HTML</li>
						<li>CSS</li>
					</ul>
				</div>
				<div className="tech">
					<ul>
						<li>ASP.NET Core</li>
						<li>NextJS</li>
						<li>ReactJS</li>
						<li>TailwindCSS</li>
					</ul>
				</div>
				<div className="tech">
					<ul>
						<li>PostgreSQL</li>
						<li>MongoDB</li>
						<li>Redis</li>
					</ul>
				</div>
				<div className="tech">
					<ul>
						<li>Git</li>
						<li>Github</li>
						<li>NodeJS</li>
					</ul>
				</div>
			</div>
		</DevstackStyled>
	);
}
