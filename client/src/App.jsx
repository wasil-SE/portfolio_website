import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import PageLoader from "./components/PageLoader.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("main > section");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    sections.forEach((section) => section.classList.add("reveal"));

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));

  return (
    <>
      <PageLoader />
      <Nav theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
