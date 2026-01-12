
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <h1>Hello 👋</h1>
        <h2>
          I’m <span>Dileep Bhutham</span>
        </h2>
        <h3>Application Support Engineer – Swiggy | Java Backend</h3>

        <div className="hero-buttons">
           <button className="btn-outline"><a href="#resume">My Resume</a></button> 
             <button className="btn-outline"><a href="#experience">Experience</a></button> 
             <button className="btn-outline"><a href="#projects">Projects</a></button> 
              <button className="btn-outline"><a href="#education">Education</a></button> 
                <button className="btn-outline"><a href="#contact">Contact Me</a></button> 
        </div>

        <div className="skills">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>REST APIs</span>
          <span>SQL</span>
          <span>GitHub</span>
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
