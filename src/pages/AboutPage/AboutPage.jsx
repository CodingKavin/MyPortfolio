import MyPic from "../../assets/Images/pic_kavin.jpg";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import Tags from "../../components/Tags/Tags";
import MyResume from "../../assets/documents/Resume - Kavin Paul.pdf";
import "./AboutPage.scss";

const AboutPage = () => {
  const skillGroups = [
    {
      category: "Development",
      list: [
        "React.js",
        "Node.js",
        "Express.js",
        "JavaScript (ES6+)",
        "MySQL",
        "Supabase",
      ],
    },
    {
      category: "Automation & Robotic Process Automation",
      list: [
        "Selenium",
        "Robot Framework",
        "Cypress",
        "Postman",
        "API Testing",
        "RPA",
        "VM Deployment",
      ],
    },
    {
      category: "Infrastructure",
      list: ["Docker", "Jenkins", "Git", "GitHub Actions", "Cloudflare"],
    },
  ];

  return (
    <>
      <section className="about-me">
        <Typography variant="h1" className="about-me__header">
          About Me
        </Typography>
        <div className="about-me__content">
          <div className="about-me__pic">
            <img
              src={MyPic}
              alt="Picture of Kavin"
              className="about-me__pic-img"
            />
          </div>
          <div className="about-me__about">
            <div className="about-me__about-content">
              <Typography variant="p1" className="about-me__description">
                Hey I'm Kavin, I am a developer who bridges the gap between
                high-level logic and low-level implementation. With 8 years in
                the banking industry, transitioning from financial advising to
                Robotic Process Automation, I have built my career on precision
                and problem-solving. I am a fast learner with an innate
                curiosity for how things work under the hood, whether it's
                complex sci-fi lore or a JWT validation flow. I specialize in
                building clean, functional applications like my recent
                full-stack budget tracker, and I am currently diving into the
                Java, Spring Boot, and AWS ecosystem. When I'm not at my
                terminal, I'm usually gaming, watching anime, or heading to the
                mountains for some snowboarding and hiking. I am a direct
                communicator who values efficiency, clear documentation, and
                getting the job done right.
              </Typography>
              <div className="about-me__btn-container">
                <Button
                  variant="primary"
                  isLink={true}
                  to="/projects"
                  className="about-me__btn"
                >
                  <Typography variant="p2">View Projects</Typography>
                </Button>
                <a
                  href={MyResume}
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__download-link"
                >
                  <Button variant="secondary" className="about-me__btn">
                    <Typography variant="p2">View Resume</Typography>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <Typography variant="h1" className="about-me__header">
          Skills
        </Typography>
        <div className="skills__container">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group">
              <Typography variant="h2" className="skills__category-name">
                {group.category}
              </Typography>
              <div className="skills__list">
                {group.list.map((skill) => (
                  <Tags key={skill} text={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
