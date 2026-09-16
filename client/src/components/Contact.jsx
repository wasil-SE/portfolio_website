import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-lead">
          <p className="eyebrow-path">/contact</p>
          <h2 className="section-heading">Let's work together.</h2>
          <p className="contact-copy">Have a project in mind? Let's build something useful.</p>
        </div>

        <div className="contact-actions" aria-label="Contact options">
          <a
            className="btn btn-primary contact-action"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=wasiljaved464@gmail.com&su=Project%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a>

          <a
            className="btn btn-ghost contact-action"
            href="https://wa.me/923159112080"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp placeholder — add your phone number"
          >
            WhatsApp
            <span className="contact-placeholder"></span>
          </a>

          <a
            className="btn btn-ghost contact-action"
            href="https://github.com/wasil-SE"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="btn btn-ghost contact-action"
            href="https://www.linkedin.com/in/wasil-javed-332171404"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn placeholder — add your profile URL"
          >
            LinkedIn
            <span className="contact-placeholder"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
