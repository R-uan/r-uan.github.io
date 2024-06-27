import s from "./Projects.module.scss";
import { MyProjects } from "./MyProjects";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
	return (
		<section id="projects" className={s.projects}>
			<div className={s.projects_content}>
				<div>
					<h1>Stuff I've Done</h1>
				</div>
				<ul className={s.projects}>
					{MyProjects.map((project) => {
						return (
							<li key={project.title}>
								<div className={s.project_content}>
									<div className={s.title}>
										<span>Featured Project</span>
										<h3>{project.title}</h3>
									</div>
									<div className={s.summary}>
										<p>{project.description}</p>
									</div>
									<div className={s.stack}>
										<ul>
											{project.tags.map((tag) => {
												return <li key={tag}>{tag}</li>;
											})}
										</ul>
									</div>
									<div className={s.links}>
										<ul>
											<li>
												<a href={project.links.github}>
													<FaGithub className={s.icon} />
												</a>
											</li>
											{project.links.url ? (
												<li>
													<a href={project.links.url}>
														<FaExternalLinkAlt className={s.icon} />
													</a>
												</li>
											) : null}
										</ul>
									</div>
								</div>
								<div className={s.project_image}>
									<div className={s.cover} />
									<img alt="" src="/tes.jpeg"></img>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
