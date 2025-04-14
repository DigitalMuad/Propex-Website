import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Propex helped me find my dream home in just two weeks!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Investor',
      content: 'Great service and professional agents.',
      rating: 4
    },
    {
      id: 3,
      name: 'Emily Wilson',
      role: 'First-time Buyer',
      content: 'Made the whole process so easy and stress-free.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className="content">"{testimonial.content}"</p>
            <div className="author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
