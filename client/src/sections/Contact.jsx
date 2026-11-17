
import { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";

import {
  Mail,
  Send,
  User,
  MessageSquare,
  BriefcaseBusiness,
  Code2,
  CheckCircle2,
  AlertCircle,
  X,
  LoaderCircle
} from "lucide-react";

import {
  motion,
  AnimatePresence,
  useReducedMotion
} from "framer-motion";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL;

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function validateForm(form) {
  const errors = {};

  const name = form.name.trim();
  const email = form.email.trim();
  const subject = form.subject.trim();
  const message = form.message.trim();

  if (name.length < 2) {
    errors.name = "Please enter at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Name cannot exceed 80 characters.";
  }

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errors.email = "Email address is required.";
  } else if (
    !emailPattern.test(email) ||
    email.length > 254
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (subject.length < 3) {
    errors.subject = "Subject must contain at least 3 characters.";
  } else if (subject.length > 120) {
    errors.subject = "Subject cannot exceed 120 characters.";
  }

  if (message.length < 20) {
    errors.message = "Message must contain at least 20 characters.";
  } else if (message.length > 3000) {
    errors.message = "Message cannot exceed 3000 characters.";
  }

  return errors;
}

function Contact() {

  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  const [toast, setToast] = useState(null);

  const reduceMotion = useReducedMotion();

  // Automatically dismiss notifications

  useEffect(() => {

    if (!toast) return;

    const timer = window.setTimeout(() => {
      setToast(null);
    }, 6000);

    return () => window.clearTimeout(timer);

  }, [toast]);

  // Handle form input

  const handleChange = (event) => {

    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: ""
    }));

  };

  // Submit contact form

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (isSending) return;

    setToast(null);

    const validationErrors = validateForm(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {

      setToast({
        type: "error",
        message: "Please correct the highlighted fields."
      });

      return;
    }

    // Check EmailJS configuration

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {

      setToast({
        type: "error",
        message:
          "Email service is not configured. Please check your EmailJS environment variables."
      });

      return;
    }

    setIsSending(true);

    try {

      const templateParams = {
        name: form.name.trim(),
        email: form.email.trim(),
        title: form.subject.trim(),
        message: form.message.trim(),
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY
        }
      );

      setForm(initialForm);
      setErrors({});

      setToast({
        type: "success",
        message:
          "Your message has been sent successfully! Thank you for contacting me."
      });

    } catch (error) {

      console.error("EmailJS error:", error);

      setToast({
        type: "error",
        message:
          "Unable to send your message. Please try again later or contact me by email."
      });

    } finally {

      setIsSending(false);

    }
  };

  return (

    <section
      className="contact-section"
      id="contact"
    >

      {/* SECTION HEADING */}

      <div className="section-heading">

        <span>GET IN TOUCH</span>

        <h2>Let's Work Together</h2>

        <p>
          Have a project, opportunity or question?
          I'd love to hear from you.
        </p>

      </div>

      {/* CONTACT CONTENT */}

      <div className="contact-container">

        {/* LEFT INFORMATION PANEL */}

        <motion.div
          className="contact-information"

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
            duration: reduceMotion ? 0 : 0.55
          }}
        >

          <div className="contact-info-heading">

            <h3>Let's Connect</h3>

            <p>
              Whether you are a recruiter, client,
              developer or someone with an interesting idea,
              feel free to contact me.
            </p>

          </div>

          <div className="contact-info-items">

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <Mail size={22} />
              </div>

              <div>
                <h4>Email</h4>

                {CONTACT_EMAIL ? (

                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>

                ) : (

                  <p>
                    Send me a message using the contact form.
                  </p>

                )}

              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <BriefcaseBusiness size={22} />
              </div>

              <div>
                <h4>Opportunities</h4>

                <p>
                  Internships, jobs and project collaborations.
                </p>

              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <Code2 size={22} />
              </div>

              <div>
                <h4>Development</h4>

                <p>
                  Web development, frontend and full stack projects.
                </p>

              </div>

            </div>

          </div>

          <div className="contact-info-footer">
            <span className="contact-status-dot"></span>
            Open to meaningful opportunities
          </div>

        </motion.div>

        {/* CONTACT FORM */}

        <motion.div
          className="contact-form-wrapper"

          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 25 }
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
            duration: reduceMotion ? 0 : 0.55,
            delay: reduceMotion ? 0 : 0.1
          }}
        >

          <div className="contact-form-header">

            <h3>Send Me a Message</h3>

            <p>
              Fill in the details below and I'll get back to you.
            </p>

          </div>

          {/* NOTIFICATIONS */}

          <div
            className="contact-toast-container"
            aria-live="polite"
            aria-atomic="true"
          >

            <AnimatePresence>

              {toast && (

                <motion.div
                  key={toast.type + toast.message}

                  className={`contact-toast ${toast.type}`}

                  role={
                    toast.type === "error"
                      ? "alert"
                      : "status"
                  }

                  initial={{
                    opacity: 0,
                    y: -10
                  }}

                  animate={{
                    opacity: 1,
                    y: 0
                  }}

                  exit={{
                    opacity: 0,
                    y: -10
                  }}

                  transition={{
                    duration: reduceMotion ? 0 : 0.25
                  }}
                >

                  {toast.type === "success" ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}

                  <span>{toast.message}</span>

                  <button
                    type="button"
                    aria-label="Dismiss notification"
                    onClick={() => setToast(null)}
                  >
                    <X size={17} />
                  </button>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

          {/* FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <div className="contact-form-row">

              {/* NAME */}

              <div className="form-group">

                <label htmlFor="contact-name">
                  Full Name *
                </label>

                <div className="contact-input-wrapper">

                  <User size={18} />

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={80}
                    autoComplete="name"
                    disabled={isSending}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "name-error" : undefined
                    }
                  />

                </div>

                {errors.name && (
                  <span
                    className="field-error"
                    id="name-error"
                  >
                    {errors.name}
                  </span>
                )}

              </div>

              {/* EMAIL */}

              <div className="form-group">

                <label htmlFor="contact-email">
                  Email Address *
                </label>

                <div className="contact-input-wrapper">

                  <Mail size={18} />

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={254}
                    autoComplete="email"
                    disabled={isSending}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                  />

                </div>

                {errors.email && (
                  <span
                    className="field-error"
                    id="email-error"
                  >
                    {errors.email}
                  </span>
                )}

              </div>

            </div>

            {/* SUBJECT */}

            <div className="form-group">

              <label htmlFor="contact-subject">
                Subject *
              </label>

              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="What would you like to discuss?"
                value={form.subject}
                onChange={handleChange}
                maxLength={120}
                disabled={isSending}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? "subject-error" : undefined
                }
              />

              {errors.subject && (
                <span
                  className="field-error"
                  id="subject-error"
                >
                  {errors.subject}
                </span>
              )}

            </div>

            {/* MESSAGE */}

            <div className="form-group">

              <label htmlFor="contact-message">
                Your Message *
              </label>

              <div className="contact-input-wrapper textarea-wrapper">

                <MessageSquare size={18} />

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  maxLength={3000}
                  disabled={isSending}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message
                      ? "message-error"
                      : "message-count"
                  }
                />

              </div>

              {errors.message && (
                <span
                  className="field-error"
                  id="message-error"
                >
                  {errors.message}
                </span>
              )}

              <div
                className="message-count"
                id="message-count"
              >
                {form.message.length}/3000 characters
              </div>

            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={isSending}
            >

              {isSending ? (

                <>
                  <LoaderCircle
                    className="sending-spinner"
                    size={19}
                  />

                  Sending Message...

                </>

              ) : (

                <>
                  <Send size={18} />

                  Send Message

                </>

              )}

            </button>

            <p className="contact-form-note">
              Your message will be sent directly to my email.
            </p>

          </form>

        </motion.div>

      </div>

    </section>

  );
}

export default Contact;
