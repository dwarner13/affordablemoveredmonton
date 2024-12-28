export interface CalculatorProps {
  rooms: number;
  distance: number;
  onChange: (value: number) => void;
}

export interface RoomSelectorProps {
  rooms: number;
  onChange: (rooms: number) => void;
}

export interface DistanceSelectorProps {
  distance: number;
  onChange: (distance: number) => void;
}