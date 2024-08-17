import IExperience from "@/app/interfaces/IExperience";
import { IndividualExperienceStyled } from "./IndividualExperienceStyled";

export default function IndividualExperience({ experience }: { experience: IExperience }) {
	const { description, from, location, position, to } = experience;
	return (
		<IndividualExperienceStyled>
			<div className="period">
				<span>{from}</span>
				<span className="separator"></span>
				<span>{to}</span>
			</div>
			<div className="summary">
				<div className="title">
					<span>
						{position} · <span>{location}</span>
					</span>
				</div>
				<p>{description}</p>
			</div>
		</IndividualExperienceStyled>
	);
}
