function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card">
        <p className="contact-item">
          📧 <span>Email</span><br />
          <a href="mailto:dileepbhutham@gmail.com">
            dileepbhutham@gmail.com
          </a>
        </p>

        <p className="contact-item">
          💻 <span>GitHub</span><br />
          <a
            href="https://github.com/DileepNiki121"
            target="_blank"
          >
            github.com/DileepNiki121
          </a>
        </p>

        <p className="contact-item">
          🔗 <span>LinkedIn</span><br />
          <a
            href="https://linkedin.com/in/dileep-bhutham"
            target="_blank"
          >
            linkedin.com/in/dileep-bhutham
          </a>
        </p>
      </div>

      <p className="contact-footer">
        Let’s connect and build something great 🚀
      </p>
    </section>
  );
}

export default Contact;
