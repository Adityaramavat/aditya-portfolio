
import {
  GraduationCap,
  BookOpen,
  Database,
  Layers,
  Code2,
  Trophy,
  ArrowUpRight
} from "lucide-react";

import {
  motion,
  useReducedMotion
} from "framer-motion";

import { achievements } from "../data/achievements";

const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  database: Database,
  layers: Layers,
  code: Code2
};

function Achievements() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="achievement-section"
      id="achievements"
    >

      {/* SECTION HEADING */}

      <div className="section-heading">

        <span>MY JOURNEY</span>

        <h2>Achievements & Milestones</h2>

        <p>
          Every milestone represents another step
          in my learning and professional journey.
        </p>

      </div>

      {/* ACHIEVEMENT TIMELINE */}

      <div className="achievement-timeline">

        {achievements.map((item, index) => {

          const Icon = iconMap[item.icon] || Trophy;

          return (
            <motion.article
              key={item.id}
              className="achievement-item"

              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: -25 }
              }

              whileInView={{
                opacity: 1,
                x: 0
              }}

              viewport={{
                once: true,
                amount: 0.2
              }}

              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.1
              }}
            >

              {/* TIMELINE ICON */}

              <div className="achievement-icon">
                <Icon size={23} />
              </div>

              {/* ACHIEVEMENT CARD */}

              <div className="achievement-card">

                <div className="achievement-card-top">

                  <span className="achievement-category">
                    {item.category}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="achievement-arrow"
                  />

                </div>

                <h3>{item.title}</h3>

                <p className="achievement-description">
                  {item.description}
                </p>

                <div className="achievement-card-bottom">

                  <span className="achievement-highlight">
                    {item.highlight}
                  </span>

                  <span className="achievement-status">
                    {item.status}
                  </span>

                </div>

              </div>

            </motion.article>
          );

        })}

      </div>

      {/* BOTTOM MESSAGE */}

      <div className="achievement-footer">

        <Trophy size={23} />

        <p>
          Every achievement is a new motivation
          to learn, build and grow.
        </p>

      </div>

    </section>
  );
}

export default Achievements;
