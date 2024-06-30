import s from "./CodeBlock.module.scss";
import animation from "@/app/animations.module.scss";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";
import { useAnimationTriggerContext } from "@/app/_contexts/AnimationTriggerContext";
export default function CodeBlock() {
	function Age() {
		var today = new Date();
		var birthDate = new Date("2002-06-17");
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
		return age;
	}
	const { animationTriggered } = useAnimationTriggerContext();
	const { DisplayLanguage } = useDisplayLanguageContext();

	return (
		<div className={s.personal_information}>
			<div>
				<div
					className={`${s.code} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}
					style={{ animationDelay: "600ms" }}>
					<span className={s.keyword}>int</span>
					<span className={s.variable}>{DisplayLanguage?.landing.codeBlock.fields.age}</span>
					<span className="text-white">=</span>
					<span className="text-[#AFC7A3]">{Age()};</span>
				</div>
			</div>
			<div>
				<div
					className={`${s.code} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}
					style={{ animationDelay: "700ms" }}>
					<span className={s.keyword}>string</span>
					<span className={s.variable}>{DisplayLanguage?.landing.codeBlock.fields.nationality}</span>
					<span className="text-white">=</span>
					<span className={s.string}>&quot;{DisplayLanguage?.landing.codeBlock.values.nationality}&quot;</span>
					<span className="text-white">;</span>
				</div>
			</div>
			<div>
				<div
					className={`${s.code} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}
					style={{ animationDelay: "800ms" }}>
					<span className={s.keyword}>string</span>
					<span className={s.variable}>email</span>
					<span className="text-white">=</span>
					<span className={s.string}>&quot;rpo.lopes.dev@gmail.com&quot;</span>
					<span className="text-white">;</span>
				</div>
			</div>
			<div>
				<div
					className={`${s.code} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}
					style={{ animationDelay: "900ms" }}>
					<span className={s.keyword}>string</span>
					<span className={s.variable}>github</span>
					<span className="text-white">=</span>
					<span className={s.string}>
						<a target="_blank" href="https://github.com/R-uan">
							&quot;https://github.com/R-uan&quot;
						</a>
					</span>
					<span className="text-white">;</span>
				</div>
			</div>
			<div>
				<div
					className={`${s.code} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}
					style={{ animationDelay: "1000ms" }}>
					<span className={s.keyword}>string[]</span>
					<span className={s.variable}>{DisplayLanguage?.landing.codeBlock.fields.nationality}</span>
					<span className="text-white">=</span>
					<span className="text-white">{"{"}</span>
					<span className={s.string}>&quot;{DisplayLanguage?.landing.codeBlock.values.languages[0]}&quot;</span>
					<span className="text-white">{", "}</span>
					<span className={s.string}>&quot;{DisplayLanguage?.landing.codeBlock.values.languages[1]}&quot;</span>
					<span className="text-white">{"}"}</span>
				</div>
			</div>
		</div>
	);
}
