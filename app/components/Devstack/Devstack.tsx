import s from "./Devstack.module.scss";

export default function Devstack() {
	return (
		<section className={s.devstack}>
			<div className={s.skills}>
				<div className={s.tech}>
					<ul>
						<li>C#</li>
						<li>Rust</li>
						<li>PHP</li>
						<li>Javascript</li>
						<li>Typescript</li>
					</ul>
				</div>
				<div className={s.tech}>
					<ul>
						<li>ASP.NET Core</li>
						<li>NextJS</li>
						<li>ReactJS</li>
						<li>TailwindCSS</li>
					</ul>
				</div>
				<div className={s.tech}>
					<ul>
						<li>Git</li>
						<li>Github</li>
						<li>gRPC</li>
						<li>RabbitMQ</li>
					</ul>
				</div>
				<div className={s.tech}>
					<ul>
						<li>PostgreSQL</li>
						<li>MongoDB</li>
						<li>Redis</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
