import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Typography from "../Typography/Typography";
import Icon from "../Iconography/Iconography";
import type { SectionId } from "../../types";
import "./Navigation.scss";

const SECTION_IDS: SectionId[] = ["about", "skills", "projects", "contact"];

const isSectionId = (id: string): id is SectionId =>
  (SECTION_IDS as string[]).includes(id);

const SocialLinks = () => (
  <div className="navbar__socials">
    <a
      href="https://github.com/CodingKavin"
      target="_blank"
      rel="noopener noreferrer"
      className="navbar__social-link"
    >
      <Icon name="github" />
    </a>
    <a
      href="https://www.linkedin.com/in/kavin-paul-dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="navbar__social-link"
    >
      <Icon name="linkedin" />
    </a>
  </div>
);

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle = ({ isDarkMode, toggleTheme }: ThemeToggleProps) => (
  <div
    className={`navbar__toggle ${isDarkMode ? "" : "navbar__toggle--light"}`}
    onClick={toggleTheme}
  >
    <span className="navbar__toggle-icon">🌙</span>
    <div className="navbar__toggle-pill">
      <div className="navbar__toggle-circle"></div>
    </div>
    <span className="navbar__toggle-icon">☀️</span>
  </div>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isSectionId(entry.target.id)) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getNavClass = (id: SectionId) =>
    `navbar__tab ${activeSection === id ? "navbar__tab--active" : ""}`;

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="#about" className="navbar__logo-link">
          <Typography variant="h1" className="navbar__left-name">
            <span className="navbar__prompt">~/</span>
            <span className="navbar__typing-container">
              <span className="navbar__typing-text">kavin-paul</span>
              <span className="navbar__cursor">_</span>
            </span>
          </Typography>
        </a>
      </div>

      <div className="navbar__right--mobile">
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <button
          className={`navbar__hamburger ${isOpen ? "navbar__hamburger--open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>

        <div
          className={`navbar__mobile-menu ${isOpen ? "navbar__mobile-menu--open" : ""}`}
        >
          <a href="#about" className={getNavClass("about")} onClick={closeMenu}>
            <Typography variant="p1">About</Typography>
          </a>
          <a
            href="#skills"
            className={getNavClass("skills")}
            onClick={closeMenu}
          >
            <Typography variant="p1">Skills</Typography>
          </a>
          <a
            href="#projects"
            className={getNavClass("projects")}
            onClick={closeMenu}
          >
            <Typography variant="p1">Projects</Typography>
          </a>
          <a
            href="#contact"
            className={getNavClass("contact")}
            onClick={closeMenu}
          >
            <Typography variant="p1">Contact</Typography>
          </a>

          <div className="navbar__mobile-socials">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="navbar__right--tablet">
        <a href="#about" className={getNavClass("about")}>
          <Typography variant="p1" className="navbar__tab-text">
            About
          </Typography>
        </a>
        <a href="#skills" className={getNavClass("skills")}>
          <Typography variant="p1" className="navbar__tab-text">
            Skills
          </Typography>
        </a>
        <a href="#projects" className={getNavClass("projects")}>
          <Typography variant="p1" className="navbar__tab-text">
            Projects
          </Typography>
        </a>
        <a href="#contact" className={getNavClass("contact")}>
          <Typography variant="p1" className="navbar__tab-text">
            Contact
          </Typography>
        </a>
        <SocialLinks />
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default Navigation;
