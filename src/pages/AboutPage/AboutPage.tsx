import MyPic from "../../assets/Images/pic_kavin.jpg";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import MyResume from "../../assets/documents/Resume_Software_Engineer_Kavin_Paul.pdf";
import "./AboutPage.scss";

const AboutPage = () => {
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
              functional applications and am currently diving into the AWS
              ecosystem.
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
    </section>
  );
};

export default AboutPage;
