import AvailabilityDataTable from "./AvailabilityDataTable";
import players from "../data/players";
import "./BullpenAvailability.css";
import AvailabilityCards from "./AvailabilityCards";
import useToggleState from "../hooks/useToggleState";

export default function BullpenAvailability() {
  const [availabilityView, toggleAvailabilityView] = useToggleState(true); //true = table view, false = card view

  return (
    <section className="bullpen-availability">
      <h2>Bullpen Availability</h2>
      <button onClick={toggleAvailabilityView}>Toggle</button>
      {availabilityView ? (
        <AvailabilityDataTable players={players} />
      ) : (
        <AvailabilityCards players={players} />
      )}
    </section>
  );
}
