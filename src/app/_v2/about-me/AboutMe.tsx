"use client";
import Image from "next/image";
import s from "./AboutMe.module.scss";
import { PrimarySkills } from "../../_scripts/Skills";

export default function About() {
	return (
		<section id="about" className={s.about}>
			<div className={s.about_content}>
				<div className={s.about_me}>
					<span>ABOUT ME</span>
					<div>
						<p>
							Hi! My name is Ruan, and I am an aspiring software developer working towards a career in the field. My journey with
							technology began when I was 8 years old, and since then, it has been an integral part of my daily life, contributing
							significantly to my personal and educational development. Naturally, I found myself passionate about technology and
							decided to pursue a career as a software developer, aiming to climb the professional ladder in this exciting field.
						</p>
						<p>
							I seek to establish myself in the technology field and utilize my experience in software development to create
							high-quality applications. I am highly motivated to contribute to challenging projects that add value to my knowledge and
							help me become a well-rounded and indispensable professional.
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
