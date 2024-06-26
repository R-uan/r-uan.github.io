"use client";
import React, { Suspense } from "react";
import AnimationTriggerProvider, { AnimationTriggerContext } from "./_v2/_contexts/AnimationTriggerContext";
import { AboutMe, Header, Loading, MobileMenu, ScrollTracker } from "./_v2/exports";
import Landing from "./_v2/landing/Landing";

export default function Home() {
	return (
		<AnimationTriggerProvider>
			<AnimationTriggerContext.Consumer>
				{(animationTrigger) => (
					<React.Fragment>
						<Suspense fallback={<Loading />}>
							<ScrollTracker />
							<MobileMenu />
							<Header />
							<main>
								<Landing />
								<AboutMe />
							</main>
						</Suspense>
					</React.Fragment>
				)}
			</AnimationTriggerContext.Consumer>
		</AnimationTriggerProvider>
	);
}
