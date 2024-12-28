import React from 'react';
import { RoomSelectorProps } from './types';
import { ROOM_OPTIONS } from './constants';

export function RoomSelector({ rooms, onChange }: RoomSelectorProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-200 mb-2">
        Number of Rooms
      </label>
      <select
        value={rooms}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-3 py-2 bg-gray-700 rounded-md text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        {ROOM_OPTIONS.map((num) => (
          <option key={num} value={num}>
            {num} {num === 1 ? 'Room' : 'Rooms'}
          </option>
        ))}
      </select>
    </div>
  );
}