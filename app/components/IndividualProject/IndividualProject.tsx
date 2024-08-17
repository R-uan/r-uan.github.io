import IProject from "@/app/interfaces/IProject";
import { IndividualProjectStyled } from "./IndividualProjectStyled";
import Image from "next/image";
import Link from "next/link";

export default function IndividualProject({ project }: { project: IProject }) {
	const { title, description, stack, image, url } = project;
	return (
		<IndividualProjectStyled>
			<a href={url} className="external"></a>
			<div className="image">
				<Image className="image" fill={true} src={image} alt={title} />
			</div>
			<div className="summary">
				<div className="title">
					<h1>{title}</h1>
					<Image src="/external.svg" alt="external" width={20} height={20} />
				</div>
				<div className="description">
					<p>{description}</p>
				</div>
				<div className="stack">
					<ul>
						{stack.map((tech) => {
							return <li key={tech}>{tech}</li>;
						})}
					</ul>
				</div>
			</div>
		</IndividualProjectStyled>
	);
}
