import { ExperienceList } from "@/app/data/ExperienceList";
import IndividualExperience from "../IndividualExperience/IndividualExperience";
import s from "./Experience.module.scss";

export default function Experience() {
	return (
		<section className={s.experience}>
			<div className="head">
				<h1>EXPERIENCE</h1>
			</div>
			<div className={s.experiences}>
				{ExperienceList.map((ex) => {
					return <IndividualExperience key={ex.position} experience={ex} />;
				})}
			</div>
		</section>
	);
}
