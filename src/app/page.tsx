"use client";
import s from "./page.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import animation from "./_v2/animations.module.scss";
import React, { Suspense, useEffect, useState } from "react";
import { AboutMe, Loading, MobileMenu, PageTracker } from "./_v2/exports";
import AnimationTriggerProvider, { AnimationTriggerContext } from "./_v2/_contexts/AnimationTriggerContext";

export default function Home() {
	const OpenSideMenu = () => (document.getElementById("mobile-menu")!.style.width = "300px");

	return (
		<AnimationTriggerProvider>
			<AnimationTriggerContext.Consumer>
				{(animationTrigger) => (
					<React.Fragment>
						<Suspense fallback={<Loading />}>
							<PageTracker />
							<MobileMenu />
							<header className={s.header}>
								<div className={s.mobile_menu_toggle}>
									<button onClick={OpenSideMenu}>Open</button>
								</div>
								<div>
									<span>hello world</span>
								</div>
								<nav>
									<ul>
										<li
											className={!animationTrigger?.animationTriggered ? animation.nav_waiting : animation.nav_loaded}
											style={{ animationDelay: "0ms" }}>
											<span>01.</span>
											<span>Home</span>
										</li>
										<li
											className={!animationTrigger?.animationTriggered ? animation.nav_waiting : animation.nav_loaded}
											style={{ animationDelay: "100ms" }}>
											<span>02.</span>
											<span>About</span>
										</li>
										<li
											className={!animationTrigger?.animationTriggered ? animation.nav_waiting : animation.nav_loaded}
											style={{ animationDelay: "200ms" }}>
											<span>03.</span>
											<span>Experience</span>
										</li>
										<li
											className={!animationTrigger?.animationTriggered ? animation.nav_waiting : animation.nav_loaded}
											style={{ animationDelay: "300ms" }}>
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
											<div
												className={!animationTrigger?.animationTriggered ? animation.text_waiting : animation.text_loaded}
												style={{ animationDelay: "100ms" }}>
												<h1>Ruan Lopes</h1>
											</div>
											<div
												className={!animationTrigger?.animationTriggered ? animation.text_waiting : animation.text_loaded}
												style={{ animationDelay: "200ms" }}>
												<h1>Full-stack web developer.</h1>
											</div>
										</div>
										<div
											className={!animationTrigger?.animationTriggered ? animation.text_waiting : animation.text_loaded}
											style={{ animationDelay: "300ms" }}>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur debitis, eligendi quibusdam non,
												reiciendis nemo nostrum enim quo ipsum eius expedita hic. Saepe velit ipsa ut consequatur quam soluta?
											</p>
										</div>
										<div
											className={`${s.resume} ${
												!animationTrigger?.animationTriggered ? animation.resume_waiting : animation.resume_loaded
											}`}>
											<button className={s.shadow_pop_tr}>My Resume</button>
										</div>
									</div>
									<div
										className={`${s.silly} ${
											!animationTrigger?.animationTriggered ? animation.text_waiting : animation.text_loaded
										}`}>
										<button>
											<IoIosArrowDown size={40} fill="white" className={`${s.icon} animate-bounce`} />
										</button>
									</div>
								</div>
								<AboutMe />
							</main>
						</Suspense>
					</React.Fragment>
				)}
			</AnimationTriggerContext.Consumer>
		</AnimationTriggerProvider>
	);
}
