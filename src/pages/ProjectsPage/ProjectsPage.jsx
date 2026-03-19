import ProjectImg from "../../assets/Images/SpendShifter_devices.png";
import AigisImg from "../../assets/Images/AIgis_Wes_Pic.png";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import Tags from "../../components/Tags/Tags";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const projects = [
    {
      title: "SpendShifter (Full-Stack Budget Tracker)",
      description:
        "A comprehensive financial tool featuring a dashboard with month-over-month spending analysis and category-based pie charts. Built with a focus on data integrity and secure authentication, allowing users to manage expenses with full CRUD functionality.",
      techStack: [
        "React.js",
        "Axios",
        "Node.js",
        "Express.js",
        "Supabase (Auth & DB)",
        "Cloudflare",
        "Render",
        "Netlify",
        "Resend (SMTP)",
      ],
      liveLink: "https://spendshifter.com",
      codeLink: "https://github.com/CodingKavin/SpendShifter-client.git",
      videoLink: "https://www.youtube.com/watch?v=i4ciY37zI_A",
      img: ProjectImg,
    },
    {
      title: "AIgis (AI Credit Card Fraud Detection)",
      description:
        "Developed during a high-intensity 4-day hackathon, this MVP leverages PCA-transformed data and a Random Forest algorithm to detect credit card fraud. Collaborating with UX design and Data Science teams we architected the analyst dashboard, enabling financial institutions to set automated thresholds for auto-approvals and auto-blocks, while flagging medium-probability transactions for manual review.",
      techStack: ["React.js", "JavaScript", "Node.js", "Express.js", "SQL"],
      liveLink: null,
      codeLink: "https://github.com/CodingKavin",
      videoLink: null,
      img: AigisImg,
    },
  ];

  return (
    <section className="projects">
      <Typography variant="h1" className="projects__header">
        Projects
      </Typography>
      <div className="projects__container">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-card__image-container">
              <img
                src={project.img}
                alt={project.title}
                className="project-card__img"
              />
            </div>
            <div className="project-card__content">
              <Typography variant="h2" className="project-card__title">
                {project.title}
              </Typography>
              <Typography variant="p1" className="project-card__description">
                {project.description}
              </Typography>
              <div className="project-card__tags">
                {project.techStack.map((tech) => (
                  <Tags key={tech} text={tech} />
                ))}
              </div>

              <div className="project-card__btn-container">
                {/* 1. Demo (YouTube) */}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__external-link"
                  >
                    <Button variant="primary" className="project-card__btn">
                      <Typography variant="p2">Demo</Typography>
                    </Button>
                  </a>
                )}

                {/* 2. Live App */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__external-link"
                  >
                    <Button variant="secondary" className="project-card__btn">
                      <Typography variant="p2">Live App</Typography>
                    </Button>
                  </a>
                )}

                {/* 3. Code */}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__external-link"
                  >
                    <Button variant="primary" className="project-card__btn">
                      <Typography variant="p2">Code</Typography>
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
