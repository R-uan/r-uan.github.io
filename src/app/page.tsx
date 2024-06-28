"use client";
import About from "./_components/_about/About";
import Main from "./_components/_landing/Landing";
import Footer from "./_components/_footer/Footer";
import Navigation from "./_components/_navigation/Navigation";
import FeaturedRepos from "./_components/_repositories/FeaturedRepositories";

export default function Home() {
	return (
		<body className="outline-[1px] p-[15px] outline outline-[#ff003c] overflow-auto min-h-screen outline-offset-[-5px] bg-[#0b0e14]">
			<Navigation />
			<Main />
			<About />
			<FeaturedRepos />
			<Footer />
		</body>
	);
}
