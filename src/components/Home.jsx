import React from "react";

function Hero() {
  return (
    <section id="home">
  <div className="home-inner">

    <div className="home-left">
      <p className="home-tagline">Aspiring Python Full-Stack Developer</p>

      <h1>Building clean, scalable  <br />and <span>reliable</span> web applications</h1>

      <p>
        Computer Science Engineering (AI & ML) undergraduate at Geethanjali Institute of Science and Technology, focused on designing and developing scalable full-stack web applications using modern Python technologies.
      </p>

      {/* Stats row */}
      <div className="home-stats">
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">2</span>
          <span className="stat-label">Internships</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">2026</span>
          <span className="stat-label">Graduating</span>
        </div>
      </div>

      <div className="home-buttons">
        <a href="/Abu_resume.pdf" target="_blank" rel="noreferrer">
          <button className="btn-outline">View Resume</button>
        </a>
        <a href="/Abu_resume.pdf" download="Shaik_Abubakar_Resume.pdf">
          <button className="btn-solid">Download Resume</button>
        </a>
      </div>
    </div>

    <div className="home-right">
      <div className="hero-illustration-wrapper">
       <img src="/Portfolio/hero-illustration.png" alt="Developer illustration" />
      </div>
    </div>

  </div>
</section>
  );
}

export default Hero;
