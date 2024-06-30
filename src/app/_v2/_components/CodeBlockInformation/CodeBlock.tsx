import s from "./CodeBlock.module.scss";
import animation from "../../animations.module.scss";
import { useAnimationTriggerContext } from "../../_contexts/AnimationTriggerContext";
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

	return (
		<div className={s.personal_information}>
			<div>
				<div
					className={`${s.code} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}
					style={{ animationDelay: "600ms" }}>
					<span className={s.keyword}>int</span>
					<span className={s.variable}>age</span>
					<span className="text-white">=</span>
					<span className="text-[#AFC7A3]">{Age()};</span>
				</div>
			</div>
			<div>
				<div
					className={`${s.code} ${!animationTriggered ? animation.text_waiting : animation.text_loaded}`}
					style={{ animationDelay: "700ms" }}>
					<span className={s.keyword}>string</span>
					<span className={s.variable}>nationality</span>
					<span className="text-white">=</span>
					<span className={s.string}>&quot;brazillian&quot;</span>
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
					<span className={s.variable}>languages</span>
					<span className="text-white">=</span>
					<span className="text-white">{"{"}</span>
					<span className={s.string}>&quot;portuguese&quot;</span>
					<span className="text-white">{", "}</span>
					<span className={s.string}>&quot;english&quot;</span>
					<span className="text-white">{"}"}</span>
				</div>
			</div>
		</div>
	);
}
