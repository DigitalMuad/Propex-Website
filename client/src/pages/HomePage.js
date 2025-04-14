import React, { lazy, Suspense } from 'react';
import '../styles/HomePage.css';

const FeaturedProperties = lazy(() => import('../components/FeaturedProperties'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const ContactSection = lazy(() => import('../components/ContactSection'));

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Property</h1>
          <p>Discover the perfect home with our curated selection</p>
        </div>
      </section>
      
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <FeaturedProperties />
        <Testimonials />
      </Suspense>

      <section id="contact">
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <ContactSection />
        </Suspense>
      </section>
    </div>
  );
}

export default HomePage;
