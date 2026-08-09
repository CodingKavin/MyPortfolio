import Typography from "../../components/Typography/Typography";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./PathPage.scss";

const PathPage = () => {
  const experiences = [
    {
      role: "Senior Software Engineer – SDET",
      org: "RBC (via Capgemini)",
      dates: "Jan 2025 – Aug 2025",
      note: "Led Agile automation teams to define standards and streamline CI/CD pipelines using Jenkins and GitHub Actions.",
    },
    {
      role: "Software Engineer – SDET",
      org: "RBC (via Capgemini)",
      dates: "May 2022 – Dec 2024",
      note: "Deployed 50+ RPA bots and UI/API frameworks (Cypress/Robot) to automate financial migrations, replacing $5M in manual effort.",
    },
    {
      role: "Universal Banker → Financial Advisor (Imperial Service)",
      org: "CIBC",
      dates: "Apr 2017 – Feb 2021",
      note: "Progressed from client-facing banking support into a licensed advisory role; managed complex client relationships and ranked in the Top 3% of advisors in Calgary while helping launch a new digital branch.",
    },
  ];

  const education = [
    {
      title: "Diploma, Software Engineering",
      school: "BrainStation",
      year: "2026",
    },
    {
      title: "Cert. Data Analytics & Big Data",
      school: "Toronto Metropolitan University",
      year: "2022",
    },
    {
      title: "B.A.Sc. Civil Engineering",
      school: "University of Windsor",
      year: "2016",
    },
  ];

  return (
    <section id="path" className="path">
      <PageHeader
        kicker="Path"
        heading="Eight years of getting things right the first time."
      />

      <div className="path__details">
        <div className="path__experience">
          {experiences.map((exp) => (
            <div key={exp.role} className="path__job">
              <Typography variant="p3" className="path__job-dates">
                {exp.dates}
              </Typography>
              <div className="path__job-content">
                <Typography variant="h2" className="path__job-role">
                  {exp.role}
                </Typography>
                <Typography variant="p2" className="path__job-org">
                  {exp.org}
                </Typography>
                <Typography variant="p1" className="path__job-note">
                  {exp.note}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <div className="path__education">
          <Typography variant="h4" className="path__education-label">
            Education
          </Typography>
          <div className="path__education-grid">
            {education.map((edu) => (
              <div key={edu.title} className="path__edu-tile">
                <Typography variant="p3" className="path__edu-year">
                  {edu.year}
                </Typography>
                <Typography variant="p2" className="path__edu-title">
                  {edu.title}
                </Typography>
                <Typography variant="p2" className="path__edu-school">
                  {edu.school}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathPage;
