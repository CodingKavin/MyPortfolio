import ProjectImg from "../../assets/Images/SpendShifter_devices.png";
import AtmoSentryImg from "../../assets/Images/AtmoSentry_Mockup.png";
import Typography from "../../components/Typography/Typography";
import Tags from "../../components/Tags/Tags";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./WorkPage.scss";

const WorkPage = () => {
  const projects = [
    {
      name: "SpendShifter",
      year: "2026",
      blurb:
        "Full-stack budget tracker with month-over-month spending analysis and category pie charts. Built around data integrity and secure auth, with full CRUD expense management.",
      stack: [
        "React.js",
        "Node.js",
        "Express.js",
        "Supabase",
        "Axios",
        "Cloudflare",
        "Render",
        "Netlify",
        "Resend",
        "Vitest",
      ],
      highlights: [
        "Secure auth + row-level data integrity",
        "Robust unit test coverage via Vitest",
      ],
      links: [
        { label: "spendshifter.com", href: "https://spendshifter.com" },
        {
          label: "Demo video",
          href: "https://www.youtube.com/watch?v=i4ciY37zI_A",
        },
        {
          label: "Repo",
          href: "https://github.com/CodingKavin/SpendShifter-client.git",
        },
      ],
      img: ProjectImg,
    },
    {
      name: "AtmoSentry",
      year: "2026",
      blurb:
        "AI-orchestrated weather and air-quality checker, designed and deployed in under 24 hours. The entire project was built inside a Dockerized WSL2 sandbox to isolate AI-generated code.",
      stack: [
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Docker",
        "GitHub Actions",
        "Vitest",
      ],
      highlights: [
        "Custom skeleton loaders for perceived performance",
        "Automated CI/CD integrity checks",
      ],
      links: [
        { label: "atmosentry.com", href: "https://atmosentry.com" },
        { label: "Repo", href: "https://github.com/CodingKavin/atmosentry.git" },
      ],
      img: AtmoSentryImg,
    },
  ];

  return (
    <section id="work" className="work">
      <PageHeader kicker="Work" heading="Shipped, live, and documented." />

      <div className="work__container">
        {projects.map((project) => (
          <article key={project.name} className="work__card">
            <div className="work__info">
              <div className="work__title-row">
                <Typography variant="h2" className="work__name">
                  {project.name}
                </Typography>
                <Typography variant="p3" className="work__year">
                  {project.year}
                </Typography>
              </div>
              <Typography variant="p1" className="work__blurb">
                {project.blurb}
              </Typography>
              <div className="work__stack">
                {project.stack.map((tech) => (
                  <Tags key={tech} text={tech} variant="stack" />
                ))}
              </div>
              <div className="work__links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="work__link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="work__media">
              <img
                src={project.img}
                alt={project.name}
                className="work__img"
              />
              <div className="work__highlights">
                {project.highlights.map((highlight) => (
                  <Typography
                    key={highlight}
                    variant="p2"
                    className="work__highlight"
                  >
                    {highlight}
                  </Typography>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkPage;
