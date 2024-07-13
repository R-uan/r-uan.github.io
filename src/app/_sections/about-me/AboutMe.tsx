"use client";
import Image from "next/image";
import s from "./AboutMe.module.scss";
import { PrimarySkills } from "@/scripts/Skills";
import animation from "@/app/animations.module.scss";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";
import { useWindowScrollContext } from "@/app/_contexts/WindowScrollContext";
import { useEffect, useState } from "react";

export default function About() {
	const [loaded, setLoadStatus] = useState(false);
	const { scrollPosition } = useWindowScrollContext();
	const { DisplayLanguage } = useDisplayLanguageContext();

	useEffect(() => {
		if (scrollPosition > 300 && !loaded) setLoadStatus(true);
	}, [scrollPosition, loaded]);

	return (
		<section id="about" className={`${s.about} ${!loaded ? null : animation.fade_in_bottom}`}>
			<div className={s.about_content}>
				<div className={`${s.about_me}`}>
					<span className="big_text">{DisplayLanguage?.titles.about}</span>
					<div>
						{DisplayLanguage?.paragraphs.about.map((text) => {
							return <p key={text.charAt(2) + "text"}>{text}</p>;
						})}
					</div>
				</div>
				<div className={s.languages}>
					<div>
						<span className="big_text">{DisplayLanguage?.titles.technologies}</span>
					</div>
					<div className={s.skills}>
						{PrimarySkills.map((skill, index) => {
							return (
								<div
									key={skill.name}
									className={`${s.skill} ${animation.slide_in_fwd_center}`}
									style={{ animationDelay: `${index + 100}ms` }}>
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
