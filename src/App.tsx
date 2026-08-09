import type { ComponentType } from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import { NavigationProvider } from "./context/NavigationProvider";
import { useNavigation } from "./context/NavigationContext";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import PathPage from "./pages/PathPage/PathPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import type { SectionId } from "./types";

const PAGES: Record<SectionId, ComponentType> = {
  about: AboutPage,
  path: PathPage,
  skills: SkillsPage,
  work: ProjectsPage,
  contact: ContactPage,
};

const AppShell = () => {
  const { activeSection } = useNavigation();
  const ActivePage = PAGES[activeSection];

  return (
    <>
      <div className="app-shell">
        <Navigation />
        <main>
          <ActivePage />
        </main>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppShell />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
