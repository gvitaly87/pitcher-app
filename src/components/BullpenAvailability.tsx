import "./BullpenAvailability.css";
import players from "../data/players";

import AvailabilityDataTable from "./AvailabilityDataTable";
import AvailabilityCards from "./AvailabilityCards";

import useToggleState from "../hooks/useToggleState";

//icons
import { CiViewTable } from "react-icons/ci";
import { RiLayoutGrid2Fill } from "react-icons/ri";

export default function BullpenAvailability() {
  const [availabilityView, toggleAvailabilityView] = useToggleState(true); //true = table view, false = card view

  return (
    <section className="bullpen-availability isolate col-span-4 col-start-1 row-span-3 row-start-2 rounded-2xl border-none bg-white/20 p-8 ring-1 shadow-lg ring-black/5 focus:outline">
      <div className="flex items-center justify-between">
        <h2 className="text-text font-heading font-heading m-2 pb-2 text-2xl">
          Bullpen Availability
        </h2>
        <div>
          <button
            onClick={toggleAvailabilityView}
            className={
              availabilityView
                ? "text-tertiary rounded-l-xl bg-green-950 p-2"
                : "bg-tertiary rounded-l-xl p-2 text-green-950"
            }
          >
            <CiViewTable size={24} />
          </button>
          <button
            onClick={toggleAvailabilityView}
            className={
              availabilityView
                ? "bg-tertiary rounded-r-xl p-2 text-green-950"
                : "text-tertiary rounded-r-xl bg-green-950 p-2"
            }
          >
            <RiLayoutGrid2Fill size={24} />
          </button>
        </div>
      </div>

      {availabilityView ? (
        <AvailabilityDataTable players={players} />
      ) : (
        <AvailabilityCards players={players} />
      )}
    </section>
  );
}
