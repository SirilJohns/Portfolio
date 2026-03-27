import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setSuccess("Message sent successfully! I will reach out soon.");
    setErrors({});
    setFormData(initialState);
  };

  return (
    <div className="container section-space">
      <div className="glass-card p-4 p-md-5 fade-in-up">
        <h2 className="mb-4">Contact</h2>
        <div className="row g-4">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`form-control glass-input ${errors.name ? "is-invalid" : ""}`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name ? <div className="invalid-feedback">{errors.name}</div> : null}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-control glass-input ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email ? <div className="invalid-feedback">{errors.email}</div> : null}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className={`form-control glass-input ${errors.message ? "is-invalid" : ""}`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message ? (
                  <div className="invalid-feedback">{errors.message}</div>
                ) : null}
              </div>

              <button type="submit" className="btn btn-glow">
                Let&apos;s build something amazing
              </button>
              {success ? <p className="text-success mt-3 mb-0">{success}</p> : null}
            </form>
          </div>
          <div className="col-lg-4">
            <div className="glass-mini p-4 rounded-4 h-100">
              <h3 className="h6 text-info">Connect With Me</h3>
              <a
                href="https://linkedin.com/in/example"
                target="_blank"
                rel="noreferrer"
                className="d-block mt-3 social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/example"
                target="_blank"
                rel="noreferrer"
                className="d-block mt-2 social-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
