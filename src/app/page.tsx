"use client";
import { Suspense } from "react";
import Footer from "@/app/_components/Footer/Footer";
import AlternativeHeader from "@/app/_components/Header/AlternativeHeader";
import DisplayLanguageProvider from "@/app/_contexts/DisplayLanguageContext";
import AnimationTriggerProvider from "@/app/_contexts/AnimationTriggerContext";
import { AboutMe, Contacts, Header, Landing, Loading, MobileMenu, Projects, RightMenu } from "./exports";
import WindowScrollProvider from "./_contexts/WindowScrollContext";
import Areas from "./_sections/areas/Areas";

export default function Home() {
	return (
		<AnimationTriggerProvider>
			<WindowScrollProvider>
				<Suspense fallback={<Loading />}>
					<DisplayLanguageProvider>
						<RightMenu />
						<MobileMenu />
						<Header />
						<AlternativeHeader />
						<main>
							<Landing />
							<AboutMe />
							<Areas />
							<Projects />
							<Contacts />
						</main>
						<Footer />
					</DisplayLanguageProvider>
				</Suspense>
			</WindowScrollProvider>
		</AnimationTriggerProvider>
	);
}
