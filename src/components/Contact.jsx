import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">

      <h2>Contact</h2>

      <div className="contact-bar">

        {/* Email */}

        <div className="contact-item">
          <FaEnvelope className="contact-icon email" />

          <div>
            <span>Email</span>

            <a href="mailto:siddiqsk302@gmail.com">
              siddiqsk302@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}

        <div className="contact-item">
          <FaPhone className="contact-icon phone" />

          <div>
            <span>Phone</span>

            <a href="tel:+919963356330">
              +91 9963356330
            </a>
          </div>
        </div>

        {/* LinkedIn */}

        <div className="contact-item">
          <FaLinkedin className="contact-icon linkedin" />

          <div>
            <span>LinkedIn</span>

            <a
              href="https://linkedin.com/in/siddiqsk06"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/siddiqsk06
            </a>
          </div>
        </div>

        {/* GitHub */}

        <div className="contact-item">
          <FaGithub className="contact-icon github" />

          <div>
            <span>GitHub</span>

            <a
              href="https://github.com/siddiq06"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/siddiq06
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Contact;
