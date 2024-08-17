import { ExperienceStyled } from "./ExperienceStyled";
import { ExperienceList } from "@/app/data/ExperienceList";
import IndividualExperience from "../IndividualExperience/IndividualExperience";

export default function Experience() {
	return (
		<ExperienceStyled>
			<div className="head">
				<h1>EXPERIENCE</h1>
			</div>
			<div className="experiences">
				{ExperienceList.map((ex) => {
					return <IndividualExperience key={ex.position} experience={ex} />;
				})}
			</div>
		</ExperienceStyled>
	);
}
