import { GiBaseballBat } from "react-icons/gi";

type LastGameProps = {
  opponent: string;
  date: string;
};
export default function LastGame(props: LastGameProps) {
  return (
    <div className="from-brand-800 to-brand-900 from:0% col-span-2 flex flex-row rounded-xl bg-gradient-to-br p-4 transition-shadow hover:from-15%">
      <div className="flex grow flex-col">
        <h3 className="font-emphasis text-text text-lg font-semibold">
          <GiBaseballBat size={24} className="mr-2 inline-block" />
          Last Game
        </h3>
        <div className="font-emphasis text-text py-2 text-center text-lg font-semibold">
          vs. <span className="text-3xl">{props.opponent}</span>
        </div>
        <div className="record-games-label text-md text-gray-400">
          {props.date}
        </div>
      </div>
      <button className="bg-primary bottom hover:animate-scale-110 h-10 cursor-pointer rounded-full px-4 py-2 text-white">
        Record
      </button>
    </div>
  );
}
