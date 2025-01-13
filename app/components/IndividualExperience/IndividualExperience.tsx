import IExperience from "@/app/interfaces/IExperience";
import s from "./IndExperience.module.scss";

export default function IndividualExperience({ experience }: { experience: IExperience }) {
	const { description, from, location, position, to } = experience;
	return (
		<section className={s.indexperience}>
			<div className={s.period}>
				<span>{from}</span>
				<span>-</span>
				<span>{to}</span>
			</div>
			<div className={s.summary}>
				<div className={s.title}>
					<span>
						{position} · <span>{location}</span>
					</span>
				</div>
				<p>{description}</p>
			</div>
		</section>
	);
}
