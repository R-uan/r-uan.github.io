import s from "./CodeBlock.module.scss";

export default function CodeBlock() {
	function Age() {
		var today = new Date();
		var birthDate = new Date("2002-06-17");
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
		return age;
	}
	return (
		<div className={s.personal_information}>
			<div>
				<div className={s.code}>
					<span className={s.keyword}>int</span>
					<span className={s.variable}>age</span>
					<span className="text-white">=</span>
					<span className="text-[#AFC7A3]">{Age()};</span>
				</div>
			</div>
			<div>
				<div className={s.code}>
					<span className={s.keyword}>string</span>
					<span className={s.variable}>nationality</span>
					<span className="text-white">=</span>
					<span className="text-[#B5806C]">&quot;brazillian&quot;;</span>
				</div>
			</div>
			<div>
				<div className={s.code}>
					<span className={s.keyword}>string</span>
					<span className={s.variable}>email</span>
					<span className="text-white">=</span>
					<span className="text-[#B5806C]">&quot;rpo.lopes.dev@gmail.com&quot;{";"}</span>
				</div>
			</div>
			<div>
				<div className={s.code}>
					<span className={s.keyword}>string</span>
					<span className={s.variable}>github</span>
					<span className="text-white">=</span>
					<span className="text-[#B5806C]">
						<a target="_blank" href="https://github.com/R-uan">
							&quot;https://github.com/R-uan&quot;
						</a>
						;
					</span>
				</div>
			</div>
			<div>
				<div className={s.code}>
					<span className={s.keyword}>string[]</span>
					<span className={s.variable}>languages</span>
					<span className="text-white">=</span>
					<span className="text-white">{"{"}</span>
					<span className="text-[#B5806C]">&quot;portuguese&quot;</span>
					<span className="text-white">{", "}</span>
					<span className="text-[#B5806C]">&quot;english&quot;</span>
					<span className="text-white">{"}"}</span>
				</div>
			</div>
		</div>
	);
}
