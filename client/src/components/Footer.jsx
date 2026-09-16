import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="footer-mark">
          iamwasil
        </a>
        <p className="footer-meta">
          © {year} Wasil. Built by fun with React.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wasiljaved464@gmail.com&su=Project%20Inquiry" className="footer-email"
          target="_blank"
          rel="noopener noreferrer">
          wasiljaved464@gmail.com
        </a>
      </div>
    </footer>
  );
}
