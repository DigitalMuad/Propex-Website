import React from 'react';
import '../styles/ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> hello@propex.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Property St, Real Estate City</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-image">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
          alt="Luxury mansion"
        />
      </div>
    </section>
  );
}

export default ContactSection;
