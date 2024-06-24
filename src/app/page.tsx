"use client";
import React from "react";
import s from "./root.module.scss";

export default function Home() {
	return (
		<React.Fragment>
			<header className={s.header}>
				<div>
					<span>hello</span>
				</div>
				<nav>
					<ul>
						<li>
							<span>01.</span>
							<span>Home</span>
						</li>
						<li>
							<span>02.</span>
							<span>Home</span>
						</li>
						<li>
							<span>03.</span>
							<span>Home</span>
						</li>
						<li>
							<span>04.</span>
							<span>Home</span>
						</li>
					</ul>
				</nav>
			</header>
			<main className={s.main}>
				<div className={s.main_container}>
					<div>
						<h1>RUAN LOPES</h1>
					</div>
					<div>
						<span>BRAZILLIAN SOFTWARE DEVELOPER | FULL-STACK</span>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}
