import Devstack from "../Devstack/Devstack";
import s from "./About.module.scss";

export default function About() {
	return (
		<section className={s.about}>
			<div className="head">
				<h1>ABOUT</h1>
			</div>
			<div className={s.content}>
				<p>
					Hello! I am Ruan, a dedicated software developer with a robust background in backend development. My expertise spans a diverse
					tech stack, including <b>ASP.NET Core</b>, <b>Node.js</b>, and <b>Next.js</b>. Currently, I am focused on creating a standout
					personal portfolio website while diving into new technologies like <b>Lua</b> and <b>C++</b>
				</p>
				<p>
					My experience, though heavily rooted in web development, fuels my eagerness to branch into other areas of software development.
					Whether it&#39;s low-level programming, data analysis, or machine learning, I am committed to expanding my skill set and embracing
					innovative technologies.
				</p>
				<p>
					I am passionate about leveraging my technical abilities to tackle complex challenges and drive impactful projects. Let&#39;s
					connect if you are looking for someone with a strong foundation, a drive to explore new fields, and a genuine enthusiasm for
					technology!
				</p>
			</div>
			<Devstack />
		</section>
	);
}
