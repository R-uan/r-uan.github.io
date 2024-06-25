import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono, Smooch_Sans } from "next/font/google";

const Smooch = Smooch_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-smooch",
});

const Bebas = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bebas",
});

const JetBrains = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jetbrains",
});

export const metadata: Metadata = {
	title: "Ruan Lopes | Web Developer",
	description: "Personal webpage/portifolio",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`scroll-bar ${Smooch.variable} ${Bebas.variable} ${JetBrains.variable}`}>
			<body>{children}</body>
		</html>
	);
}
