import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Typography from "../Typography/Typography.jsx";
import "./Navigation.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Added "skills" to the tracked sections
    const sections = ["about", "skills", "projects", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getNavClass = (id) =>
    `navbar__tab ${activeSection === id ? "navbar__tab--active" : ""}`;

  const ThemeToggle = () => (
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
        <ThemeToggle />
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
          {/* Mobile Skills Link */}
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
        </div>
      </div>

      <div className="navbar__right--tablet">
        <a href="#about" className={getNavClass("about")}>
          <Typography variant="p1" className="navbar__tab-text">
            About
          </Typography>
        </a>

        {/* Desktop Skills Link */}
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

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
