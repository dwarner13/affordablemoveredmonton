import React from 'react';
import { Home, Building2, Truck, MapPin } from 'lucide-react';

const services = [
  {
    title: 'Local Moving',
    description: 'Professional residential and commercial moving services within Edmonton and surrounding areas.',
    icon: Home,
  },
  {
    title: 'Long Distance',
    description: 'Reliable long-distance moving solutions across Alberta with transparent pricing.',
    icon: Truck,
  },
  {
    title: 'Commercial Moving',
    description: 'Specialized business and office relocation services with minimal disruption.',
    icon: Building2,
  },
  {
    title: 'Special Services',
    description: 'Senior moving assistance, last-minute moves, and specialized item handling.',
    icon: MapPin,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Moving Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tailored solutions for every moving need in Edmonton and Northern Alberta
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 text-blue-600 mx-auto">
                <service.icon size={48} />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}