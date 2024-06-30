import { FaLinkedin } from "react-icons/fa";
import { FaDiscord, FaGithub, FaSkype } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import s from "./Contacts.module.scss";
import CodeBlock from "@/app/_v2/_components/CodeBlockInformation/CodeBlock";
export default function Contacts() {
	const CopyToClipBoard = (text: string) => {
		navigator.clipboard.writeText(text);
		const message = document.getElementById("copy-message");
		message!.innerText = `${text} copied to clipboard.`;
		setTimeout(() => {
			message!.innerText = ``;
		}, 3000);
	};
	return (
		<section id="contact" className={s.contact}>
			<div className={s.contact_content}>
				<div className={s.left_panel}>
					<div className={s.left_content}>
						<div className={s.presentation}>
							<h3>Available for work</h3>
							<p>
								If you looked at my resume and though I fitting for your project do not be afraid to hit me up. I am willing to work
								on any project that will allow me to receive positive experiences in the software development field.
							</p>
						</div>
						<div className={s.contact_info}>
							<ul className={s.contacts}>
								<li>
									<a href="https://github.com/R-uan">
										<FaGithub className={s.icons} />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/rpo-lopes/">
										<FaLinkedin className={s.icons} />
									</a>
								</li>
								<li>
									<a href="mailto:rpo.lopes.dev@gmail.com">
										<SiGmail className={s.icons} />
									</a>
								</li>
								<li>
									<button onClick={() => CopyToClipBoard("live:5bf285eb75c15b71")}>
										<FaSkype className={s.icons} />
									</button>
								</li>
								<li>
									<button onClick={() => CopyToClipBoard("r.uan")}>
										<FaDiscord className={s.icons} />
									</button>
								</li>
								<li></li>
							</ul>
							<span id="copy-message" className={s.copy_message}></span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
