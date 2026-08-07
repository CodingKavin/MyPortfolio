import { ThemeProvider } from "./context/ThemeProvider";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navigation />
        <main>
          <section id="about">
            <AboutPage />
          </section>
          <section id="skills">
            <SkillsPage />
          </section>
          <section id="projects">
            <ProjectsPage />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
