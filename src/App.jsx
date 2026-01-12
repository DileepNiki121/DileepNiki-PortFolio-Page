import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ResumeSection from "./components/ResumeSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ResumeSection/>
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}

export default App;
