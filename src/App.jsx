import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {

  useEffect(() => {
    const btn = document.getElementById("backToTop");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        btn.style.display = "flex";
      } else {
        btn.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      <button
        id="backToTop"
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆
      </button>
    </>
  );
}

export default App;
