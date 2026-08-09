import { useState } from "react";
import { useNavigation } from "../../context/NavigationContext";
import Typography from "../Typography/Typography";
import Icon from "../Iconography/Iconography";
import ThemePicker from "../ThemePicker/ThemePicker";
import type { SectionId } from "../../types";
import "./Navigation.scss";

const NAV_ITEMS: { id: SectionId; num: string; label: string }[] = [
  { id: "about", num: "01", label: "About" },
  { id: "path", num: "02", label: "Path" },
  { id: "skills", num: "03", label: "Skills" },
  { id: "work", num: "04", label: "Work" },
  { id: "contact", num: "05", label: "Contact" },
];

const Wordmark = () => (
  <div className="navbar__wordmark">
    <span className="navbar__prompt">~/</span>
    <span className="navbar__typing-container">
      <span className="navbar__typing-text">kavin-paul</span>
      <span className="navbar__cursor">_</span>
    </span>
  </div>
);

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

const Navigation = () => {
  const { activeSection, setActiveSection } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  const getTabClass = (id: SectionId) =>
    `navbar__tab ${activeSection === id ? "navbar__tab--active" : ""}`;

  const renderNavItems = () =>
    NAV_ITEMS.map((item) => (
      <button
        key={item.id}
        type="button"
        className={getTabClass(item.id)}
        aria-current={activeSection === item.id ? "page" : undefined}
        onClick={() => handleNavigate(item.id)}
      >
        <span className="navbar__tab-num">{item.num}</span>
        <Typography variant="p1" className="navbar__tab-label">
          {item.label}
        </Typography>
      </button>
    ));

  return (
    <>
      {/* Desktop rail */}
      <aside className="navbar__rail">
        <div className="navbar__rail-top">
          <Wordmark />
          <Typography variant="p2" className="navbar__tagline">
            Software Engineer · SDET
            <br />
            Toronto, ON
          </Typography>
          <SocialLinks />
        </div>

        <nav className="navbar__rail-nav">{renderNavItems()}</nav>

        <div className="navbar__rail-bottom">
          <ThemePicker variant="rail" />
        </div>
      </aside>

      {/* Mobile header */}
      <header className="navbar__mobile-header">
        <div className="navbar__mobile-row">
          <Wordmark />
          <div className="navbar__mobile-actions">
            <SocialLinks />
            <button
              type="button"
              className={`navbar__hamburger ${isOpen ? "navbar__hamburger--open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar__hamburger-line"></span>
              <span className="navbar__hamburger-line"></span>
              <span className="navbar__hamburger-line"></span>
            </button>
          </div>
        </div>

        <div
          className={`navbar__mobile-menu ${isOpen ? "navbar__mobile-menu--open" : ""}`}
        >
          {renderNavItems()}
          <ThemePicker variant="mobile" />
        </div>
      </header>

      {/* Tablet header */}
      <header className="navbar__tablet-header">
        <div className="navbar__tablet-row">
          <Wordmark />
          <div className="navbar__tablet-actions">
            <ThemePicker variant="tablet" />
            <SocialLinks />
          </div>
        </div>
        <nav className="navbar__tablet-nav">{renderNavItems()}</nav>
      </header>
    </>
  );
};

export default Navigation;
