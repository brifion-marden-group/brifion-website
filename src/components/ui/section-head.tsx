import s from "./sections.module.css";

export function SectionHead({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className={s.head}>
      <p className={s.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={s.title}>{title}</h2>
      {intro && <p className={s.intro}>{intro}</p>}
    </div>
  );
}
