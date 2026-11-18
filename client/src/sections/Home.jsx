import AnimatedRoleTitle from "../components/AnimatedRoleTitle";
import {  
    Github, 
    Linkedin }
 from "lucide-brands";

 import{
    ArrowRight,
    Download
 }from "lucide-react";

function Home() {
  return (
    <section className="home-section" id="home">

      <div className="home-content">

        <div className="home-text">

          <p className="welcome-text">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            I'm <span>Aditya Ramavat</span>
          </h1>

          <h2 className="home-role">
          <AnimatedRoleTitle />
          </h2>

          <p className="home-description">
            I am an MCA student passionate about web
            development, programming and creating
            modern, responsive and user-friendly
            digital experiences.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="primary-btn">
              Explore My Work <ArrowRight size={18} />
            </a>

            <a
              href="/aditya_cv1.pdf"
              className="secondary-btn"
              download
            >
              Download CV <Download size={18} />
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/ADITYARAMAVAT"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/A-RAMAVAT2004"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

          </div>

        </div>

        <div className="home-image">
          <div className="image-glow">
            <img
              src="/images/aditya.jpeg"
              alt="Aditya Ramavat"
            />
          </div>
        </div>

      </div>

      <div className="home-bottom">
        <span>Scroll to explore</span>
        <span className="scroll-line"></span>
      </div>

    </section>
  );
}

export default Home;
