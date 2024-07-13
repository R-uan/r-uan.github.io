import s from "./Contacts.module.scss";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord, FaGithub, FaSkype } from "react-icons/fa6";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";

export default function Contacts() {
	const { DisplayLanguage } = useDisplayLanguageContext();

	const CopyToClipBoard = (text: string) => {
		navigator.clipboard.writeText(text);
		const message = document.getElementById("copy-message");
		message!.innerText = `${text} copied to clipboard.`;
		setTimeout(() => {
			message!.innerText = ``;
		}, 3000);
	};
	return (
		<section id="contact" className={s.section}>
			<div className={s.contact}>
				<div className={s.left_content}>
					<div className={s.interest}>
						<div className={s.disponibility}>
							<h1>{DisplayLanguage?.titles.contact}</h1>
							<p>{DisplayLanguage?.paragraphs.contact} </p>
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
			</div>
		</section>
	);
}
