import { ProjectList } from "@/app/data/ProjectsList";
import IndividualProject from "../IndividualProject/IndividualProject";
import { ProjectsStyled } from "./ProjectsStyled";

export default function Projects() {
	return (
		<ProjectsStyled>
			<div className="head">
				<h1>PROJECTS</h1>
			</div>
			<div className="projects">
				{ProjectList.map((project) => {
					return <IndividualProject key={project.title} project={project} />;
				})}
			</div>
		</ProjectsStyled>
	);
}
