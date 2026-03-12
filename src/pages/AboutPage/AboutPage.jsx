import MyPic from "../../assets/Images/pic_kavin.jpg";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
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
              high-level logic and low-level implementation. With 8 years in the
              banking industry, transitioning from financial advising to
              Automation, I have built my career on precision and
              problem-solving. I am a fast learner with a nerdy obsession for
              how things work under the hood, whether it is complex sci-fi lore
              or a JWT validation flow. I specialize in building clean,
              functional applications like my recent full-stack budget tracker,
              and I am currently deep-diving into the Java, Spring Boot, and AWS
              ecosystem. When I'm not at my terminal, I'm usually gaming,
              watching anime, or heading to the mountains for some snowboarding
              and hiking. I am a direct communicator who values efficiency,
              clear documentation, and getting the job done right.
            </Typography>
            <Button
              variant="primary"
              isLink={true}
              to="/projects"
              className="about-me__btn"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
