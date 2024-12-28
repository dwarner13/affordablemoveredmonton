import React, { useState, useMemo } from 'react';
import { Calculator } from '../icons';
import { RoomSelector } from './RoomSelector';
import { DistanceSelector } from './DistanceSelector';
import { BASE_RATE, DISTANCE_RATE } from './constants';

export function MovingCalculator() {
  const [rooms, setRooms] = useState(2);
  const [distance, setDistance] = useState(10);

  const estimatedCost = useMemo(() => {
    const roomCost = rooms * BASE_RATE;
    const distanceCost = distance * DISTANCE_RATE;
    return roomCost + distanceCost;
  }, [rooms, distance]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Moving Cost Calculator</h3>
      </div>
      
      <RoomSelector rooms={rooms} onChange={setRooms} />
      <DistanceSelector distance={distance} onChange={setDistance} />

      <div className="mt-6 p-4 bg-gray-700 rounded-md">
        <p className="text-sm text-gray-300">Estimated Cost:</p>
        <p className="text-2xl font-bold text-white">${estimatedCost}</p>
        <p className="text-xs text-gray-400 mt-2">
          *This is a rough estimate. Contact us for a detailed quote.
        </p>
      </div>
    </div>
  );
}