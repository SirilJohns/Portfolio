const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "An analytics-driven admin dashboard with charts, product insights, and role-based workflows.",
    tech: "React, Bootstrap, Chart.js, REST API",
    github: "https://github.com/example/ecommerce-dashboard",
    demo: "https://example.com/ecommerce-dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "TaskFlow Productivity App",
    description:
      "A drag-and-drop task manager with filters, priority labels, and responsive Kanban board layout.",
    tech: "React, Bootstrap, Context API, LocalStorage",
    github: "https://github.com/example/taskflow-app",
    demo: "https://example.com/taskflow-app",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Travel Landing Platform",
    description:
      "A conversion-focused travel website with animated sections and optimized responsive performance.",
    tech: "React, Bootstrap, Framer Motion, Vite",
    github: "https://github.com/example/travel-landing",
    demo: "https://example.com/travel-landing",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
];

function Projects() {
  return (
    <div className="container section-space">
      <h2 className="mb-4">Projects</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.title} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 rounded-4 project-card glass-card overflow-hidden">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="card-body d-flex flex-column p-4">
                <h3 className="h5">{project.title}</h3>
                <p className="text-light-emphasis">{project.description}</p>
                <p className="small text-light-emphasis mb-4">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <div className="mt-auto d-flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-glass btn-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-glow btn-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
