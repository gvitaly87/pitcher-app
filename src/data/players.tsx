export type Player = {
  name: string;
  number: number;
  status: string;
  lastPitched: Date;
  nextPitch?: Date;
  pitchCount: number;
  remainingPitches?: number;
  favorite?: boolean;
};

const players: Player[] = [
  {
    name: "John Smith",
    number: 45,
    status: "Available",
    lastPitched: new Date("2025/2/10"),
    pitchCount: 70,
    favorite: false,
  },
  {
    name: "Carlos Reyes",
    number: 72,
    status: "Available",
    lastPitched: new Date("2025/2/11"),
    pitchCount: 35,
    favorite: true,
  },
  {
    name: "Derek Jones",
    number: 91,
    status: "Available",
    lastPitched: new Date("2025/2/12"),
    pitchCount: 80,
    favorite: true,
  },
  {
    name: "Mark Thompson",
    number: 5,
    status: "Available",
    lastPitched: new Date("2025/2/13"),
    pitchCount: 45,
    favorite: false,
  },
  {
    name: "Luke Williams",
    number: 17,
    status: "Partial",
    lastPitched: new Date("2025/2/12"),
    pitchCount: 30,
    remainingPitches: 25,
    favorite: false,
  },
  {
    name: "Ethan Jones",
    number: 88,
    status: "Not Available",
    lastPitched: new Date("2025/2/12"),
    nextPitch: new Date("2025/2/23"),
    pitchCount: 85,
    favorite: false,
  },
  {
    name: "Noah Brown",
    number: 23,
    status: "Available",
    lastPitched: new Date("2025/2/11"),
    pitchCount: 50,
    favorite: true,
  },
  {
    name: "Mason Davis",
    number: 3,
    status: "Partial",
    lastPitched: new Date("2025/2/12"),
    pitchCount: 40,
    remainingPitches: 20,
  },
];

export default players;
