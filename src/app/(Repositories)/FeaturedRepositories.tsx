import Image from "next/image";
import s from "./FeaturedRepositories.module.scss";
import { Featured_Repositories, Other_Repositories } from "./Repos";

export default function FeaturedRepos() {
	return (
		<section className={s.root}>
			<div className="w-full h-[100px]">
				<span className="text-[2vw] font-bebas text-[#ff003c]">Projects</span>
			</div>
			<div>
				<div className={s.featured}>
					{Featured_Repositories.map((repo) => {
						return (
							<div className={s.featured_repository}>
								<div className={s.top}>
									<div className={s.image}>
										<Image className={s.imagem} alt={repo.name} fill={true} src={repo.image} />
									</div>
									<div className={s.xdd}>
										<div className="w-full">
											<span className={s.title}>{repo.name}</span>
										</div>
										<p className={s.description}>{repo.description}</p>
									</div>
								</div>
								<div className={s.tags}>
									{repo.tags.map((tag) => {
										return <span className={s.tag}>{tag}</span>;
									})}
								</div>
							</div>
						);
					})}
				</div>
				<div className={s.other}>
					{Other_Repositories.map((repo) => {
						return (
							<a target="_blank" href={repo.link}>
								<div className={s.other_repository}>
									<div>
										<span className={s.title}>{repo.name}</span>
										<p className={s.description}>{repo.description}</p>
									</div>
									<div className={s.tags}>
										{repo.tags.map((tag) => {
											return <span className={s.tag}>{tag}</span>;
										})}
									</div>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
