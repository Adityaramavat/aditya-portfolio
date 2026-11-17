
import { useEffect, useState } from "react";

import {
  Award,
  Eye,
  ExternalLink,
  X,
  ShieldCheck
} from "lucide-react";

import {
  motion,
  AnimatePresence,
  useReducedMotion
} from "framer-motion";

import { certifications } from "../data/certification";

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

function Certifications() {

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const reduceMotion = useReducedMotion();

  // Close popup using Escape key
  useEffect(() => {

    if (!selectedCertificate) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };

  }, [selectedCertificate]);

  return (
    <section
      className="certifications-section"
      id="certifications"
    >

      {/* SECTION HEADING */}

      <div className="section-heading">

        <span>MY QUALIFICATIONS</span>

        <h2>Certifications & Courses</h2>

        <p>
          Professional courses and learning experiences
          that contribute to my technical growth.
        </p>

      </div>

      {/* CERTIFICATE GRID */}

      <div className="certifications-grid">

        {certifications.map((certificate, index) => {

          const verifyAvailable = isValidUrl(
            certificate.credentialUrl
          );

          return (

            <motion.article
              key={certificate.id}

              className="certificate-card"

              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true,
                amount: 0.15
              }}

              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.1
              }}
            >

              {/* CERTIFICATE IMAGE */}

              <div className="certificate-image">

                <div className="certificate-placeholder">

                  <Award size={48} />

                  <span>Certificate Preview</span>

                </div>

                {certificate.image && (

                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                )}

                <span className="certificate-category">
                  {certificate.category}
                </span>

              </div>

              {/* CERTIFICATE DETAILS */}

              <div className="certificate-content">

                <div className="certificate-issuer">

                  <ShieldCheck size={16} />

                  <span>{certificate.issuer}</span>

                </div>

                <h3>{certificate.title}</h3>

                <p className="certificate-description">
                  {certificate.description}
                </p>

                <div className="certificate-skills">

                  {certificate.skills.map((skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  ))}

                </div>

                {certificate.issueDate && (

                  <p className="certificate-date">
                    Issued: {certificate.issueDate}
                  </p>

                )}

                {/* ACTION BUTTONS */}

                <div className="certificate-actions">

                  <button
                    type="button"
                    className="certificate-view-btn"

                    onClick={() =>
                      setSelectedCertificate(certificate)
                    }
                  >
                    <Eye size={17} />
                    View Certificate
                  </button>

                  {verifyAvailable && (

                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-verify-btn"
                    >
                      <ExternalLink size={16} />
                      Verify
                    </a>

                  )}

                </div>

              </div>

            </motion.article>

          );

        })}

      </div>

      {/* CERTIFICATE PREVIEW MODAL */}

      <AnimatePresence>

        {selectedCertificate && (

          <motion.div
            className="certificate-modal-overlay"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            transition={{
              duration: reduceMotion ? 0 : 0.2
            }}

            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedCertificate(null);
              }
            }}

          >

            <motion.div
              className="certificate-modal"

              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"

              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.95, y: 20 }
              }

              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}

              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95 }
              }

              transition={{ duration: 0.2 }}

            >

              <div className="certificate-modal-header">

                <div>
                  <h3 id="certificate-modal-title">
                    {selectedCertificate.title}
                  </h3>

                  <p>
                    {selectedCertificate.issuer}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close certificate preview"
                >
                  <X size={22} />
                </button>

              </div>

              <div className="certificate-modal-body">

                <div className="certificate-modal-preview">

                  <div className="certificate-placeholder">

                    <Award size={55} />

                    <span>
                      Add your certificate image to preview it
                    </span>

                  </div>

                  {selectedCertificate.image && (

                    <img
                      src={selectedCertificate.image}
                      alt={`${selectedCertificate.title} full certificate`}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                  )}

                </div>

              </div>

              <div className="certificate-modal-footer">

                {selectedCertificate.issueDate && (
                  <p>
                    Issued: {selectedCertificate.issueDate}
                  </p>
                )}

                {isValidUrl(
                  selectedCertificate.credentialUrl
                ) && (

                  <a
                    href={selectedCertificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certificate
                    <ExternalLink size={16} />
                  </a>

                )}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default Certifications;
