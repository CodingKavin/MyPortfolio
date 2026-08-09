import Typography from "../../components/Typography/Typography";
import "./PathPage.scss";

const PathPage = () => {
  const experiences = [
    {
      title: "Senior Software Engineer – SDET",
      company: "RBC (via Capgemini)",
      period: "Jan 2025 – Aug 2025",
      description:
        "Led Agile automation teams to define standards and streamline CI/CD pipelines using Jenkins and GitHub Actions.",
    },
    {
      title: "Software Engineer – SDET",
      company: "RBC (via Capgemini)",
      period: "May 2022 – Dec 2024",
      description:
        "Deployed 50+ RPA bots and UI/API frameworks (Cypress/Robot) to automate financial migrations, replacing $5M in manual effort.",
    },
    {
      title: "Financial Advisor – Imperial Service",
      company: "CIBC",
      period: "May 2018 – Feb 2021",
      description:
        "IIROC licensed advisor managing complex client relationships; ranked in the Top 3% of advisors in Calgary.",
    },
  ];

  const education = [
    {
      degree: "Diploma, Software Engineering",
      school: "BrainStation",
      year: "2026",
    },
    {
      degree: "Cert. Data Analytics & Big Data",
      school: "Toronto Metropolitan University",
      year: "2022",
    },
    {
      degree: "B.A.Sc. Civil Engineering",
      school: "University of Windsor",
      year: "2016",
    },
  ];

  return (
    <section id="path" className="path">
      <Typography variant="h1" className="path__header">
        Path
      </Typography>

      <div className="path__details">
        {/* Experience */}
        <div className="path__group">
          <Typography variant="h2" className="path__group-header">
            Experience
          </Typography>
          {experiences.map((exp, i) => (
            <div key={i} className="path__item">
              <Typography variant="p2" className="path__item-title">
                {exp.title}
              </Typography>
              <Typography variant="p3" className="path__item-meta">
                {exp.company} | {exp.period}
              </Typography>
              <Typography variant="p3" className="path__item-desc">
                {exp.description}
              </Typography>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="path__group">
          <Typography variant="h2" className="path__group-header">
            Education
          </Typography>
          {education.map((edu, i) => (
            <div key={i} className="path__item">
              <Typography variant="p2" className="path__item-title">
                {edu.degree}
              </Typography>
              <Typography variant="p3" className="path__item-meta">
                {edu.school} | {edu.year}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathPage;
