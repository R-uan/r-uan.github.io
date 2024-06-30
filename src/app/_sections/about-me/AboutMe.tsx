"use client";
import Image from "next/image";
import s from "./AboutMe.module.scss";
import { PrimarySkills } from "@/scripts/Skills";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";

export default function About() {
	const { DisplayLanguage } = useDisplayLanguageContext();

	return (
		<section id="about" className={s.about}>
			<div className={s.about_content}>
				<div className={s.about_me}>
					<span>{DisplayLanguage?.about.fields.about_me}</span>
					<div>
						{DisplayLanguage?.about.values.aboutMe.map((text) => {
							return <p>{text}</p>;
						})}
					</div>
				</div>
				<div className={s.languages}>
					<div>
						<span>{DisplayLanguage?.about.fields.technologies}</span>
					</div>
					<div className={s.skills}>
						{PrimarySkills.map((skill) => {
							return (
								<div key={skill.name} className={s.skill}>
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
