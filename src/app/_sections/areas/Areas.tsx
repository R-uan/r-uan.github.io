import Image from "next/image";
import s from "./Areas.module.scss";
import animation from "../../animations.module.scss";
import { useEffect, useState } from "react";
import { useWindowScrollContext } from "@/app/_contexts/WindowScrollContext";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";

export default function Areas() {
	const [loaded, setLoadStatus] = useState(false);
	const { scrollPosition } = useWindowScrollContext();
	const { DisplayLanguage } = useDisplayLanguageContext();

	useEffect(() => {
		if (scrollPosition > 1000 && !loaded) setLoadStatus(true);
	}, [scrollPosition, loaded]);

	return (
		<section className={s.section}>
			<div>
				<span className="big_text">{DisplayLanguage?.titles.areas.title}</span>
			</div>
			<div className={s.body}>
				<div className={`${s.card} ${loaded ? animation.slide_in_bottom : null}`} style={{ animationDelay: "300ms" }}>
					<div className={s.img}>
						<Image className={s.mg} alt="devops" fill={true} src={"/react.svg"} />
					</div>
					<div className={s.title}>
						<h3>{DisplayLanguage?.titles.areas.frontend}</h3>
					</div>
					<div className={s.description}>
						<p>{DisplayLanguage?.paragraphs.areas.frontend} </p>
					</div>
				</div>
				<div className={`${s.card} ${loaded ? animation.slide_in_bottom : null}`} style={{ animationDelay: "400ms" }}>
					<div className={s.img}>
						<Image className={s.mg} alt="devops" fill={true} src={"/backend.svg"} />
					</div>
					<div className={s.title}>
						<h3>{DisplayLanguage?.titles.areas.backend}</h3>
					</div>
					<div className={s.description}>
						<p>{DisplayLanguage?.paragraphs.areas.backend} </p>
					</div>
				</div>
				<div className={`${s.card} ${loaded ? animation.slide_in_bottom : null}`} style={{ animationDelay: "500ms" }}>
					<div className={s.img}>
						<Image className={s.mg} alt="devops" fill={true} src={"/devops.svg"} />
					</div>
					<div className={s.title}>
						<h3>{DisplayLanguage?.titles.areas.devops}</h3>
					</div>
					<div className={s.description}>
						<p>{DisplayLanguage?.paragraphs.areas.devops}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
