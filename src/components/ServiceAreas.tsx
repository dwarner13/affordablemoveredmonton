import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  {
    region: 'North',
    cities: ['St. Albert', 'Morinville', 'Fort Saskatchewan', 'Gibbons', 'Bon Accord']
  },
  {
    region: 'South',
    cities: ['Leduc', 'Beaumont', 'Devon', 'Calmar', 'Nisku']
  },
  {
    region: 'East',
    cities: ['Sherwood Park', 'Ardrossan', 'Fort Saskatchewan', 'Strathcona County', 'Tofield']
  },
  {
    region: 'West',
    cities: ['Spruce Grove', 'Stony Plain', 'Parkland County', 'Acheson', 'Wabamun']
  }
];

export function ServiceAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Service Areas
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Serving Edmonton and surrounding communities
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div key={area.region} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {area.region} Region
                </h3>
              </div>
              <ul className="space-y-2">
                {area.cities.map((city) => (
                  <li key={city} className="text-gray-600">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Don't see your area listed? Contact us! We may still be able to help.
          </p>
        </div>
      </div>
    </section>
  );
}