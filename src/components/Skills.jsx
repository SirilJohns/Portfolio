const skills = [
  { name: "HTML", icon: "H" },
  { name: "CSS", icon: "C" },
  { name: "JavaScript", icon: "J" },
  { name: "React", icon: "R" },
  { name: "Bootstrap", icon: "B" },
  { name: "Git", icon: "G" },
];

function Skills() {
  return (
    <div className="container section-space">
      <div className="glass-card p-4 p-md-5 fade-in-up">
        <h2 className="mb-4 text-center">Skills</h2>
        <div className="row g-3 justify-content-center">
          {skills.map((skill) => (
            <div key={skill.name} className="col-6 col-md-4 col-lg-2">
              <div className="glass-mini rounded-4 skill-box text-center h-100">
                <span className="skill-icon mx-auto mb-2">{skill.icon}</span>
                <p className="mb-0 fw-medium">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
