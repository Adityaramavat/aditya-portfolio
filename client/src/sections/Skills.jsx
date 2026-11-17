
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages I have studied and practiced.",
    icon: Code2,
    skills: [
      "Python",
      "C",
      "C++",
      "Java"
    ]
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive websites.",
    icon: Monitor,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js (Basic)",
      "Bootstrap"
    ]
  },
  {
    title: "Backend Development",
    description: "Server-side development technologies.",
    icon: Server,
    skills: [
      "Node.js (Basic)",
      "PHP"
    ]
  },
  {
    title: "Database Management",
    description: "Working with relational and NoSQL databases.",
    icon: Database,
    skills: [
      "MySQL",
      "MongoDB (Basic)"
    ]
  },
  {
    title: "Tools & Platforms",
    description: "Tools used in development and project work.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Canva"
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">

        <span>MY EXPERTISE</span>

        <h2>Technical Skills</h2>

        <p>
          Technologies and tools I use while learning
          and developing projects.
        </p>

      </div>

      <div className="skills-grid">

        {skillGroups.map((group, index) => {

          const Icon = group.icon;

          return (
            <div className="skill-card" key={group.title}>

              <div className="skill-card-icon">
                <Icon size={26} />
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-tags">

                {group.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Skills;
