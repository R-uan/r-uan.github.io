"use client";
import About from "./(About)/About";
import Main from "./(Landing)/Landing";
import Footer from "./(Components)/(Footer)/Footer";
import Navigation from "./(Components)/(Navigation)/Navigation";
import FeaturedRepos from "./(Repositories)/FeaturedRepositories";

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
