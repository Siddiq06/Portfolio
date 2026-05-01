import React from "react";

function Skills() {
  return (
    <section id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-box">
          <h3>Programming</h3>
          <p>Python, JavaScript</p>
        </div>

        <div className="skill-box">
          <h3>Frontend Development</h3>
          <p>HTML, CSS, Bootstrap, React</p>
        </div>

        <div className="skill-box">
          <h3>Backend Development</h3>
          <p>Flask, REST API Development</p>
        </div>

        <div className="skill-box">
          <h3>Database Management</h3>
          <p>MySQL</p>
        </div>

        <div className="skill-box">
          <h3>Tools & Version Control</h3>
          <p>GitHub, Git, Postman, VS Code</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;