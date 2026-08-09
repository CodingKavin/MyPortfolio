import { useState } from "react";
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import Icon from "../../components/Iconography/Iconography";
import MyResume from "../../assets/documents/Resume_Software_Engineer_Kavin_Paul.pdf";
import "./ContactPage.scss";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      label: "Email",
      value: "kavinp622@gmail.com",
      href: "mailto:kavinp622@gmail.com",
      isExternal: false,
      copyable: true,
    },
    {
      label: "Phone",
      value: "+1 (403) 618-3509",
      href: "tel:+14036183509",
      isExternal: false,
      copyable: false,
    },
    {
      label: "LinkedIn",
      value: "in/kavin-paul-dev",
      href: "https://www.linkedin.com/in/kavin-paul-dev/",
      isExternal: true,
      copyable: false,
    },
    {
      label: "GitHub",
      value: "CodingKavin",
      href: "https://github.com/CodingKavin",
      isExternal: true,
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="contact">
      <PageHeader kicker="Contact" heading="Let's talk." />

      <div className="contact__content">
        <Typography variant="p1" className="contact__intro">
          I'm looking for a software engineering team where precision
          matters. Fastest way to reach me is email.
        </Typography>

        <div className="contact__grid">
          {contactLinks.map((link) =>
            link.copyable ? (
              <div key={link.label} className="contact__tile">
                <Typography variant="p3" className="contact__tile-label">
                  {link.label}
                </Typography>
                <div className="contact__tile-value-row">
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : "_self"}
                    rel={link.isExternal ? "noreferrer" : undefined}
                    className="contact__tile-link"
                  >
                    <Typography variant="p1" className="contact__tile-value">
                      {link.value}
                    </Typography>
                  </a>
                  <button
                    type="button"
                    className={`contact__copy-btn ${copied ? "contact__copy-btn--success" : ""}`}
                    onClick={() => handleCopy(link.value)}
                    title="Copy to clipboard"
                  >
                    <Icon name={copied ? "check" : "copy"} />
                  </button>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noreferrer" : undefined}
                className="contact__tile"
              >
                <Typography variant="p3" className="contact__tile-label">
                  {link.label}
                </Typography>
                <Typography variant="p1" className="contact__tile-value">
                  {link.value}
                </Typography>
              </a>
            ),
          )}
        </div>

        <a
          href={MyResume}
          download="Resume_Software_Engineer_Kavin_Paul.pdf"
          className="contact__download-link"
        >
          <Button variant="primary" className="contact__btn">
            <Typography variant="p2">Download Resume (PDF)</Typography>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
