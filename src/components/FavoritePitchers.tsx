import players from "../data/players";

import { IoIosStar } from "react-icons/io";

export default function FavoritePitchers() {
  return (
    <div className="from-brand-800 to-brand-900 from:0% col-span-1 col-start-5 row-span-2 row-end-2 flex flex-col rounded-xl bg-gradient-to-br p-4 transition-shadow hover:from-15%">
      <h3 className="font-emphasis text-text text-lg font-semibold">
        <IoIosStar size={24} className="text-tertiary mr-2 inline-block" />
        Favorite Pitchers
      </h3>
      <div className="flex flex-wrap justify-center gap-4 py-4">
        {players.map((player, index) => {
          if (player.favorite) {
            return (
              <div
                key={index}
                className="text-brand-200 from-brand-900 to-brand-600 align-center size-14 rounded-full bg-radial-[at_25%_25%] to-75% text-center text-xl"
              >
                # {player.number}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
