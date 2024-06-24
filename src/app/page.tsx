"use client";
import React from "react";
import s from "./root.module.scss";
import AboutMe from "./_v2/about-me/AboutMe";
import PageTracker from "./_v2/PageTracker";

export default function Home() {
	return (
		<React.Fragment>
			<PageTracker />
			<header className={s.header}>
				<div>
					<span>hello world</span>
				</div>
				<nav>
					<ul>
						<li>
							<span>01.</span>
							<span>Home</span>
						</li>
						<li>
							<span>02.</span>
							<span>About</span>
						</li>
						<li>
							<span>03.</span>
							<span>Experience</span>
						</li>
						<li>
							<span>04.</span>
							<span>Contact</span>
						</li>
					</ul>
				</nav>
			</header>
			<main className={s.main}>
				<div className={s.landing}>
					<div className={s.landing_container}>
						<div>
							<h1>RUAN LOPES</h1>
						</div>
						<div>
							<span>BRAZILLIAN SOFTWARE DEVELOPER | FULL-STACK</span>
						</div>
					</div>
				</div>
				<AboutMe />
			</main>
		</React.Fragment>
	);
}
