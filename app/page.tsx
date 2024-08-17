"use client";
import Link from "next/link";
import Image from "next/image";
import { MainStyled } from "./MainStyled";
import About from "./components/About/About";
import Works from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

export default function Home() {
	return (
		<MainStyled>
			<div className="left">
				<div className="head">
					<h1>Ruan Lopes</h1>
					<h3>Software Developer</h3>
					<div className="resume">
						<p>Working to build myself up the professional ladder.</p>
					</div>
				</div>
				<div className="paladin">
					<Image width={300} height={300} src="/paladin.png" alt="paladin" className="pld" />
				</div>
				<div className="socials">
					<ul>
						<li>
							<a target="_blank" aria-label="github redirect" href="https://github.com/R-uan">
								<Image alt="github" height={30} width={30} src="/social-icons/github.svg" className="icons" />
							</a>
						</li>
						<li>
							<a target="_blank" aria-label="linkedin redirect" href="https://www.linkedin.com/in/rpo-lopes/">
								<Image alt="linkedin" height={30} width={30} src="/social-icons/linkedin.svg" className="icons" />
							</a>
						</li>
						<li>
							<a target="_blank" aria-label="gmail redirect" href="mailto:rpo.lopes.dev@gmail.com">
								<Image alt="gmail" height={30} width={30} src="/social-icons/mail.svg" className="icons" />
							</a>
						</li>
						<li>
							<a href="/resume.pdf" aria-label="resume redirect" target="_blank">
								<Image alt="resume" height={30} width={30} src="/social-icons/resume.svg" className="icons" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="right">
				<About />
				<Experience />
				<Works />
			</div>
		</MainStyled>
	);
}
