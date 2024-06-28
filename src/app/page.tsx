"use client";
import { Suspense } from "react";
import AnimationTriggerProvider from "./_v2/_contexts/AnimationTriggerContext";
import { AboutMe, Projects, Header, Loading, MobileMenu, ScrollTracker, Landing, Contacts } from "./_v2/exports";

export default function Home() {
	return (
		<AnimationTriggerProvider>
			<Suspense fallback={<Loading />}>
				<ScrollTracker />
				<MobileMenu />
				<Header />
				<main>
					<Landing />
					<AboutMe />
					<Projects />
					<Contacts />
				</main>
			</Suspense>
		</AnimationTriggerProvider>
	);
}
