import Image from "next/image";
import s from "./Areas.module.scss";
import animation from "../../animations.module.scss";
import { useEffect, useState } from "react";
import { useWindowScrollContext } from "@/app/_contexts/WindowScrollContext";

export default function Areas() {
	const [loaded, setLoadStatus] = useState(false);
	const { scrollPosition } = useWindowScrollContext();
	useEffect(() => {
		if (scrollPosition > 1000 && !loaded) setLoadStatus(true);
	}, [scrollPosition, loaded]);

	return (
		<section className={s.section}>
			<div>
				<h1 className="text-[2rem]">AREAS DE INTERESSE</h1>
			</div>
			<div className={s.body}>
				<div className={`${s.card} ${loaded ? animation.slide_in_bottom : null}`} style={{ animationDelay: "300ms" }}>
					<div className={s.title}>
						<h3>Front-end Development</h3>
					</div>
					<div className={s.description}>
						<p>
							Desenvolvimento de websites responsivos utilizando Next.js(React.js, TailwindCSS, SASS, Styled Components) e Blazor(Razor
							Components, Bootstrap).
						</p>
					</div>
					<div className={s.img}>
						<Image className={s.mg} alt="devops" fill={true} src={"/react.svg"} />
					</div>
				</div>
				<div className={`${s.card} ${loaded ? animation.slide_in_bottom : null}`} style={{ animationDelay: "400ms" }}>
					<div className={s.title}>
						<h3>Back-end Development</h3>
					</div>
					<div className={s.description}>
						<p>
							Foco em desenvolvimento de APIs (Application Programming Interface) com as ferramentas Node.js (Express.js, Nest.js), C#
							(ASP.NET Core) e PHP (Laravel).
						</p>
					</div>
					{/* <div className={s.img}>
						<Image className={s.mg} alt="devops" fill={true} src={"/backend.svg"} />
					</div> */}
				</div>
				<div className={`${s.card} ${loaded ? animation.slide_in_bottom : null}`} style={{ animationDelay: "500ms" }}>
					<div className={s.title}>
						<h3>DevOps Engineer</h3>
					</div>
					<div className={s.description}>
						<p>Planos para me aprofundar em ferramentas de DevOps como Microsoft Azure, Docker, Kubernetes and workflows.</p>
					</div>
					<div className={s.img}>
						<Image className={s.mg} alt="devops" fill={true} src={"/devops.svg"} />
					</div>
				</div>
			</div>
		</section>
	);
}
