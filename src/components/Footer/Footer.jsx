import Typography from "../Typography/Typography";
import Icon from "../Iconography/Iconography";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="p" className="footer__copy">
        &copy; Made by Kavin Paul.
      </Typography>
      <div className="footer__socials">
        <a
          href="https://github.com/CodingKavin"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <Icon name="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/kavin-paul-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <Icon name="linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
