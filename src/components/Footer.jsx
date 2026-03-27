function Footer() {
  return (
    <footer className="py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0 small text-light-emphasis">
          © {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </p>
        <div className="d-flex gap-3">
          <a className="social-link" href="https://linkedin.com/in/example" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="social-link" href="https://github.com/example" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
