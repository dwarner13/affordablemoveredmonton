import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Truck } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">Affordable Movers</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}