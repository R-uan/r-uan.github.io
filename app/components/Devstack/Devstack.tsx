import s from "./Devstack.module.scss";

export default function Devstack() {
  return (
    <section className={s.devstack}>
      <div className={s.skills}>
        <div className={s.tech}>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>Rust</li>
            <li>Python</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className={s.tech}>
          <ul>
            <li>ASP.NET Core</li>
            <li>Django</li>
            <li>NextJS</li>
            <li>ReactJS</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className={s.tech}>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Docker</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className={s.tech}>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Supabase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
