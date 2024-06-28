import Image from "next/image";
import s from "./Landing.module.scss";

export default function Landing() {
	function Age() {
		var today = new Date();
		var birthDate = new Date("2002-06-17");
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
		return age;
	}

	return (
		<section className={s.landing_page}>
			<div className={s.left_content_box}>
				<div className={s.introduction}>
					<div>
						<span className="text-[4rem] leading-[1]">Hi, my name is</span>
						<span className="font-bold text-[4rem] leading-[1] text-[#FF003C]"> Ruan Lopes</span>
					</div>
					<div>
						<span className="text-[4rem] leading-[1]">I am a Aspiring Fullstack Web Developer</span>
					</div>
				</div>
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
			</div>
			<div className={s.right_content_box}>
				<div className={s.home_img}>
					<Image className="rounded-[6px]" width={400} height={400} alt="landing image" src={"/home/ballin.webp"} />
				</div>
			</div>
		</section>
	);
}