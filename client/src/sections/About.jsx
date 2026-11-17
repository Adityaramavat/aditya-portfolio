
import {
  GraduationCap,
  Code2,
  Lightbulb,
  Target,
  BookOpen
} from "lucide-react";

function About() {

  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Interested in creating modern, responsive and user-friendly websites."
    },
    {
      icon: Lightbulb,
      title: "Creative Thinking",
      description:
        "Enjoy learning new technologies and finding practical solutions."
    },
    {
      icon: Target,
      title: "Career Goals",
      description:
        "Working towards becoming a skilled Full Stack Developer."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Always improving my programming and development knowledge."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications",
      short: "MCA",
      institute: "Currently Pursuing",
      detail: "Semester 3"
    },
    {
      degree: "Bachelor of Computer Applications",
      short: "BCA",
      institute: "Completed",
      detail: "CGPA: 7.5"
    }
  ];

  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <span>ABOUT ME</span>

        <h2>Get To Know Me</h2>

        <p>
          A little introduction about my background,
          education and interests.
        </p>
      </div>

      <div className="about-container">

        {/* ABOUT DESCRIPTION */}

        <div className="about-description">

          <h3>
            Hello! I'm <span>Aditya Ramavat</span>
          </h3>

          <p>
            I am an MCA student with a strong interest
            in web development and software technologies.
            I enjoy building websites and applications
            that are modern, responsive and easy to use.
          </p>

          <p>
            I have explored frontend development,
            backend technologies and database management
            through academic and personal projects.
            I enjoy learning new tools, improving my coding
            skills and turning ideas into practical solutions.
          </p>

          <p>
            My goal is to grow as a Full Stack Developer
            and contribute to meaningful projects while
            continuously learning and improving.
          </p>

          <div className="about-highlights">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="highlight-card" key={index}>

                  <div className="highlight-icon">
                    <Icon size={24} />
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                </div>
              );
            })}

          </div>

        </div>

        {/* EDUCATION */}

        <div className="education-container">

          <h3 className="education-heading">
            My Education
          </h3>

          <div className="education-list">

            {education.map((item, index) => (

              <div className="education-card" key={index}>

                <div className="education-icon">
                  <GraduationCap size={23} />
                </div>

                <div>

                  <h4>{item.degree}</h4>

                  <p>{item.institute}</p>

                  <p className="education-detail">
                    {item.detail}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
