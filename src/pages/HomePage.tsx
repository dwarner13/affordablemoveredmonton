import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { ServiceAreas } from '../components/ServiceAreas';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceAreas />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}