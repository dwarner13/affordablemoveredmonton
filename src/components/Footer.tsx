import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { MovingCalculator } from './calculator/MovingCalculator';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span>(780) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@affordablemoversedmonton.ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} />
                <span>Edmonton, Alberta</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#why-us" className="hover:text-blue-400">Why Choose Us</a></li>
              <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: By Appointment</li>
            </ul>
          </div>
          <div>
            <MovingCalculator />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Affordable Movers Edmonton. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}