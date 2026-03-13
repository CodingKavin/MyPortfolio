import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import MyResume from "../../assets/documents/Resume - Kavin Paul.pdf";
import "./ContactPage.scss";

const ContactPage = () => {
  const contactLinks = [
    {
      label: "Email:",
      value: "kavinp622@gmail.com",
      url: "mailto:kavinp622@gmail.com",
    },
    { label: "Phone:", value: "+1 (403) 618-3509", url: "tel:+14036183509" },
    {
      label: "LinkedIn:",
      value: "https://www.linkedin.com/in/kavin-paul-dev/",
      url: "https://www.linkedin.com/in/kavin-paul-dev/",
    },
    {
      label: "GitHub:",
      value: "https://github.com/CodingKavin",
      url: "https://github.com/CodingKavin",
    },
  ];

  return (
    <section className="contact">
      <Typography variant="h1" className="contact__header">
        Get In Touch
      </Typography>

      <div className="contact__container">
        <div className="contact__info">
          {contactLinks.map((link) => (
            <div key={link.label} className="contact__item">
              <Typography variant="h2" className="contact__label">
                {link.label}
              </Typography>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <Typography variant="p1">{link.value}</Typography>
              </a>
            </div>
          ))}
        </div>

        <div className="contact__resume-section">
          <Typography variant="h2" className="contact__label">
            Resume
          </Typography>
          <a
            href={MyResume}
            download="Kavin_Paul_Resume.pdf"
            className="contact__download-link"
          >
            <Button variant="primary" className="contact__btn">
              <Typography variant="p2">Download Resume (PDF)</Typography>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
