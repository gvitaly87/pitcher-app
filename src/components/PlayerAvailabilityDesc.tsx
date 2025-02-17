import "./PlayerAvailabilityDesc.css";
import { Player } from "../data/players";
import { subtractDates } from "../utils/math";

import { FaRegCalendarCheck } from "react-icons/fa";
import { CiBaseball } from "react-icons/ci";
import { PiClockUser } from "react-icons/pi";

function PartialAvailability(props: { remainingPitches: number }) {
  return (
    <div className="partial-availability">
      <div className="pitches-remaining">
        <CiBaseball className="inline-block text-xl mx-1" />
        {props.remainingPitches}
      </div>
      <span className="availability-label">pitches remaining</span>
    </div>
  );
}

function NoAvailability(props: { nextPitch: Date }) {
  const today = new Date();
  const days = subtractDates(props.nextPitch, today);

  return (
    <div className="no-availability">
      <div className="days-remaining">
        <PiClockUser className="inline-block text-xl mx-1" />
        {days}
      </div>
      <span className="availability-label">days rest</span>
    </div>
  );
}

export default function PlayerAvailabilityDesc(props: { player: Player }) {
  const player = props.player;

  if (player.status === "Partial")
    return (
      <PartialAvailability remainingPitches={player.remainingPitches || 0} />
    );
  if (player.status === "Not Available")
    return <NoAvailability nextPitch={player.nextPitch!} />; //TODO: make sure nextPitch is not undefined
  return (
    <div className="available-pitcher">
      <FaRegCalendarCheck className="text-xl" />{" "}
      <span className="availability-label">fullly available</span>
    </div>
  );
}
