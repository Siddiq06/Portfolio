import React from "react";

function Internship() {
  return (
    <section id="internship">

      <h2>Internships</h2>

      <div className="internship-container">

        {/* Internship 1 */}

        <div className="internship-card">

          <div className="internship-header">

            <div>
              <h3>AI with Python Intern</h3>

              <span className="internship-company">
                Assistive Infotech
              </span>
            </div>

            <div className="internship-meta">

              <span className="internship-date">
                Dec 2025 – Mar 2026
              </span>

              <span className="internship-type">
                REMOTE
              </span>

            </div>

          </div>

          <ul className="internship-points">

            <li>
              Applied Python for data preprocessing tasks including
              handling missing values, cleaning datasets, and
              formatting data for machine learning workflows.
            </li>

            <li>
              Performed exploratory data analysis and prepared
              datasets for basic machine learning model evaluation
              using Python libraries.
            </li>

          </ul>

        </div>

        {/* Internship 2 */}

        <div className="internship-card">

          <div className="internship-header">

            <div>
              <h3>Python Intern</h3>

              <span className="internship-company">
                ExcelR
              </span>
            </div>

            <div className="internship-meta">

              <span className="internship-date">
                May 2025 – Jul 2025
              </span>

              <span className="internship-type">
                REMOTE
              </span>

            </div>

          </div>

          <ul className="internship-points">

            <li>
              Solved 20+ coding tasks involving debugging and
              logical problem-solving using Python.
            </li>

            <li>
              Gained familiarity with industry coding practices
              and version control basics while completing
              structured internship exercises.
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Internship;