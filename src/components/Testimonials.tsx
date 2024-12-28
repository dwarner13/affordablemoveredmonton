import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'St. Albert',
    text: 'Excellent service at an affordable price. The team was professional and handled our belongings with care.',
    rating: 5
  },
  {
    name: 'Mike Thompson',
    location: 'Sherwood Park',
    text: 'Best movers in Edmonton! They made our office relocation smooth and stress-free.',
    rating: 5
  },
  {
    name: 'Emily Davis',
    location: 'Leduc',
    text: 'Very impressed with their punctuality and efficiency. Would definitely recommend!',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}