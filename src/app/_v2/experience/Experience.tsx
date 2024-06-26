import s from "./Experience.module.scss";

export default function Experience() {
	return (
		<section className={s.experience}>
			<div className={s.experience_content}>
				<ul className={s.projects}>
					<li>
						<div className={s.project_content}>
							<div className={s.title}>
								<span>Featured Project</span>
								<h3>Art Gallery Api</h3>
							</div>
							<div className={s.summary}>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi, atque, eaque beatae quod ipsa cupiditate nam
									accusamus non animi numquam facilis pariatur id libero provident labore maxime repudiandae excepturi.
								</p>
							</div>
						</div>
						<div className={s.project_image}></div>
					</li>
					<li>
						<div className={s.project_content}></div>
					</li>
					<li>
						<div className={s.project_content}></div>
					</li>
				</ul>
			</div>
		</section>
	);
}
