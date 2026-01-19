import React from 'react';
import "../App.css";
const ContactSection = () => {
  // Use a service like Formspree for the backend to keep it simple and secure
  return (
    <div className="contact-form-wrapper">
      <section className="contact-form-card">
        <form action="https://formspree.io/f/mkoojeeo" method="POST" className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Project details or job opportunity..."
            rows={4}
            required
            className="contact-textarea"
          />
          <button
            type="submit"
            className="contact-submit"
          >
            <span className='mr-0.5'> Send</span>
            <span>  Message </span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactSection;