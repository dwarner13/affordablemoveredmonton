import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Successful Moves', value: '5000+' },
  { label: 'Professional Movers', value: '20+' },
  { label: 'Customer Satisfaction', value: '99%' }
];

export function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            About Affordable Movers Edmonton
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your trusted moving partner in Edmonton since 2014
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 2014, Affordable Movers Edmonton began with a simple mission: to provide quality moving services at reasonable prices. Over the years, we've grown from a small local operation to one of Edmonton's most trusted moving companies.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our team consists of experienced professionals who understand the stress and challenges of moving. We're committed to making your move as smooth and worry-free as possible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-blue-600 rounded-lg p-6 text-center text-white">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-center">Reliability</h3>
              <p className="mt-2 text-gray-600 text-center">
                We show up on time and deliver as promised, every time.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-center">Customer Focus</h3>
              <p className="mt-2 text-gray-600 text-center">
                Your satisfaction is our top priority.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-center">Excellence</h3>
              <p className="mt-2 text-gray-600 text-center">
                We maintain the highest standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}