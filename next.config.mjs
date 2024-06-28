/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/",
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/resume-:language",
				destination: "/resume/:language",
			},
		];
	},
};

export default nextConfig;
