import { useEffect, useState } from "react";

const roles = ["Frontend Engineer", "UI/UX Designer", "React Architect"];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container section-space hero-shell">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <div className="glass-card p-4 p-md-5 fade-in-up">
            <span className="badge rounded-pill hero-badge mb-3">Premium Frontend Portfolio</span>
            <h1 className="display-4 fw-bold mb-3">Hi, I am Alex Morgan</h1>
            <h2 className="h4 typing-text mb-3">{roles[roleIndex]}</h2>
            <p className="lead text-light-emphasis mb-4">
              I craft recruiter-attracting product interfaces with scalable React architecture,
              conversion-focused UI/UX, and delightful micro-interactions.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-glow px-4">
                View Projects
              </a>
              <a href="/resume.pdf" download className="btn btn-glass px-4">
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 text-center">
          <div className="glass-card p-3 p-md-4 floating-card fade-in-up-delay">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
              alt="Profile portrait"
              className="img-fluid rounded-4 profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
