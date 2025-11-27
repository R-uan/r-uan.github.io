import { ProjectList } from "@/app/data/EnglishData";
import IndividualProject from "../IndividualProject/IndividualProject";
import s from "./Projects.module.scss";
import { useLanguageContext } from "@/app/data/LanguageState";
import { Projetos } from "@/app/data/PortugueseData";

export default function Projects() {
  const ctx = useLanguageContext();
  return (
    <section className={s.projects}>
      <div className="head">
        <h1>
          {ctx.isPortuguese ? "EXPERIÊNCIA TÉCNICA" : "TECHNICAL EXPERIENCE"}
        </h1>
      </div>
      <div className={s.projects2}>
        {ctx.isPortuguese
          ? Projetos.map((project) => {
              return (
                <IndividualProject key={project.title} project={project} />
              );
            })
          : ProjectList.map((project) => {
              return (
                <IndividualProject key={project.title} project={project} />
              );
            })}
      </div>
    </section>
  );
}
