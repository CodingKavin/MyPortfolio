import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navigation />
        <main>
          <section id="about">
            <AboutPage />
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
