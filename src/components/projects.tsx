import Image from "next/image";
import { projects } from "@/content/site";
import { TwoLines } from "./two-lines";

const { main } = projects;

function MainProject() {
  return (
    <article id="proyek-utama" className="main-project" aria-labelledby="proyek-utama-title">
      <div className="main-project-photo">
        <Image src={main.photo.src} alt={main.photo.alt} fill sizes="(max-width: 767px) calc(100vw - 40px), 36vw" />
      </div>
      <div className="main-project-copy">
        <p className="main-project-label">{main.label}</p>
        <h3 id="proyek-utama-title">{main.name}</h3>
        <p className="main-project-summary">{main.summary}</p>
        <h4>{main.modulesTitle}</h4>
        <ul className="main-project-modules">
          {main.modules.map((module) => (
            <li key={module.name}>
              <p>{module.name}</p>
              <p>{module.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function TeamProject({ project }: { project: (typeof projects.team)[number] }) {
  // Knect ditampilkan sebagai dua layar ponsel; proyek lain satu screenshot penuh.
  const isMobile = project.images.length > 1;
  return (
    <article id={`proyek-${project.id}`} className="project-entry">
      <figure className={isMobile ? "project-image knect-screens" : `project-image project-screen ${project.id}-screen`}>
        {project.images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={isMobile ? "(max-width: 767px) 34vw, 17vw" : "(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) calc((100vw - 94px) / 2), 640px"}
          />
        ))}
      </figure>
      <div className="project-caption">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
        </div>
        <p>{project.description}</p>
      </div>
      <div className="project-contribution">
        <p>{project.contributor}</p>
        <p>{project.contribution}</p>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="karya" aria-labelledby="karya-title" className="page-width projects-section">
      <div className="projects-intro">
        <div>
          <p className="section-name">{projects.label}</p>
          <h2 id="karya-title">
            <TwoLines lines={projects.title} />
          </h2>
        </div>
        <p>{projects.intro}</p>
      </div>

      <MainProject />

      <h3 className="team-projects-title">{projects.teamTitle}</h3>
      <div className="team-project-grid">
        {projects.team.map((project) => (
          <TeamProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
