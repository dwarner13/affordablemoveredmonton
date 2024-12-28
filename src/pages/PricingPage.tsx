import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Move',
    price: '150',
    description: 'Perfect for small apartments and studios',
    features: [
      'Two professional movers',
      'Moving truck (local)',
      'Basic furniture protection',
      'Loading & unloading',
      'Basic insurance coverage'
    ]
  },
  {
    name: 'Standard Move',
    price: '250',
    description: 'Ideal for 1-2 bedroom homes',
    features: [
      'Three professional movers',
      'Moving truck (local)',
      'Complete furniture protection',
      'Basic packing supplies',
      'Extended insurance coverage',
      'Furniture disassembly/assembly'
    ]
  },
  {
    name: 'Premium Move',
    price: '350',
    description: 'Best for large homes and offices',
    features: [
      'Four professional movers',
      'Large moving truck',
      'Premium packing supplies',
      'Full packing service',
      'Comprehensive insurance',
      'Priority scheduling',
      'Storage solutions'
    ]
  }
];

export function PricingPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Transparent Pricing Plans
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect moving package for your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {plan.name}
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className="text-gray-600">/hour</span>
                </div>
                <p className="mt-4 text-gray-600 text-center">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}