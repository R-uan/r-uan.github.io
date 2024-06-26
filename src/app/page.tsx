"use client";
import React, { Suspense } from "react";
import AnimationTriggerProvider, { AnimationTriggerContext } from "./_v2/_contexts/AnimationTriggerContext";
import { AboutMe, Experience, Header, Loading, MobileMenu, ScrollTracker } from "./_v2/exports";
import Landing from "./_v2/landing/Landing";

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
					<Experience />
				</main>
			</Suspense>
		</AnimationTriggerProvider>
	);
}
