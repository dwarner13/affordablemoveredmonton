import React from 'react';
import { DistanceSelectorProps } from './types';
import { MIN_DISTANCE, MAX_DISTANCE } from './constants';

export function DistanceSelector({ distance, onChange }: DistanceSelectorProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-200 mb-2">
        Moving Distance (km)
      </label>
      <input
        type="number"
        min={MIN_DISTANCE}
        max={MAX_DISTANCE}
        value={distance}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-3 py-2 bg-gray-700 rounded-md text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}