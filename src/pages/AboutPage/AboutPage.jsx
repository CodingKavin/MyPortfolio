import MyPic from "../../assets/Images/pic_kavin.jpg";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import MyResume from "../../assets/documents/Resume_Software_Engineer_Kavin_Paul.pdf";
import "./AboutPage.scss";

const AboutPage = () => {
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
    <section id="about" className="about-me">
      <Typography variant="h1" className="about-me__header">
        About Me
      </Typography>

      {/* Main Intro Card */}
      <div className="about-me__content">
        <div className="about-me__pic">
          <img src={MyPic} alt="Kavin Paul" className="about-me__pic-img" />
        </div>
        <div className="about-me__about">
          <div className="about-me__about-content">
            <Typography variant="p1" className="about-me__description">
              Hey I'm Kavin, I am a developer who bridges the gap between
              high-level logic and low-level implementation. With 8 years in the
              banking industry, transitioning from financial advising to Robotic
              Process Automation, I have built my career on precision and
              problem-solving. I am a fast learner with an innate curiosity for
              how things work under the hood. I specialize in building clean,
              functional applications and am currently diving into the Java,
              Spring Boot, and AWS ecosystem.
            </Typography>
            <div className="about-me__btn-container">
              <Button
                variant="primary"
                isLink={true}
                to="#projects"
                className="about-me__btn"
              >
                <Typography variant="p2">Projects</Typography>
              </Button>
              <a
                href={MyResume}
                target="_blank"
                rel="noreferrer"
                className="about-me__download-link"
              >
                <Button variant="secondary" className="about-me__btn">
                  <Typography variant="p2">Resume</Typography>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div className="about-me__details">
        {/* Experience Box */}
        <div className="about-me__content about-me__content--column">
          <div className="about-me__column">
            <Typography variant="h2" className="about-me__sub-header">
              Experience
            </Typography>
            {experiences.map((exp, i) => (
              <div key={i} className="about-me__item">
                <Typography variant="p2" className="about-me__item-title">
                  {exp.title}
                </Typography>
                <Typography variant="p3" className="about-me__item-meta">
                  {exp.company} | {exp.period}
                </Typography>
                <Typography variant="p3" className="about-me__item-desc">
                  {exp.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Education Box */}
        <div className="about-me__content about-me__content--column">
          <div className="about-me__column">
            <Typography variant="h2" className="about-me__sub-header">
              Education
            </Typography>
            {education.map((edu, i) => (
              <div key={i} className="about-me__item">
                <Typography variant="p2" className="about-me__item-title">
                  {edu.degree}
                </Typography>
                <Typography variant="p3" className="about-me__item-meta">
                  {edu.school} | {edu.year}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
