"use client";
import Navigation from "./(Components)/(Navigation)/Navigation";
import Main from "./(Landing)/Landing";
import Repositories from "./(Repositories)/Repositories";

export default function Home() {
	return (
		<body className="outline-[1px]  p-[15px] outline outline-[#ff003c] overflow-auto min-h-screen outline-offset-[-10px] bg-[#0b0e14]">
			<Navigation />
			<Main />
			<Repositories />
		</body>
	);
}
