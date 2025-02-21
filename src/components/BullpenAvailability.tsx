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
    <section className="bullpen-availability isolate col-span-4 col-start-1 row-span-3 row-start-2 rounded-2xl border-none bg-white/20 p-2 ring-1 shadow-lg ring-black/5 focus:outline">
      <h2 className="text-text m-2 py-4 text-2xl font-semibold">
        Bullpen Availability
      </h2>
      <button
        onClick={toggleAvailabilityView}
        className={
          availabilityView
            ? "rounded-xl bg-green-950 p-2 text-green-50"
            : "rounded-xl bg-green-50 p-2 text-green-950"
        }
      >
        <CiViewTable className="text-4xl" />
      </button>
      <button
        onClick={toggleAvailabilityView}
        className={
          availabilityView
            ? "rounded-xl bg-green-50 p-2 text-green-950"
            : "rounded-xl bg-green-950 p-2 text-green-50"
        }
      >
        <RiLayoutGrid2Fill className="text-4xl" />
      </button>

      {availabilityView ? (
        <AvailabilityDataTable players={players} />
      ) : (
        <AvailabilityCards players={players} />
      )}
    </section>
  );
}
