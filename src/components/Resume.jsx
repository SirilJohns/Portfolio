function Resume() {
  return (
    <div className="container section-space">
      <div className="glass-card p-4 p-md-5 fade-in-up">
        <h2 className="mb-4">Resume</h2>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="resume-preview p-4 rounded-4 h-100 glass-mini">
              <h3 className="h5 mb-3">Resume Preview</h3>
              <p className="mb-2 text-light-emphasis">
                <strong>Experience:</strong> Senior Frontend Engineer with 4+ years delivering
                production-grade React apps.
              </p>
              <p className="mb-2 text-light-emphasis">
                <strong>Education:</strong> B.Tech in Computer Science.
              </p>
              <p className="mb-4 text-light-emphasis">
                <strong>Skills Summary:</strong> React, JavaScript, Bootstrap, Git, UI/UX, API
                integration, responsive design.
              </p>
              <a href="/resume.pdf" download className="btn btn-glow">
                Download Resume
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="glass-mini p-4 rounded-4 h-100">
              <h3 className="h6 mb-3 text-info">Key Highlights</h3>
              <ul className="mb-0 ps-3 text-light-emphasis">
                <li className="mb-2">Built scalable component libraries for fast development.</li>
                <li className="mb-2">Improved Lighthouse performance scores above 90.</li>
                <li className="mb-2">Collaborated closely with design and product teams.</li>
                <li>Delivered responsive UX across mobile, tablet, and desktop.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
