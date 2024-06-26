"use client";
import Image from "next/image";
import s from "./AboutMe.module.scss";
import { PrimarySkills } from "../../_scripts/Skills";

export default function About() {
	return (
		<section className={s.about}>
			<div className={s.about_content}>
				<div className={s.about_me}>
					<span>ABOUT ME</span>
					<div>
						<p>
							I&apos;m a 21 years old Brazilian eager to start my career on the area of web development. I&apos;m looking forward to
							apply my knowledge in a real enviroment to create amazing applications. Being able to hyperfocus on tasks and being quick
							to learn new technology, I guarantee that I am able to find my way toward solving any given problem and successfuly
							completing any given task.
						</p>
						<p>
							I&apos;m a 21 years old Brazilian eager to start my career on the area of web development. I&apos;m looking forward to
							apply my knowledge in a real enviroment to create amazing applications. Being able to hyperfocus on tasks and being quick
							to learn new technology, I guarantee that I am able to find my way toward solving any given problem and successfuly
							completing any given task.
						</p>
					</div>
				</div>
				<div className={s.languages}>
					<span>TECHNOLOGIES</span>
					<div className={s.skills}>
						{PrimarySkills.map((skill) => {
							return (
								<div key={skill.name} className={s.skill}>
									{" "}
									<Image className={s.icon} alt={`${skill.name} icon`} src={skill.icon} width={60} height={60} />
									<span className="text-white">{skill.name}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
