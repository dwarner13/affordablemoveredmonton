import React from 'react';
import { Home, Building2, CheckCircle, Package } from '../components/icons';

const detailedServices = [
  {
    title: 'Residential Moving',
    description: 'Complete home moving services tailored to your needs.',
    features: [
      'Full packing and unpacking services',
      'Furniture disassembly and reassembly',
      'Special handling of fragile items',
      'Flexible scheduling options',
      'Climate-controlled storage solutions'
    ],
    icon: Home
  },
  {
    title: 'Commercial Moving',
    description: 'Efficient business relocation with minimal disruption.',
    features: [
      'After-hours moving options',
      'IT equipment handling',
      'Office furniture installation',
      'Document management',
      'Project management services'
    ],
    icon: Building2
  },
  {
    title: 'Packing Services',
    description: 'Professional packing solutions for peace of mind.',
    features: [
      'High-quality packing materials',
      'Custom crating for valuable items',
      'Systematic labeling system',
      'Unpacking and organization',
      'Debris removal'
    ],
    icon: Package
  },
  {
    title: 'Specialty Moving',
    description: 'Expert handling of unique and valuable items.',
    features: [
      'Piano moving',
      'Art and antiques',
      'Safe and vault moving',
      'Exercise equipment',
      'Pool tables and large furniture'
    ],
    icon: Package
  }
];

export function ServicesPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Our Moving Services
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive moving solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {detailedServices.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-600 rounded-lg mx-auto">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-center text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 text-center">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}