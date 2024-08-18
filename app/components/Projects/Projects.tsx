import { ProjectList } from "@/app/data/ProjectsList";
import IndividualProject from "../IndividualProject/IndividualProject";
import s from "./Projects.module.scss";

export default function Projects() {
	return (
		<section className={s.projects}>
			<div className="head">
				<h1>PROJECTS</h1>
			</div>
			<div className={s.projects2}>
				{ProjectList.map((project) => {
					return <IndividualProject key={project.title} project={project} />;
				})}
			</div>
		</section>
	);
}
