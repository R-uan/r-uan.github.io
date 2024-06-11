"use client";
import Image from "next/image";
import s from "./About.module.scss";
import { PrimarySkills } from "./Skills";
import { useState } from "react";

export default function About() {
	const [tooltip, setToolTip] = useState<null | string>();
	return (
		<section className={s.about}>
			<div className={s.about_me}>
				<span>About Me</span>
				<p>
					I'm a 21 years old Brazilian eager to start my career on the area of web development. I'm looking forward to apply my knowledge in
					a real enviroment to create amazing applications. Being able to hyperfocus on tasks and being quick to learn new technology, I
					guarantee that I am able to find my way toward solving any given problem and successfuly completing any given task.
				</p>
			</div>
			<div className={s.languages}>
				<span>Languages and Frameworks</span>
				<div className={s.skills}>
					{PrimarySkills.map((skill) => {
						return (
							<div
								key={skill.name}
								className={s.skill}
								onMouseEnter={() => setToolTip(skill.description)}
								onMouseLeave={() => setToolTip(null)}>
								<Image className={s.icon} alt={`${skill.name} icon`} src={skill.icon} width={60} height={60} />
								<span className="text-white">{skill.name}</span>
							</div>
						);
					})}
				</div>
				<div className={s.tooltip}>
					<span>{tooltip ?? null}</span>
				</div>
			</div>
		</section>
	);
}
