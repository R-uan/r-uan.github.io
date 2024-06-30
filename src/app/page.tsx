"use client";
import { Suspense } from "react";
import AnimationTriggerProvider from "./_v2/_contexts/AnimationTriggerContext";
import { AboutMe, Projects, Header, Loading, MobileMenu, ScrollTracker, Landing, Contacts } from "./_v2/exports";
import Footer from "./_v2/_components/Footer/Footer";
import AlternativeHeader from "./_v2/_components/Header/AlternativeHeader";

export default function Home() {
	return (
		<AnimationTriggerProvider>
			<Suspense fallback={<Loading />}>
				<ScrollTracker />
				<MobileMenu />
				<Header />
				<AlternativeHeader />
				<main>
					<Landing />
					<AboutMe />
					<Projects />
					<Contacts />
				</main>
				<Footer />
			</Suspense>
		</AnimationTriggerProvider>
	);
}
