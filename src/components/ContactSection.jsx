import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex justify-center p-4">
      <section className="w-[min(720px,90vw)] bg-surface border border-border rounded-[1.25rem] p-8 transition-all duration-300 hover:shadow-[0_18px_22px_rgba(0,50,32,0.396)] hover:-translate-y-2.5">
        <form action="https://formspree.io/f/mkoojeeo" method="POST" className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full py-[0.9rem] px-4 rounded-[0.9rem] border border-border bg-white text-text transition-[border-color,box-shadow] duration-200 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(49,98,99,0.15)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full py-[0.9rem] px-4 rounded-[0.9rem] border border-border bg-white text-text transition-[border-color,box-shadow] duration-200 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(49,98,99,0.15)]"
          />
          <textarea
            name="message"
            placeholder="Project details or job opportunity..."
            rows={4}
            required
            className="w-full py-[0.9rem] px-4 rounded-[0.9rem] border border-border bg-white text-text transition-[border-color,box-shadow] duration-200 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(49,98,99,0.15)]"
          />
          <button
            type="submit"
            className="w-fit py-[0.85rem] px-[2.6rem] self-center rounded-[0.9rem] bg-gradient-to-br from-accent to-accent-soft text-accent-contrast border-none uppercase tracking-[0.05em] font-bold cursor-pointer transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(49,98,99,0.22)]"
          >
            <span className="mr-0.5"> Send</span>
            <span>  Message </span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactSection;
