function ResumeSection() {
  return (
    <section  id="resume"  className="section resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-card">
        <p className="resume-text">
          Download my updated resume to know more about my skills,
          experience, and projects.
        </p>

        <a
          href="public/resume.pdf"
          download
          className="resume-btn"
        >
          ⬇ Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}

export default ResumeSection;
