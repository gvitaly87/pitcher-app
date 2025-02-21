import { CiBaseball } from "react-icons/ci";
import { LineChart, Line, ResponsiveContainer } from "recharts";

type PreviousPitcherProps = {
  name: string;
  pitchCount: number;
  date: string;
  pitchesData: {
    date: string;
    pitchCount: number;
  }[];
}; //TODO: add a chart to the previous player card

export default function PreviousPitcher(props: PreviousPitcherProps) {
  console.log(props.pitchesData);
  return (
    <div className="from-brand-800 to-brand-900 from:0% col-span-2 flex flex-row rounded-xl bg-gradient-to-br p-4 transition-shadow hover:from-15%">
      <div className="flex grow flex-col">
        <h3 className="font-emphasis text-brand-100 text-lg font-semibold">
          Previous Pitcher
        </h3>
        <div className="font-emphasis text-text py-2 text-center text-lg font-semibold">
          <span className="text-3xl">{props.name}</span>
        </div>
        <div className="record-games-label text-md text-gray-400">
          {props.date}
        </div>
      </div>
      <div>
        <div className="bg-secondary bottom h-10 cursor-pointer rounded-full px-4 py-2 text-white">
          + {props.pitchCount} <CiBaseball size={24} className="inline" />
        </div>
      </div>
    </div>
  );
}
