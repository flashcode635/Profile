import React from 'react';

const ContactSection = () => {
  // Use a service like Formspree for the backend to keep it simple and secure
  return (
    <section className="p-8 max-w-2xl mx-auto bg-slate-900 text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="mb-6 text-gray-400">Available for Full-stack roles. Expect a response within 24 hours.</p>
      
      <form action="https://formspree.io/f/your-id" method="POST" className="flex flex-col gap-4">
        <input 
          type="text" name="name" placeholder="Your Name" required 
          className="p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
        />
        <input 
          type="email" name="email" placeholder="Your Email" required 
          className="p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
        />
        <textarea 
          name="message" placeholder="Project details or job opportunity..." rows={4} required 
          className="p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
        />
        <button 
          type="submit" 
          className="py-3 bg-blue-600 hover:bg-blue-700 transition rounded font-bold uppercase tracking-wide"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;