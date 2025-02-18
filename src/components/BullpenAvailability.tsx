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
    <section className="bullpen-availability">
      <h2>Bullpen Availability</h2>
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
