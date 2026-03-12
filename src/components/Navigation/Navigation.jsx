import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Typography from "../Typography/Typography.jsx";
import "./Navigation.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const getNavClass = ({ isActive }) =>
    isActive ? "navbar__tab navbar__tab--active" : "navbar__tab";

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
        <NavLink to="/" className="navbar__logo-link">
          <Typography variant="h1" className="navbar__left-name">
            <span className="navbar__prompt">~/</span>
            <span className="navbar__typing-container">
              <span className="navbar__typing-text">kavin-paul</span>
              <span className="navbar__cursor">_</span>
            </span>
          </Typography>
        </NavLink>
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
          <NavLink to="/" className={getNavClass} onClick={closeMenu}>
            <Typography variant="p1">About</Typography>
          </NavLink>
          <NavLink to="/projects" className={getNavClass} onClick={closeMenu}>
            <Typography variant="p1">Projects</Typography>
          </NavLink>
          <NavLink to="/contact" className={getNavClass} onClick={closeMenu}>
            <Typography variant="p1">Contact</Typography>
          </NavLink>
        </div>
      </div>
      <div className="navbar__right--tablet">
        <NavLink to="/" className={getNavClass}>
          <Typography variant="p1" className="navbar__tab-text">
            About
          </Typography>
        </NavLink>

        <NavLink to="/projects" className={getNavClass}>
          <Typography variant="p1" className="navbar__tab-text">
            Projects
          </Typography>
        </NavLink>

        <NavLink to="/contact" className={getNavClass}>
          <Typography variant="p1" className="navbar__tab-text">
            Contact
          </Typography>
        </NavLink>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
