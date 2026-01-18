function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-heading">Experience</h2>

      <div className="cards-grid">

        {/* Full Time Experience */}
      <div className="project-card">
  <h3>Application Support Engineer (IT-Enabled) – L1</h3>
  <p><strong>Swiggy Platform</strong></p>
  <p>Digitide Solutions (Connect Business Solutions), Hyderabad</p>
  <p>📅 July 2024 – Present</p>

  <ul>
    <li>Handled <strong>50–80 L1 tickets daily</strong> via chat (80%) and calls (20)</li>
    <li>Performed order recovery & cancellation analysis to reduce customer impact</li>
    <li>Validated backend workflows, JSON data, payments, and delivery updates</li>
    <li>Ensured <strong>SLA compliance</strong> through accurate ticket categorization & closure</li>
    <li>Escalated complex issues to operations, logistics, and backend teams</li>
    <li>Maintained <strong>95%+ ticket accuracy</strong> during peak support hours</li>
  </ul>

  <p>
    <strong>Tech Stack:</strong> Salesforce CRM, JSON, Oracle SQL (Basics), Core Java, Linux/Windows
  </p>
</div>

        {/* Internship & Training */}
        <div className="project-card">
          <h3>Java Lab Intern – Full Stack Java Program</h3>
          <p><strong>Naresh i Technologies</strong>, Hyderabad</p>
          <p>📅 Nov 2022 – Apr 2023 (6 Months)</p>

          <ul>
            <li>Assisted students with Core Java, OOP, JDBC, Spring Boot</li>
            <li>Debugged code issues weekly to improve success rates</li>
            <li>Guided peers on Git & GitHub workflows</li>
            <li>Built CRUD backend mini projects using Spring Boot & Oracle SQL</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
