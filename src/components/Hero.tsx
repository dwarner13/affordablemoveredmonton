import React from 'react';
import { PhoneCall, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-blue-700">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
          src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&q=80"
          alt="Moving truck and movers"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Affordable Movers Edmonton
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Professional, budget-friendly moving solutions for residential and commercial relocations across Alberta.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <PhoneCall className="h-5 w-5 mr-2" />
            Get Free Quote
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-600 transition-colors"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Schedule Move
          </a>
        </div>
      </div>
    </div>
  );
}