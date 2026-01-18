
function Hero() {
  return (
<section id="home" className="hero">
      <div className="hero-left">
        <h1>Hello 👋</h1>
        <h2>
          I’m <span>Dileep Bhutham</span>
        </h2>
        <h3>Application Support Engineer – Swiggy | Java Backend</h3>

     <div className="hero-buttons">
  <a href="/resume.pdf" download className="btn primary">My Resume</a>
  <a href="#experience" className="btn outline">Experience</a>
  <a href="#projects" className="btn outline">Projects</a>
  <a href="#education" className="btn outline">Education</a>
  <a href="#contact" className="btn primary">Contact Me</a>
</div>


     <div className="skills">
  <span className="skill java">Java</span>
  <span className="skill spring">Spring Boot</span>
  <span className="skill api">REST APIs</span>
  <span className="skill sql">SQL</span>
  <span className="skill github">GitHub</span>
</div>

      </div>

       {/* RIGHT */}
      <div className="hero-right">
        <div className="photo-circle">
          {/* ✅ THIS IS THE FIX */}
          <img src="/MY_PHOTO.jpg" alt="Dileep Bhutham" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
