"use client";
import Image from "next/image";
import React from "react";
import s from "./Main.module.scss";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Works from "./components/Projects/Projects";
import Link from "next/link";
import { AboutMe } from "./data/EnglishData";
import LanguageProvider, { useLanguageContext } from "./data/LanguageState";
import { Sobre } from "./data/PortugueseData";

export default function Home() {
  const Content = () => {
    const ctx = useLanguageContext();
    return (
      <React.Suspense
        fallback={<div className="w-full h-full bg-[#050A0E]"></div>}
      >
        <main className={s.main}>
          <div className={s.left}>
            <div className={s.lang}>
              <button
                className={ctx.isPortuguese ? s.lang_active : ""}
                onClick={() => ctx.setPortuguese(true)}
              >
                PT
              </button>
              <button
                className={!ctx.isPortuguese ? s.lang_active : ""}
                onClick={() => ctx.setPortuguese(false)}
              >
                EN
              </button>
            </div>
            <div className={s.heading}>
              <h1>Ruan Lopes</h1>
              <h2>{ctx.isPortuguese ? Sobre.title : AboutMe.title}</h2>
              <div className={s.resume}>
                <p>{ctx.isPortuguese ? Sobre.text : AboutMe.text}</p>
              </div>
            </div>
            <div className={s.paladin}>
              <Image
                width={300}
                height={300}
                loading="eager"
                src="/paladin.webp"
                alt="paladin"
                className={s.pld}
              />
            </div>
            <div className={s.socials}>
              <ul>
                <li className="tip" data-tip="My Github">
                  <a
                    target="_blank"
                    aria-label="github redirect"
                    href="https://github.com/R-uan"
                  >
                    <Image
                      alt="github"
                      height={30}
                      width={30}
                      src="/social-icons/github.svg"
                      className={s.icons}
                    />
                  </a>
                </li>
                <li className="tip" data-tip="My Linkedin">
                  <a
                    target="_blank"
                    aria-label="linkedin redirect"
                    href="https://www.linkedin.com/in/rpo-lopes/"
                  >
                    <Image
                      alt="linkedin"
                      height={30}
                      width={30}
                      src="/social-icons/linkedin.svg"
                      className={s.icons}
                    />
                  </a>
                </li>
                <li className="tip" data-tip="My Email">
                  <a
                    target="_blank"
                    aria-label="gmail redirect"
                    href="mailto:rpo.lopes@hotmail.com"
                  >
                    <Image
                      alt="gmail"
                      height={30}
                      width={30}
                      src="/social-icons/mail.svg"
                      className={s.icons}
                    />
                  </a>
                </li>
                <li className="tip" data-tip="My Resume">
                  <Link
                    href={ctx.isPortuguese ? "/curriculo.pdf" : "/resume.pdf"}
                    aria-label="resume redirect"
                    target="_blank"
                  >
                    <Image
                      alt="resume"
                      height={30}
                      width={30}
                      src="/social-icons/resume.svg"
                      className={s.icons}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.right}>
            <About />
            <Experience />
            <Works />
          </div>
        </main>
      </React.Suspense>
    );
  };

  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}
