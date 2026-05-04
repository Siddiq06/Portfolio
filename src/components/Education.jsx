import React from 'react';

const Education = () => {
  return (
    <section id="education" className="reveal">
      <h2>Education</h2>
      <div className="education-container reveal-children">

        <div className="education-card">
          <div className="education-header">
            <div className="education-left">
              <h3>B.Tech in Computer Science Engineering (AI & ML)</h3>
              <span className="education-college">Geethanjali Institute of Science and Technology</span>
            </div>
            <div className="education-meta">
              <span className="education-date">2022 – 2026</span>
              <span className="education-badge">CGPA: 7.5</span>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="education-header">
            <div className="education-left">
              <h3>Intermediate (MPC)</h3>
              <span className="education-college">Narayana Junior College</span>
            </div>
            <div className="education-meta">
              <span className="education-date">2020 – 2022</span>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="education-header">
            <div className="education-left">
              <h3>Secondary School Certificate (SSC)</h3>
              <span className="education-college">Narayana High School</span>
            </div>
            <div className="education-meta">
              <span className="education-date">2020</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
