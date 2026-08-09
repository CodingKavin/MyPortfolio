import Icon from "../Iconography/Iconography";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copy">&copy; Made by Kavin Paul.</span>
      <div className="footer__socials">
        <a
          href="https://github.com/CodingKavin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="footer__link"
        >
          <Icon name="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/kavin-paul-dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="footer__link"
        >
          <Icon name="linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
