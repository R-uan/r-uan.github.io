import IProject from "@/app/interfaces/IProject";
import Image from "next/image";
import s from "./IndProject.module.scss";

export default function IndividualProject({ project }: { project: IProject }) {
  const { title, description, stack, image, url } = project;
  return (
    <section className={s.indproject}>
      <a
        href={url}
        className={s.external}
        aria-label={`${title} repository redirect`}
      ></a>
      <div className={s.image}>
        <Image
          className={s.image}
          fill={true}
          src={image ?? "/purple.webp"}
          alt={title}
        />
      </div>
      <div className={s.summary}>
        <div className={s.title}>
          <h2>{title}</h2>
          <Image src="/external.svg" alt="external" width={20} height={20} />
        </div>
        <div className={s.description}>
          <p>{description}</p>
        </div>
        <div className={s.stack}>
          <ul>
            {stack.map((tech) => {
              return <li key={tech}>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
