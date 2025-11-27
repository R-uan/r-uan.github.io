import { ExperienceList } from "@/app/data/EnglishData";
import IndividualExperience from "../IndividualExperience/IndividualExperience";
import s from "./Experience.module.scss";
import { useLanguageContext } from "@/app/data/LanguageState";
import { Experiencia } from "@/app/data/PortugueseData";

export default function Experience() {
  const ctx = useLanguageContext();
  return (
    <section className={s.experience}>
      <div className="head">
        <h1>
          {ctx.isPortuguese
            ? "EXPERIÊNCIA PROFISSIONAL"
            : "PROFESSIONAL EXPERIENCE"}
        </h1>
      </div>
      <div className={s.experiences}>
        {ctx.isPortuguese
          ? Experiencia.map((ex) => {
              return <IndividualExperience key={ex.position} experience={ex} />;
            })
          : ExperienceList.map((ex) => {
              return <IndividualExperience key={ex.position} experience={ex} />;
            })}
      </div>
    </section>
  );
}
