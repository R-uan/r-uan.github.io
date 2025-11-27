import { AboutMe } from "@/app/data/EnglishData";
import Devstack from "../Devstack/Devstack";
import s from "./About.module.scss";
import { useLanguageContext } from "@/app/data/LanguageState";
import { Sobre } from "@/app/data/PortugueseData";

export default function About() {
  const ctx = useLanguageContext();
  return (
    <section className={s.about}>
      <div className="head">
        <h1>{ctx.isPortuguese ? "SOBRE" : "ABOUT"}</h1>
      </div>
      <div className={s.content}>
        {ctx.isPortuguese ? Sobre.aboutMe : AboutMe.aboutMe}
      </div>
      <Devstack />
    </section>
  );
}
