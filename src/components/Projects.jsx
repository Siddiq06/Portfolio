import React from "react";

function Projects() {
  return (
    <section id="projects">

      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}

        <div className="project-card">
          <h3>Smart Study Planner</h3>

          <p>
            Full-stack web application for managing daily
            study tasks with progress tracking and analytics.
          </p>

          <p className="tech">
            React | Flask | MySQL | Chart.js
          </p>

          <div className="project-links">
            <a href="#">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <h3>Task Scheduling System</h3>

          <p>
            Intelligent scheduling system using
            optimization techniques for task allocation.
          </p>

          <p className="tech">
            Python | Flask | Machine Learning
          </p>

          <div className="project-links">
            <a href="#">GitHub</a>
          </div>
        </div>


        {/* Project 2 */}

        <div className="project-card">
          <h3>Sales Dashboard</h3>

          <p>
            Interactive dashboard to visualize sales data
            using charts and real-time analytics.
          </p>

          <p className="tech">
            React | Flask | MySQL
          </p>

          <div className="project-links">
            <a href="https://github.com/Siddiq06/sales-data-analysis-dashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        {/* Project 3 */}

        <div className="project-card">
          <h3>Expense Tracker</h3>

          <p>
            Web application to track daily expenses
            with CRUD operations and automation.
          </p>

          <p className="tech">
            Python | Flask | MySQL
          </p>

          <div className="project-links">
            <a href="https://github.com/Siddiq06/Daily-Expense-Automation" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        {/* Project 4 */}

        
      </div>

    </section>
  );
}

export default Projects;