import Link from "next/link";
import s from "./MobileMenu.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { useDisplayLanguageContext } from "@/app/_contexts/DisplayLanguageContext";
import { IoMdHome, IoIosSend } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { RiGalleryView2 } from "react-icons/ri";

export default function MobileMenu() {
	const CloseMenu = () => (document.getElementById("mobile-menu")!.style.width = "0px");
	const { DisplayLanguage, ChangeDisplayLanguage } = useDisplayLanguageContext();

	return (
		<div id="mobile-menu" className={s.menu}>
			<div className={s.menu_header}>
				<div></div>
				<div className="h-[40px]">
					<button onClick={CloseMenu}>
						<IoCloseSharp fill="white" className="h-fit leading-snug" size={40} />
					</button>
				</div>
			</div>
			<div className={s.menu_content}>
				<nav>
					<ul>
						<li>
							<a href="#landing">
								<span>
									<IoMdHome />
								</span>
								<span>{DisplayLanguage?.heading.home}</span>
							</a>
						</li>
						<li>
							<a href="#about">
								<span>
									<IoPersonSharp />
								</span>
								<span>{DisplayLanguage?.heading.about}</span>
							</a>
						</li>
						<li>
							<a href="#projects">
								<span>
									<RiGalleryView2 />
								</span>
								<span>{DisplayLanguage?.heading.experience}</span>
							</a>
						</li>
						<li>
							<a href="#contact">
								<span>
									<IoIosSend />
								</span>
								<span>{DisplayLanguage?.heading.contact}</span>
							</a>
						</li>
					</ul>
				</nav>
				div
				<div className="w-full flex flex-col gap-[2px] h-fit absolute bottom-0 left-0">
					<div className={s.resume}>
						<Link className={s.link} href={DisplayLanguage?.resume ?? ""}>
							<span>{DisplayLanguage?.heading.resume}</span>
						</Link>
					</div>
					<div className="gap-[2px] w-full justify-center flex outline outline-1">
						<button onClick={() => ChangeDisplayLanguage("pt")} className="w-1/2 h-[50px] text-[1.5rem] bg-[#fcee09] text-black">
							PT
						</button>
						<button onClick={() => ChangeDisplayLanguage("en")} className="w-1/2 h-[50px] text-[1.5rem] bg-[#fcee09] text-black">
							EN
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
