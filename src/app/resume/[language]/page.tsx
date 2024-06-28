import Link from "next/link";
import s from "./page.module.scss";

export default function ResumePortuguese({ params }: { params: { language: string } }) {
	return (
		<main className="w-screen h-screen">
			{params.language == "portuguese" ? (
				<iframe className={s.resume} src={`/resume-portuguese.pdf`}></iframe>
			) : params.language == "english" ? (
				<iframe className={s.resume} src={`/resume-english.pdf`}></iframe>
			) : (
				<div className={s.selector}>
					<Link href="/resume-portuguese">
						<div className={s.portugues}>
							<span>Meu Curriculo</span>
							<span>Português</span>
						</div>
					</Link>
					<Link href="/resume-english">
						<div className={s.english}>
							<span>My Resume</span>
							<span>English</span>
						</div>
					</Link>
				</div>
			)}
		</main>
	);
}
