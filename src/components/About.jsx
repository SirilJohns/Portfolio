function About() {
  return (
    <div className="container section-space">
      <div className="glass-card p-4 p-md-5 fade-in-up">
        <h2 className="mb-4">About</h2>
        <div className="row g-4">
          <div className="col-md-7">
            <p className="text-light-emphasis mb-3">
              I am a frontend engineer focused on creating intuitive user interfaces with
              strong design systems, reusable component architecture, and accessibility in
              mind. I enjoy turning complex requirements into elegant, high-performance web
              products.
            </p>
            <p className="text-light-emphasis mb-0">
              My approach blends engineering precision with design thinking to deliver
              products that are both visually refined and technically robust.
            </p>
          </div>
          <div className="col-md-5">
            <div className="glass-mini p-3 rounded-3 mb-3">
              <h3 className="h6 mb-2 text-info">Education</h3>
              <p className="mb-0 text-light-emphasis">
                B.Tech in Computer Science, specialized in web technologies and UI systems.
              </p>
            </div>
            <div className="glass-mini p-3 rounded-3 mb-3">
              <h3 className="h6 mb-2 text-info">Experience</h3>
              <p className="mb-0 text-light-emphasis">
                4+ years building production React applications and frontend design systems.
              </p>
            </div>
            <div className="glass-mini p-3 rounded-3">
              <h3 className="h6 mb-2 text-info">Impact</h3>
              <p className="mb-0 text-light-emphasis">
                Increased engagement by 34% through UX modernization and frontend performance work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
