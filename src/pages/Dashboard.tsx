import BullpenAvailability from "../components/BullpenAvailability";
import TodaysProgram from "../components/TodaysProgram";
import LastGame from "../components/LastGame";
import PreviousPitcher from "../components/PreviousPitcher";
import FavoritePitchers from "../components/FavoritePitchers";

const samplePitcher = {
  name: "Mark Thompson",
  date: "Feb 13th, 2025",
  pitchCount: 45,
  pitchesData: [
    { date: "2025/1/5", pitchCount: 55 },
    { date: "2025/1/10", pitchCount: 60 },
    { date: "2025/1/15", pitchCount: 73 },
    { date: "2025/1/20", pitchCount: 45 },
  ],
};
export default function Dashboard() {
  return (
    <main className="grow pr-5">
      <h1 className="font-heading text-text py-4 text-3xl">My Dashboard</h1>
      <div className="grid grid-cols-5 gap-4">
        <LastGame opponent="Wolves" date="Feb 19th 2025" />
        <PreviousPitcher
          name={samplePitcher.name}
          date={samplePitcher.date}
          pitchCount={samplePitcher.pitchCount}
          pitchesData={samplePitcher.pitchesData}
        />
        {/* <FavoritePitchers /> */}
        {/* TODO: have previousPitcher and LastGame use actual data */}
        <BullpenAvailability />
        {/* <TodaysProgram /> */}
      </div>
    </main>
  );
}
