import Image from "next/image";
import s from "./Projects.module.scss";
import { FaGithub } from "react-icons/fa6";
import { MyProjects } from "@/scripts/MyProjects";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
	return (
		<section id="projects" className={s.section}>
			<div className={s.projects}>
				<div>
					<h1>Stuff I have Done</h1>
				</div>
				<ul className={s.projects_list}>
					{MyProjects.map((project) => {
						return (
							<li key={project.title}>
								<div className={s.single_project_body}>
									<div className={s.project_title}>
										<span>Featured Project</span>
										<h3>{project.title}</h3>
									</div>
									<div className={s.project_sumary}>
										<p>{project.description}</p>
									</div>
									<div className={s.project_stack}>
										<ul>
											{project.tags.map((tag) => {
												return <li key={tag}>{tag}</li>;
											})}
										</ul>
									</div>
									<div className={s.project_links}>
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
									<Image alt="" fill={true} src={project.image}></Image>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
