import MyPic from "../../assets/Images/pic_kavin.jpg";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import MyResume from "../../assets/documents/Resume_Software_Engineer_Kavin_Paul.pdf";
import { useNavigation } from "../../context/NavigationContext";
import "./AboutPage.scss";

const AboutPage = () => {
  const { setActiveSection } = useNavigation();

  const facts = [
    { value: "8 yrs", label: "In banking, advising to automation" },
    { value: "50+", label: "RPA bots deployed at RBC" },
    { value: "$5M+", label: "Manual effort replaced" },
    { value: "Top 3%", label: "CIBC advisors in Calgary" },
  ];

  return (
    <section id="about" className="about-me">
      <PageHeader
        kicker="About"
        heading="Precision from finance, curiosity from engineering."
      />

      <div className="about-me__content">
        <div className="about-me__intro">
          <div className="about-me__pic">
            <img src={MyPic} alt="Kavin Paul" className="about-me__pic-img" />
          </div>
          <Typography variant="p1" className="about-me__description">
            I'm a developer who bridges the gap between high-level logic and
            low-level implementation. With 8 years in the banking industry,
            moving from financial advising into Robotic Process Automation,
            I've built my career on precision and problem-solving.
          </Typography>
          <Typography
            variant="p2"
            className="about-me__description about-me__description--secondary"
          >
            I'm a fast learner with an innate curiosity for how things work
            under the hood. I specialize in building clean, functional
            applications, and I'm currently deep in the AWS ecosystem and
            AI-orchestrated development workflows.
          </Typography>
          <div className="about-me__btn-container">
            <Button
              variant="primary"
              className="about-me__btn"
              onClick={() => setActiveSection("contact")}
            >
              <Typography variant="p2">Get in touch</Typography>
            </Button>
            <a
              href={MyResume}
              target="_blank"
              rel="noreferrer"
              className="about-me__download-link"
            >
              <Button variant="secondary" className="about-me__btn">
                <Typography variant="p2">Resume (PDF)</Typography>
              </Button>
            </a>
          </div>
        </div>

        <div className="about-me__facts">
          {facts.map((fact) => (
            <div key={fact.label} className="about-me__fact">
              <Typography variant="h2" className="about-me__fact-value">
                {fact.value}
              </Typography>
              <Typography variant="p2" className="about-me__fact-label">
                {fact.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
