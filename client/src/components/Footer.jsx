
import {  
    Github, 
    Linkedin }
 from "lucide-brands";

import {
  Mail,
  ArrowUp,
  Code2
} from "lucide-react";


function Footer() {

  const currentYear = new Date().getFullYear();

  // Replace these with your actual profile URLs.
              
  const githubUrl ="https://github.com/ADITYARAMAVAT";
  const linkedinUrl = "https://www.linkedin.com/in/A-RAMAVAT2004";

  const email = import.meta.env.VITE_CONTACT_EMAIL || "";

  const navigation = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Achievements", "#achievements"],
    ["Certifications", "#certifications"],
    ["Contact", "#contact"]
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: githubUrl,
      icon: Github
    },
    {
      name: "LinkedIn",
      url: linkedinUrl,
      icon: Linkedin
    }
  ];

  return (
    <footer className="footer">

      {/* FOOTER MAIN CONTENT */}

      <div className="footer-container">

        {/* BRAND INFORMATION */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            Aditya<span>.</span>
          </a>

          <p>
            Aspiring Full Stack Developer passionate
            about building modern, responsive and
            user-friendly web experiences.
          </p>

          <div className="footer-social-links">

            {socialLinks.map((social) => {

              const Icon = social.icon;

              if (!social.url) return null;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <Icon size={19} />
                </a>
              );
            })}

            {email && (
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                title="Email"
              >
                <Mail size={19} />
              </a>
            )}

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            {navigation.map(([name, url]) => (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>

        </div>

        {/* CONTACT INFORMATION */}

        <div className="footer-contact">

          <h3>Get In Touch</h3>

          <p>
            Interested in working together or
            discussing an opportunity?
          </p>

          {email && (
            <a
              href={`mailto:${email}`}
              className="footer-email"
            >
              <Mail size={17} />
              {email}
            </a>
          )}

          <a href="#contact" className="footer-contact-btn">
            Contact Me
          </a>

        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {currentYear} Aditya Ramavat.
          All Rights Reserved.
        </p>

        <p className="footer-made">
          Designed with <Code2 size={15} /> and passion.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
