import s from "./AboutMe.module.scss";
import { FaServer } from "react-icons/fa";
export default function AboutMe() {
	return (
		<section className={s.about_me}>
			<div className={s.about_me_content}>
				<div className={s.professional_profile}>
					<div>
						<div className={s.skill_header}>
							<div className={s.icon}>
								<FaServer className={s.ricon} />
							</div>
							<h3>
								<span>Back-end</span>
								<br />
								<span>Development</span>
							</h3>
						</div>
						<div className={s.icons}>
							<img src="/skills-icon/csharp.svg" alt="" />
							<img src="/skills-icon/php.svg" alt="" />
							<img src="/skills-icon/nodejs.svg" alt="" />
							<img src="/skills-icon/postgresql.svg" alt="" />
							<img src="/skills-icon/mongodb.svg" alt="" />
						</div>
						<div className={s.skill_body}>
							<p>
								Experience creating scalable APIs using multiple languages, databases and frameworks, such as: C# (ASP.NET Core), Java
								(Spring Boot), PHP(Laravel), NodeJS(Express, NestJS).
							</p>
						</div>
					</div>
					<div></div>
					<div></div>
				</div>
			</div>
		</section>
	);
}
