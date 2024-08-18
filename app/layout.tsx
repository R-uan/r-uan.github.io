import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ruan Lopes | Software Developer",
	description: "Web Portfolio created on Next.js",
	icons: {
		icon: "favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
