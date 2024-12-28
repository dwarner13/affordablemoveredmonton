import React from 'react';
import { DollarSign, Shield, Clock, Award } from 'lucide-react';

const reasons = [
  {
    title: 'Competitive Pricing',
    description: 'Transparent, affordable rates with no hidden fees.',
    icon: DollarSign,
  },
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind.',
    icon: Shield,
  },
  {
    title: 'Reliable Service',
    description: 'On-time service with professional staff.',
    icon: Clock,
  },
  {
    title: 'Experience',
    description: 'Years of experience in the moving industry.',
    icon: Award,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Affordable Movers Edmonton
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We combine quality service with affordable rates
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <reason.icon size={24} />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{reason.title}</h3>
              <p className="mt-2 text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}