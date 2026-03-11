import { NavLink } from "react-router-dom";
import { useState } from "react";
import Typography from "../Typography/Typography.jsx";
import "./Navigation.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const getNavClass = ({ isActive }) =>
    isActive ? "navbar__tab navbar__tab--active" : "navbar__tab";

  return (
    <nav className="navbar">
      <div className="navbar__left"></div>

      <div className="navbar__right--mobile">
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
      </div>
    </nav>
  );
};

export default Navigation;
