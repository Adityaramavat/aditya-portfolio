
import { useState } from "react";

import {
  ExternalLink,
  FolderCode
} from "lucide-react";

import{Github

} from "lucide-brands";

import {
  motion,
  AnimatePresence,
  useReducedMotion
} from "framer-motion";

import { projects } from "../data/projects";

const filters = [
  "All",
  "React",
  "JavaScript",
  "PHP",
  "Python",
  "MySQL",
  "ASP.NET",
  "Node.js",
  "Express.js"
];

function isValidUrl(value) {
  try {
    const url = new URL(value);

    return (
      url.protocol === "https:" ||
      url.protocol === "http:"
    );
  } catch {
    return false;
  }
}

function ProjectCard({ project, index, reduceMotion }) {
  const githubAvailable = isValidUrl(project.githubUrl);
  const demoAvailable = isValidUrl(project.liveUrl);

  return (
    <motion.article
      layout={!reduceMotion}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 25 }
      }
      animate={{ opacity: 1, y: 0 }}
      exit={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, scale: 0.95 }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        delay: reduceMotion ? 0 : index * 0.04
      }}
      className="project-card"
    >

      {/* PROJECT IMAGE */}

      <div className="project-image">

        <div className="project-image-placeholder">
          <FolderCode size={40} />
          <span>Project Preview</span>
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        <span className="project-category">
          {project.category}
        </span>

      </div>

      {/* PROJECT DETAILS */}

      <div className="project-content">

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* TECHNOLOGY TAGS */}

        <div className="project-technologies">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="project-tech-tag"
            >
              {technology}
            </span>
          ))}

        </div>

        {/* PROJECT LINKS */}

        {(githubAvailable || demoAvailable) && (
          <div className="project-links">

            {githubAvailable && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <Github size={17} />
                GitHub
              </a>
            )}

            {demoAvailable && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link demo-link"
              >
                <ExternalLink size={17} />
                Live Demo
              </a>
            )}

          </div>
        )}

      </div>

    </motion.article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const reduceMotion = useReducedMotion();

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <section className="projects-section" id="projects">

      {/* SECTION HEADING */}

      <div className="section-heading">

        <span>MY WORK</span>

        <h2>Featured Projects</h2>

        <p>
          Some of my academic, personal and development projects.
        </p>

      </div>

      {/* PROJECT FILTERS */}

      <div className="project-filters" aria-label="Filter projects by technology">

        {filters.map((filter) => (

          <button
            type="button"
            key={filter}
            className={`filter-btn ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>

        ))}

      </div>

      {/* PROJECT COUNT */}

      <p className="project-count" aria-live="polite">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {/* PROJECT CARDS */}

      <motion.div
        layout={!reduceMotion}
        className="projects-grid"
      >

        <AnimatePresence mode="popLayout">

          {filteredProjects.map((project, index) => (

            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reduceMotion={reduceMotion}
            />

          ))}

        </AnimatePresence>

      </motion.div>

      {/* EMPTY RESULT */}

      {filteredProjects.length === 0 && (

        <div className="project-empty">

          <FolderCode size={42} />

          <h3>No Projects Found</h3>

          <p>
            There are no projects matching this technology.
          </p>

          <button
            type="button"
            onClick={() => setActiveFilter("All")}
          >
            Show All Projects
          </button>

        </div>

      )}

    </section>
  );
}

export default Projects;
